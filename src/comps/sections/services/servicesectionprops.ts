export interface ServiceSectionData {
  title?: string;
  subtitle?: string;
  background?: string;
  services?: Array<unknown>
}

export interface ServiceSectionClasses {
  root?: string;
  container?: string;
  title?: string;
  subtitle?: string;
  list?: string;
}

export interface ServiceSectionProps {
  data: ServiceSectionData;
  classes?: ServiceSectionClasses;
}

export type ServiceSectionLayouts = "default" | "ss001";

export interface GlobalServiceSectionData extends ServiceSectionData {
  layout?: ServiceSectionLayouts;
}

export interface GlobalServiceSectionProps extends ServiceSectionProps {
  data: GlobalServiceSectionData;
}
