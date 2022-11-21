export type ButtonTypes = "solid" | "outlined";

export type ButtonColors = "primary" | "secondary";

export type ButtonSizes = "large" | "medium" | "small";

export type ButtonLayouts = "default" | "btn001";

export interface ButtonProps {
  label: string;
  link?: boolean;
  type?: ButtonTypes;
  color?: ButtonColors;
  size?: ButtonSizes;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export interface GlobalButtonProps extends ButtonProps {
  layout: ButtonLayouts;
}
