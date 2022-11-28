import React from "react";
import dynamic from "next/dynamic";
import {getLayout} from "../../../utils";
import {GlobalSelectProps} from "./inputprops";

const comps = {
  "default": dynamic(() => import("./Select001"), {suspense: true}),
  "select001": dynamic(() => import("./Select001"), {suspense: true}),
};

const Select = (props: GlobalSelectProps) : JSX.Element => {
  const Component = getLayout(comps, props.layout);

  return (
    <React.Suspense fallback={"Loading..."}>
      <Component {...props} />
    </React.Suspense>
  );
};

Select.defaultProps = {layout: "default"};

export default React.memo(Select);
