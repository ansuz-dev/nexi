import React from "react";
import dynamic from "next/dynamic";
import {getLayout} from "../../../utils";
import {GlobalQuoteSectionProps} from "./quotesectionprops";

const comps = {
  "default": dynamic(() => import("./QuoteSection001"), {suspense: true}),
  "qs001": dynamic(() => import("./QuoteSection001"), {suspense: true}),
};

const QuoteSection = (props: GlobalQuoteSectionProps) : JSX.Element => {
  const Component = getLayout(comps, props.data.layout);

  return (
    <React.Suspense fallback={"Loading..."}>
      <Component {...props} />
    </React.Suspense>
  );
};

QuoteSection.defaultProps = {layout: "default"};

export default React.memo(QuoteSection);
