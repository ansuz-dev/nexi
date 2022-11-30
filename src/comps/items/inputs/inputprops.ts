export type InputColors = "primary" | "secondary";

export type InputSizes = "large" | "medium" | "small";

export type InputLayouts = "default" | "input001";

export type SelectLayouts = "default" | "select001";

export interface InputProps {
  label?: string;
  helper?: string;
  color?: InputColors;
  size?: InputSizes;
  error?: boolean;
  className?: string;
  lefticon?: JSX.Element,
  righticon?: JSX.Element,
}

export interface GlobalInputProps extends InputProps {
  layout: InputLayouts;
}

export interface SelectProps extends InputProps {
  options?: Array<unknown>;
}

export interface GlobalSelectProps extends SelectProps {
  layout: SelectLayouts;
}
