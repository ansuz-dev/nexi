export interface PartnerSectionData {
  title?: string;
  subtitle?: string;
  background?: string;
  partners?: Array<unknown>;
  links?: Array<unknown>;
}

export interface PartnerSectionClasses {
  root?: string;
  container?: string;
  title?: string;
  subtitle?: string;
  list?: string;
  links?: string;
}

export interface PartnerSectionProps {
  data: PartnerSectionData;
  classes?: PartnerSectionClasses;
}

export type PartnerSectionLayouts =
  "default"
  | "pns001";

export interface GlobalPartnerSectionData extends PartnerSectionData {
  layout?: PartnerSectionLayouts;
}

export interface GlobalPartnerSectionProps extends PartnerSectionProps {
  data: GlobalPartnerSectionData;
}
