import React from "react";
import dynamic from "next/dynamic";
import {getLayout} from "../../../utils";
import {GlobalPricingSectionProps} from "./pricingsectionprops";

const comps = {
  "default": dynamic(() => import("./PricingSection001"), {suspense: true}),
  "ps001": dynamic(() => import("./PricingSection001"), {suspense: true}),
};

const PricingSection = (props: GlobalPricingSectionProps) : JSX.Element => {
  const Component = getLayout(comps, props.data.layout);

  return (
    <React.Suspense fallback={"Loading..."}>
      <Component {...props} />
    </React.Suspense>
  );
};

PricingSection.defaultProps = {layout: "default"};

export default React.memo(PricingSection);
