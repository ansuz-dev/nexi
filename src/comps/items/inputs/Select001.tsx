import React from "react";
import Select from "react-select";
import {SelectProps} from "./inputprops";

const Select001 = (props: SelectProps): JSX.Element => {
  console.log(props);

  return (
    <Select
      {...props}
      classNames={{control: state => state.isFocused ? "border-red-600" : "border-grey-300"}}
    />
  );
};

Select001.propTypes = {};

export default React.memo(Select001);
