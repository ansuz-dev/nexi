import React from "react";
import cx from "classnames";
import {ButtonProps} from "./buttonprops";

const Button001 = (props: ButtonProps) : JSX.Element => {
  const rootClass = cx(
    {
      "flex justify-center items-center rounded": true,
      "font-medium whitespace-nowrap": true,
      "text-white bg-primary-100 hover:bg-primary-80 active:bg-primary-100": props.type === "primary",
      "text-white bg-secondary-100 hover:bg-secondary-80 active:bg-secondary-100": props.type === "secondary",
      "text-sm lg:text-base h-12 px-10": props.size === "large",
      "text-sm lg:text-base h-10 px-8": props.size === "medium",
      "text-xs lg:text-sm h-8 px-6": props.size === "small",
    },
    props.className,
  );

  return (
    <button className={rootClass} type="button" onClick={props.onClick}>
      {props.label}
    </button>
  );
};

Button001.defaultProps = {
  type: "primary",
  size: "medium",
  className: "",
  onClick: undefined,
};

export default React.memo(Button001);
