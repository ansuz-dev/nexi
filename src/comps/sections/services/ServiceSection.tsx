import React from "react";
import dynamic from "next/dynamic";
import {GlobalServiceSectionProps} from "./servicesectionprops";

const comps = {
  "default": dynamic(() => import("./ServiceSection001"), {suspense: true}),
  "ss001": dynamic(() => import("./ServiceSection001"), {suspense: true}),
};

const ServiceSection = ({data}: GlobalServiceSectionProps) : JSX.Element => {
  const layout = data.layout ?? "default";
  const Component = comps[layout];

  return (
    <React.Suspense fallback={"Loading..."}>
      <Component data={data} />
    </React.Suspense>
  );
};

ServiceSection.defaultProps = {layout: "default"};

export default ServiceSection;
