/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// eslint-disable-next-line no-process-env
const domain = process.env.NEXT_PUBLIC_STRAPI_API_URL as string;

export const getAttr = (obj: unknown, ...attrs: Array<string>): unknown => {
  const val = attrs.reduce(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (previousValue:any, attr: string) => (
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

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#dfdfdf" offset="20%" />
      <stop stop-color="#c5c5c5" offset="50%" />
      <stop stop-color="#dfdfdf" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#e9eaea" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string): string => typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);

export const shimmerBlur
= (w: number, h: number): string => `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;
