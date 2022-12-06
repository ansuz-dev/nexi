import React from "react";
import dynamic from "next/dynamic";
import {getLayout} from "../../../utils";
import {GlobalPartnerSectionProps} from "./partnersectionprops";

const comps = {
  "default": dynamic(() => import("./PartnerSection001"), {suspense: true}),
  "pns001": dynamic(() => import("./PartnerSection001"), {suspense: true}),
};

const PartnerSection = (props: GlobalPartnerSectionProps) : JSX.Element => {
  const Component = getLayout(comps, props.data.layout);

  return (
    <React.Suspense fallback={"Loading..."}>
      <Component {...props} />
    </React.Suspense>
  );
};

PartnerSection.defaultProps = {layout: "default"};

export default React.memo(PartnerSection);
