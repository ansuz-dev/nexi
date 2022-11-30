export interface HeaderSectionData {
  title?: string;
  subtitle?: string;
  background?: string;
  photos?: Array<unknown>;
  links?: Array<unknown>;
  slides?: Array<unknown>;
}

export interface HeaderSectionClasses {
  root?: string;
  container?: string;
  title?: string;
  subtitle?: string;
  links?: string;
}

export interface HeaderSectionProps {
  data: HeaderSectionData;
  classes?: HeaderSectionClasses;
}

export type HeaderSectionLayouts =
  "default"
  | "hs001"
  | "hs002";

export interface GlobalHeaderSectionData extends HeaderSectionData {
  layout?: HeaderSectionLayouts;
}

export interface GlobalHeaderSectionProps extends HeaderSectionProps {
  data: GlobalHeaderSectionData;
}
