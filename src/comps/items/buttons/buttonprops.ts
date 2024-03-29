export type ButtonTypes = "solid" | "outline" | "text";

export type ButtonColors = "primary" | "secondary";

export type ButtonSizes = "large" | "medium" | "small";

export type ButtonLayouts = "default" | "btn001" | "btn002";

export interface ButtonProps {
  label: string;
  link?: boolean;
  type?: ButtonTypes;
  color?: ButtonColors;
  size?: ButtonSizes;
  className?: string;
  href?: string;
  icon?: JSX.Element;
  onClick?: () => void;
}

export interface GlobalButtonProps extends ButtonProps {
  layout: ButtonLayouts;
}
