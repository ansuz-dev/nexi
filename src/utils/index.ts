/* eslint-disable prefer-named-capture-group */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import {ComponentType} from "react";

// eslint-disable-next-line no-process-env
const domain = process.env.NEXT_PUBLIC_STRAPI_API_URL as string;

const shimmerWidth = 100;

export interface Layouts<P> {
  [key: string]: ComponentType<P>;
}

export function getLayout<P>(comps: Layouts<P>, layout?:string): ComponentType<P> {
  const i = layout ?? "default";

  if (Object.hasOwn(comps, i)) {
    return comps[i];
  }

  if (Object.hasOwn(comps, "default")) {
    return comps["default"];
  }

  return () => null;
}

export const getAttr = (obj: unknown, ...attrs: Array<string | number>): unknown => {
  const val = attrs.reduce(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (previousValue:any, attr: string | number) => (
      previousValue?.data?.attributes?.[attr]
      || previousValue?.data?.[attr]
      || previousValue?.attributes?.[attr]
      || previousValue?.[attr]
    ),
    obj,
  );

  return val;
};

export const getUrl = (obj: unknown, withDomain = true): string | undefined => {
  const url = getAttr(obj, "url") as string;

  if (!url) return undefined;

  if (url.match(/^http(s)*:\/\//u)) return url;

  return withDomain ? `${domain}${url}` : url;
};

export const getFormatUrl = (obj: unknown, type: string, withDomain = true): string | undefined => {
  const url = getAttr(obj, "formats", type, "url") as string;

  if (!url) return getUrl(obj, withDomain);

  if (url.match(/^http(s)*:\/\//u)) return url;

  return withDomain ? `${domain}${url}` : url;
};

const shimmer = (w: number, h: number): string => `
<svg
  width="${w}"
  height="${h}"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <defs>
    <linearGradient id="g">
      <stop stop-color="#dfdfdf" offset="20%" />
      <stop stop-color="#c5c5c5" offset="50%" />
      <stop stop-color="#dfdfdf" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#e9eaea" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate
    xlink:href="#r"
    attributeName="x"
    from="-${w}"
    to="${w}"
    dur="1s"
    repeatCount="indefinite"
  />
</svg>`;

const toBase64 = (str: string): string => typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);

export const shimmerBlur
= (w: number, h: number): string => `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;

export const isGray = (background: string): boolean => {
  if (!background) return false;

  return Boolean(background.trim().match(/^(grey|gray)$/ui));
};

export function sleepAsync(duration: number): Promise<void> {
  return new Promise(resolve => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      resolve();
    }, duration);
  });
}

export interface LoopState {
  index: number;
  status: "running" | "stopped";
  durations: Array<number>;
  callback: (index: number) => void,
}

async function runLoop(state: LoopState) {
  await sleepAsync(state.durations[state.index]);

  if (state.status === "running") {
    state.index++;
    if (state.index >= state.durations.length) state.index = 0;

    setTimeout(() => state.callback(state.index), 0);

    await runLoop(state);
  }
}

export function stepperLoop(
  durations: Array<number>,
  callback: (index: number) => void,
): LoopState {
  const state: LoopState = {
    index: 0,
    status: "running",
    durations,
    callback,
  };

  runLoop(state).catch(err => console.log(err));

  return state;
}

export function getBlurData(photo: unknown): string {
  const thumbnail = getFormatUrl(photo, "thumbnail");
  if (thumbnail) return thumbnail;

  return shimmerBlur(shimmerWidth, shimmerWidth);
}

export function fixContent(content: string): string {
  return content.replaceAll("/uploads/", `${domain}/uploads/`);
}

export function isAbsoluteURL(url: string): boolean {
  if (!url) return false;

  const regex = /^(http:\/\/|https:\/\/|ftp:\/\/|git+ssh:\/\/|mailto:|tel:|geo:|maps:\/\/)/gui;

  return regex.test(url);
}
