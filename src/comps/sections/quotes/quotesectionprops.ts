export interface QuoteSectionData {
  title?: string;
  subtitle?: string;
  background?: string;
  photo?: unknown;
  quotes?: Array<unknown>;
  links?: Array<unknown>;
}

export interface QuoteSectionClasses {
  root?: string;
  container?: string;
  title?: string;
  subtitle?: string;
  links?: string;
}

export interface QuoteSectionProps {
  data: QuoteSectionData;
  classes?: QuoteSectionClasses;
}

export type QuoteSectionLayouts =
  "default"
  | "qs001";

export interface GlobalQuoteSectionData extends QuoteSectionData {
  layout?: QuoteSectionLayouts;
}

export interface GlobalQuoteSectionProps extends QuoteSectionProps {
  data: GlobalQuoteSectionData;
}
