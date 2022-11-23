export interface NavbarData {
  logo?: unknown;
  links?: Array<unknown>;
  rightLinks?: Array<unknown>;
}

export interface NavbarClasses {
  root?: string;
  container?: string;
  logo?: string;
  links?: string;
  rightLinks?: string;
}

export interface NavbarProps {
  data: NavbarData;
  classes?: NavbarClasses;
  active?: string;
}

export type NavbarLayouts =
  "default"
  | "nav001";

export interface GlobalNavbarData extends NavbarData {
  layout?: NavbarLayouts;
}

export interface GlobalNavbarProps extends NavbarProps {
  data: GlobalNavbarData;
}
