import React from "react";
import dynamic from "next/dynamic";
import {getLayout} from "../../../utils";
import {GlobalInputProps} from "./inputprops";

const comps = {
  "default": dynamic(() => import("./TextField001"), {suspense: true}),
  "input001": dynamic(() => import("./TextField001"), {suspense: true}),
  "input002": dynamic(() => import("./TextField002"), {suspense: true}),
};

const TextField = React.forwardRef<HTMLInputElement, GlobalInputProps>(
  (props, ref) : JSX.Element => {
    const Component = getLayout(comps, props.layout);

    return (
      <React.Suspense fallback={"Loading..."}>
        <Component ref={ref} {...props} />
      </React.Suspense>
    );
  },
);

TextField.defaultProps = {layout: "default"};

export default React.memo(TextField);
