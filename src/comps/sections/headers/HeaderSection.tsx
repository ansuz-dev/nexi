import React from "react";
import dynamic from "next/dynamic";
import {GlobalHeaderSectionProps} from "./headersectionprops";

const comps = {
  "default": dynamic(() => import("./HeaderSection001"), {suspense: true}),
  "hs001": dynamic(() => import("./HeaderSection001"), {suspense: true}),
};

const HeaderSection = ({data}: GlobalHeaderSectionProps) : JSX.Element => {
  const layout = data.layout ?? "default";
  const Component = comps[layout];

  return (
    <React.Suspense fallback={"Loading..."}>
      <Component data={data} />
    </React.Suspense>
  );
};

HeaderSection.defaultProps = {layout: "default"};

export default HeaderSection;
