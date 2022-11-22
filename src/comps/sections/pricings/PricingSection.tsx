import React from "react";
import dynamic from "next/dynamic";
import {GlobalPricingSectionProps} from "./pricingsectionprops";

const comps = {
  "default": dynamic(() => import("./PricingSection001"), {suspense: true}),
  "ps001": dynamic(() => import("./PricingSection001"), {suspense: true}),
};

const PricingSection = ({data}: GlobalPricingSectionProps) : JSX.Element => {
  const layout = data.layout ?? "default";
  const Component = comps[layout];

  return (
    <React.Suspense fallback={"Loading..."}>
      <Component data={data} />
    </React.Suspense>
  );
};

PricingSection.defaultProps = {layout: "default"};

export default PricingSection;
