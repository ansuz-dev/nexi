import React from "react";
import cx from "classnames";
import Link from "next/link";
import {ButtonProps} from "./buttonprops";

const Button001 = (props: ButtonProps) : JSX.Element => {
  const rootClass = cx(
    "button-001",
    {
      "inline-flex justify-center items-center rounded": true,
      "font-medium whitespace-nowrap": true,
      "hover:opacity-80 active:opacity-100": true,
      "border": props.type === "outlined",
      "text-white bg-primary-100": props.type === "solid" && props.color === "primary",
      "text-white bg-secondary-100": props.type === "solid" && props.color === "secondary",
      "text-primary-100 border-primary-100": props.type === "outlined" && props.color === "primary",
      "text-secondary-100 border-secondary-100": props.type === "outlined" && props.color === "secondary",
      "text-sm lg:text-base h-12 px-10": props.size === "large",
      "text-sm lg:text-base h-10 px-8": props.size === "medium",
      "text-xs lg:text-sm h-8 px-6": props.size === "small",
    },
    props.className,
  );

  return props.link
    ? (
      <Link href={props.href as string} prefetch={false}>
        <a className={rootClass}>
          {props.label}
        </a>
      </Link>
    )
    : (
      <button className={rootClass} type="button" onClick={props.onClick}>
        {props.label}
      </button>
    );
};

Button001.defaultProps = {
  link: false,
  type: "solid",
  color: "primary",
  size: "medium",
  className: "",
  href: "",
  onClick: undefined,
};

export default React.memo(Button001);
