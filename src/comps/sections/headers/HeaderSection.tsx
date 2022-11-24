import React from "react";
import dynamic from "next/dynamic";
import {getLayout} from "../../../utils";
import {GlobalHeaderSectionProps} from "./headersectionprops";

const comps = {
  "default": dynamic(() => import("./HeaderSection001"), {suspense: true}),
  "hs001": dynamic(() => import("./HeaderSection001"), {suspense: true}),
};

const HeaderSection = (props: GlobalHeaderSectionProps) : JSX.Element => {
  const Component = getLayout(comps, props.data.layout);

  return (
    <React.Suspense fallback={"Loading..."}>
      <Component {...props} />
    </React.Suspense>
  );
};

HeaderSection.defaultProps = {layout: "default"};

export default React.memo(HeaderSection);
