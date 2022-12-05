import React from "react";
import dynamic from "next/dynamic";
import {getLayout} from "../../../utils";
import {GlobalTextSectionProps} from "./textsectionprops";

const comps = {
  "default": dynamic(() => import("./TextSection001"), {suspense: true}),
  "ts001": dynamic(() => import("./TextSection001"), {suspense: true}),
};

const QuoteSection = (props: GlobalTextSectionProps) : JSX.Element => {
  const Component = getLayout(comps, props.data.layout);

  return (
    <React.Suspense fallback={"Loading..."}>
      <Component {...props} />
    </React.Suspense>
  );
};

QuoteSection.defaultProps = {layout: "default"};

export default React.memo(QuoteSection);
