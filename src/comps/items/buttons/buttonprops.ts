export type ButtonTypes = "primary" | "secondary";

export type ButtonSizes = "large" | "medium" | "small";

export type ButtonLayouts = "default" | "btn001";

export interface ButtonProps {
  label: string;
  type?: ButtonTypes;
  size?: ButtonSizes;
  className?: string;
  onClick?: () => void;
}

export interface GlobalButtonProps extends ButtonProps {
  layout: ButtonLayouts;
}
