import React from "react";
import cx from "classnames";
import Link from "next/link";
import {ButtonProps} from "./buttonprops";

const Button002 = (props: ButtonProps) : JSX.Element => {
  const rootClass = cx(
    "button002",
    {
      "inline-flex justify-center items-center space-x-1.5 align-top": true,
      "font-medium whitespace-nowrap": true,
      "border": props.type === "outline",
      "text-white bg-primary-500 hover:bg-primary-400 active:bg-primary-600": props.type === "solid" && props.color === "primary",
      "text-white bg-secondary-500 hover:bg-secondary-400 active:bg-secondary-600": props.type === "solid" && props.color === "secondary",
      "text-primary-500 border-primary-500 hover:text-white active:text-white hover:bg-primary-400 active:bg-primary-600 hover:border-primary-400 active:border-primary-600": props.type === "outline" && props.color === "primary",
      "text-secondary-500 border-secondary-500 hover:text-white active:text-white hover:bg-secondary-400 active:bg-secondary-600 hover:border-secondary-400 active:border-secondary-600": props.type === "outline" && props.color === "secondary",
      "text-primary-500 hover:text-primary-400 active:text-primary-600": props.type === "text" && props.color === "primary",
      "text-secondary-500 hover:text-secondary-400 active:text-secondary-600": props.type === "text" && props.color === "secondary",
      "text-sm lg:text-base h-14 px-8": props.size === "large",
      "text-sm lg:text-base h-12 px-6": props.size === "medium",
      "text-xs lg:text-sm h-9 px-4": props.size === "small",
    },
    props.className,
  );

  return props.link
    ? (
      <Link
        href={props.href as string}
        prefetch={false}
        className={rootClass}
      >
        {props.icon}
        {Boolean(props.label) && <span>{props.label}</span>}
      </Link>
    )
    : (
      <button className={rootClass} type="button" onClick={props.onClick}>
        {props.icon}
        {Boolean(props.label) && <span>{props.label}</span>}
      </button>
    );
};

Button002.defaultProps = {
  link: false,
  type: "solid",
  color: "primary",
  size: "medium",
  className: "",
  href: "",
  onClick: undefined,
};

export default React.memo(Button002);
