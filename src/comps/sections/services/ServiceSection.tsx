import React from "react";
import dynamic from "next/dynamic";
import {getLayout} from "../../../utils";
import {GlobalServiceSectionProps} from "./servicesectionprops";

const comps = {
  "default": dynamic(() => import("./ServiceSection001"), {suspense: true}),
  "ss001": dynamic(() => import("./ServiceSection001"), {suspense: true}),
  "ss002": dynamic(() => import("./ServiceSection002"), {suspense: true}),
  "ss003": dynamic(() => import("./ServiceSection003"), {suspense: true}),
};

const ServiceSection = (props: GlobalServiceSectionProps) : JSX.Element => {
  const Component = getLayout(comps, props.data.layout);

  return (
    <React.Suspense fallback={"Loading..."}>
      <Component {...props} />
    </React.Suspense>
  );
};

ServiceSection.defaultProps = {layout: "default"};

export default React.memo(ServiceSection);
