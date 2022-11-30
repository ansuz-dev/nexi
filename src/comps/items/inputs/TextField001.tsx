import React from "react";
import cx from "classnames";
import {InputProps} from "./inputprops";

const TextField001 = React.forwardRef((props: InputProps, ref): JSX.Element => {
  const {label, helper, color, size, lefticon, righticon, error} = props;

  const rootClass = cx(
    "textfield-001",
    "space-y-1",
  );
  const labelClass = cx(
    "input-label",
    "text-base leading-normal font-semibold tracking-[0.5px] text-black-secondary",
  );
  const inputClass = cx(
    "input-input",
    "text-base leading-normal tracking-[0.5px] w-full outline-none outline-neutral-200 outline-offset-0 outline-1 px-3 py-0 rounded bg-white",
    {
      "focus:outline-primary-600": color === "primary",
      "focus:outline-secondary-600": color === "secondary",
      "outline-red-600 focus:outline-red-600": error,
      "pl-10": Boolean(lefticon),
      "pr-10": Boolean(lefticon),
      "h-12": size === "large",
      "h-10": size === "medium",
      "h-8": size === "small",
    },
  );
  const helperClass = cx(
    "input-helper",
    "text-xs md:text-sm text-black-tertiary",
    {"text-red-600": error},
  );

  return (
    <div className={rootClass}>
      {Boolean(label) && <label className={labelClass}>{label}</label>}
      <div className="relative flex items-center">
        {Boolean(lefticon) && (
          <div className="absolute left-2 w-6 h-6 overflow-hidden">
            {lefticon}
          </div>
        )}
        <input
          ref={ref}
          className={inputClass}
          {...props}
        />
        {Boolean(righticon) && (
          <div className="absolute right-2 w-6 h-6 overflow-hidden">
            {righticon}
          </div>
        )}
      </div>
      {Boolean(helper) && <span className={helperClass}>{helper}</span>}
    </div>
  );
});

TextField001.defaultProps = {
  color: "primary",
  size: "medium",
  error: false,
};

export default React.memo(TextField001);
