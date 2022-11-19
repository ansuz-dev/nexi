import React from "react";
import dynamic from "next/dynamic";
import {GlobalButtonProps} from "./buttonprops";

const Button001 = dynamic(() => import("./Button001"));

const comps = {
  "default": Button001,
  "btn001": Button001,
};

const Button = ({layout, ...rest}: GlobalButtonProps) : JSX.Element => {
  const Component = comps[layout];

  return (
    <Component {...rest} />
  );
};

Button.defautProps = {layout: "default"};

export default Button;
