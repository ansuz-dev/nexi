import React from "react";
import cx from "classnames";
import Select from "react-select";
import {SelectProps} from "./inputprops";

const Select001 = (props: SelectProps): JSX.Element => {
  const {
    name,
    label,
    helper,
    color,
    size,
    error,
    ...rest
  } = props;

  const rootClass = cx(
    "select001",
    "space-y-1",
  );
  const labelClass = cx(
    "select-label",
    "text-base leading-normal font-semibold tracking-[0.5px] text-black-secondary",
  );
  const selectClass = cx({
    "select-select": true,
    [color as string]: true,
    [size as string]: true,
  });
  const helperClass = cx(
    "select-helper",
    "text-xs md:text-sm text-black-tertiary",
    {"text-red-600": error},
  );

  return (
    <div className={rootClass}>
      {Boolean(label) && <label className={labelClass}>{label}</label>}
      <Select
        instanceId={name}
        className={selectClass}
        classNamePrefix="select001"
        {...rest}
      />
      {Boolean(helper) && <span className={helperClass}>{helper}</span>}
    </div>
  );
};

Select001.defaultProps = {
  color: "primary",
  size: "medium",
};

export default React.memo(Select001);
