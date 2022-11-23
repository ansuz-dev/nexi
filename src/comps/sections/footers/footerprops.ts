import {ContactItemProps} from "../../items/common/ContactItem";

export interface FooterData {
  logo?: unknown;
  photo?: unknown;
  addresses?: Array<unknown>;
  contacts?: Array<unknown>;
  links?: Array<unknown>;
  socialLinks: unknown;
  copyright?: string;
}

export interface FooterClasses {
  root?: string;
  container?: string;
  logo?: string;
  links?: string;
  rightLinks?: string;
}

export interface FooterProps {
  data: FooterData;
  classes?: FooterClasses;
}

export type FooterLayouts =
  "default"
  | "footer001";

export interface GlobalFooterData extends FooterData {
  layout?: FooterLayouts;
}

export interface GlobalFooterProps extends FooterProps {
  data: GlobalFooterData;
}
