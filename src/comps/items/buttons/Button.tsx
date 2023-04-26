import React from "react";
import dynamic from "next/dynamic";
import {GlobalButtonProps} from "./buttonprops";

const comps = {
  "default": dynamic(() => import("./Button001"), {suspense: true}),
  "btn001": dynamic(() => import("./Button001"), {suspense: true}),
  "btn002": dynamic(() => import("./Button002"), {suspense: true}),
};

const Button = ({layout, ...rest}: GlobalButtonProps) : JSX.Element => {
  const Component = comps[layout];

  return (
    <React.Suspense fallback={"Loading..."}>
      <Component {...rest} />
    </React.Suspense>
  );
};

Button.defaultProps = {layout: "default"};

export default React.memo(Button);
