export interface StatsSectionData {
  title?: string;
  subtitle?: string;
  background?: string;
  stats?: Array<unknown>;
  links?: Array<unknown>;
}

export interface StatsSectionClasses {
  root?: string;
  container?: string;
  title?: string;
  subtitle?: string;
  list?: string;
  links?: string;
}

export interface StatsSectionProps {
  data: StatsSectionData;
  classes?: StatsSectionClasses;
}

export type StatsSectionLayouts =
  "default"
  | "sts001";

export interface GlobalStatsSectionData extends StatsSectionData {
  layout?: StatsSectionLayouts;
}

export interface GlobalStatsSectionProps extends StatsSectionProps {
  data: GlobalStatsSectionData;
}
