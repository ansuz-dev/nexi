import React from "react";
import dynamic from "next/dynamic";
import {getLayout} from "../../../utils";
import {GlobalStatsSectionProps} from "./statssectionprops";

const comps = {
  "default": dynamic(() => import("./StatsSection001"), {suspense: true}),
  "sts001": dynamic(() => import("./StatsSection001"), {suspense: true}),
};

const StatsSection = (props: GlobalStatsSectionProps) : JSX.Element => {
  const Component = getLayout(comps, props.data.layout);

  return (
    <React.Suspense fallback={"Loading..."}>
      <Component {...props} />
    </React.Suspense>
  );
};

StatsSection.defaultProps = {layout: "default"};

export default React.memo(StatsSection);
