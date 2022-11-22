export interface PricingSectionData {
  title?: string;
  subtitle?: string;
  background?: string;
  plans?: Array<unknown>;
  links?: Array<unknown>;
}

export interface PricingSectionClasses {
  root?: string;
  container?: string;
  title?: string;
  subtitle?: string;
  links?: string;
}

export interface PricingSectionProps {
  data: PricingSectionData;
  classes?: PricingSectionClasses;
}

export type PricingSectionLayouts =
  "default"
  | "ps001";

export interface GlobalPricingSectionData extends PricingSectionData {
  layout?: PricingSectionLayouts;
}

export interface GlobalPricingSectionProps extends PricingSectionProps {
  data: GlobalPricingSectionData;
}
