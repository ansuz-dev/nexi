import React from "react";
import dynamic from "next/dynamic";
import {GlobalStatsSectionProps} from "./statssectionprops";

const comps = {
  "default": dynamic(() => import("./StatsSection001"), {suspense: true}),
  "sts001": dynamic(() => import("./StatsSection001"), {suspense: true}),
};

const StatsSection = ({data, ...rest}: GlobalStatsSectionProps) : JSX.Element => {
  const layout = data.layout ?? "default";
  const Component = comps[layout];

  return (
    <React.Suspense fallback={"Loading..."}>
      <Component data={data} {...rest} />
    </React.Suspense>
  );
};

StatsSection.defaultProps = {layout: "default"};

export default React.memo(StatsSection);
