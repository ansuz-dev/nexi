export interface GallerySectionData {
  title?: string;
  subtitle?: string;
  background?: string;
  photos?: unknown;
  links?: Array<unknown>;
}

export interface GallerySectionClasses {
  root?: string;
  container?: string;
  title?: string;
  subtitle?: string;
  links?: string;
}

export interface GallerySectionProps {
  data: GallerySectionData;
  classes?: GallerySectionClasses;
}

export type GallerySectionLayouts =
  "default"
  | "gs001"
  | "gs002";

export interface GlobalHeaderSectionData extends GallerySectionData {
  layout?: GallerySectionLayouts;
}

export interface GlobalHeaderSectionProps extends GallerySectionProps {
  data: GlobalHeaderSectionData;
}
