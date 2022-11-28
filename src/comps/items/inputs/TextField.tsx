import React from "react";
import dynamic from "next/dynamic";
import {getLayout} from "../../../utils";
import {GlobalInputProps} from "./inputprops";

const comps = {
  "default": dynamic(() => import("./TextField001"), {suspense: true}),
  "input001": dynamic(() => import("./TextField001"), {suspense: true}),
};

const TextField = (props: GlobalInputProps) : JSX.Element => {
  const Component = getLayout(comps, props.layout);

  return (
    <React.Suspense fallback={"Loading..."}>
      <Component {...props} />
    </React.Suspense>
  );
};

TextField.defaultProps = {layout: "default"};

export default React.memo(TextField);
