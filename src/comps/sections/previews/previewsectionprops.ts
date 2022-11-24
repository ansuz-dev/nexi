export interface PreviewSectionData {
  title?: string;
  subtitle?: string;
  background?: string;
  document?: unknown;
  links?: Array<unknown>;
}

export interface PreviewSectionClasses {
  root?: string;
  container?: string;
  title?: string;
  subtitle?: string;
  document?: string;
  links?: string;
}

export interface PreviewSectionProps {
  data: PreviewSectionData;
  classes?: PreviewSectionClasses;
}

export type PreviewSectionLayouts =
  "default"
  | "prs001";

export interface GlobalPreviewSectionData extends PreviewSectionData {
  layout?: string;
}

export interface GlobalPreviewSectionProps extends PreviewSectionProps {
  data: GlobalPreviewSectionData;
}
