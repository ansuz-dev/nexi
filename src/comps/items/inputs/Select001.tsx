import React from "react";
import Select, {GroupBase, StylesConfig} from "react-select";
import {InputColors, InputSizes, SelectProps} from "./inputprops";

declare module "react-select/dist/declarations/src/Select" {
  export interface Props<
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  > {
    size?: InputSizes;
    color?: InputColors;
  }
}

type IsMulti = false;

const heights = {
  "large": 48,
  "medium": 40,
  "small": 32,
};

const Select001 = (props: SelectProps): JSX.Element => {
  const styles: StylesConfig<unknown, IsMulti> = {
    control: (baseStyles, state) => {
      console.log("baseStyles:", baseStyles);
      console.log("state:", state);

      return {
        ...baseStyles,
        height: heights[state.selectProps.size ?? "medium"],
        borderColor: state.isFocused ? "grey" : "red",
      };
    },
  };

  return (
    <Select
      {...props}
      classNamePrefix="select-001"
      styles={styles}
    />
  );
};

Select001.defaultProps = {
  color: "primary",
  size: "medium",
};

export default React.memo(Select001);
