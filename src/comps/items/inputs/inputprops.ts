import {HTMLInputTypeAttribute} from "react";

export type InputColors = "primary" | "secondary";

export type InputSizes = "large" | "medium" | "small";

export type InputLayouts = "default" | "input001" | "input002";

export type TexAreaLayouts = "default" | "textarea001" | "textarea002";

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

export interface TextAreaProps {
  label?: string;
  helper?: string;
  placeholder?: string;
  color?: InputColors;
  error?: boolean;
  className?: string;
  rows?: number;
}

export interface GlobalTextAreaProps extends TextAreaProps {
  layout: TexAreaLayouts;
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
