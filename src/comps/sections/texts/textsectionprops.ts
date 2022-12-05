export interface TextSectionData {
  background?: string;
  content?: string;
}

export interface TextSectionClasses {
  root?: string;
  container?: string;
  content?: string;
}

export interface TextSectionProps {
  data: TextSectionData;
  classes?: TextSectionClasses;
}

export type TextSectionLayouts =
  "default"
  | "ts001";

export interface GlobalTextSectionData extends TextSectionData {
  layout?: TextSectionLayouts;
}

export interface GlobalTextSectionProps extends TextSectionProps {
  data: GlobalTextSectionData;
}
