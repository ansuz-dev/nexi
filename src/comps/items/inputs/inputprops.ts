import {HTMLInputTypeAttribute} from "react";

export type InputColors = "primary" | "secondary";

export type InputSizes = "large" | "medium" | "small";

export type InputLayouts = "default" | "input001";

export type SelectLayouts = "default" | "select001";

export interface InputProps {
  label?: string;
  helper?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
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

export interface SelectProps {
  name: string;
  label?: string;
  helper?: string;
  placeholder?: string;
  color?: InputColors;
  size?: InputSizes;
  error?: boolean;
  className?: string;
  options?: Array<unknown>;
}

export interface GlobalSelectProps extends SelectProps {
  layout: SelectLayouts;
}
