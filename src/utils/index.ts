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
