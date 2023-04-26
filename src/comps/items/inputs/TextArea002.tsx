import React from "react";
import cx from "classnames";
import {InputProps} from "./inputprops";

const TextArea002 = React.forwardRef<HTMLTextAreaElement, InputProps>(
  (props, ref): JSX.Element => {
    const {
      label,
      helper,
      color,
      size,
      lefticon,
      righticon,
      error,
      ...rest
    } = props;

    const rootClass = cx(
      "textarea002",
      "space-y-1",
    );
    const labelClass = cx(
      "textarea-label",
      "text-base leading-normal font-semibold tracking-[0.5px] text-black-secondary",
    );
    const inputClass = cx(
      "textarea-input",
      "peer text-base leading-normal tracking-[0.5px] w-full outline-none outline-neutral-200 outline-offset-0 outline-1 p-3 bg-white",
      "placeholder:text-neutral-400 hover:outline-neutral-400",
      {
        "focus:outline-primary-600": color === "primary",
        "focus:outline-secondary-600": color === "secondary",
        "outline-red-600 focus:outline-red-600": error,
        "pl-10": Boolean(lefticon),
        "pr-10": Boolean(righticon),
      },
    );
    const helperClass = cx(
      "textarea-helper",
      "text-xs md:text-sm text-black-tertiary",
      {"text-red-600": error},
    );
    const leftIconClass = cx(
      "textarea-leftIcon",
      "absolute left-2 w-6 h-6 overflow-hidden text-neutral-400",
      {
        "peer-focus:text-primary-600": color === "primary",
        "peer-focus:text-secondary-600": color === "secondary",
      },
    );
    const rightIconClass = cx(
      "textarea-rightIcon",
      "absolute right-2 w-6 h-6 overflow-hidden text-neutral-400",
      {
        "peer-focus:text-primary-600": color === "primary",
        "peer-focus:text-secondary-600": color === "secondary",
      },
    );

    return (
      <div className={rootClass}>
        {Boolean(label) && <label className={labelClass}>{label}</label>}
        <div className="relative flex items-center">
          <textarea
            ref={ref}
            className={inputClass}
            {...rest}
          />
          {Boolean(lefticon) && (
            <div className={leftIconClass}>
              {lefticon}
            </div>
          )}
          {Boolean(righticon) && (
            <div className={rightIconClass}>
              {righticon}
            </div>
          )}
        </div>
        {Boolean(helper) && <span className={helperClass}>{helper}</span>}
      </div>
    );
  },
);

TextArea002.defaultProps = {
  type: "textarea",
  color: "primary",
  size: "medium",
  error: false,
};

export default React.memo(TextArea002);
