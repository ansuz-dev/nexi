import React from "react";
import dynamic from "next/dynamic";
import {getLayout} from "../../../utils";
import {GlobalPreviewSectionProps} from "./previewsectionprops";

const comps = {
  "default": dynamic(() => import("./PreviewSection001"), {suspense: true}),
  "prs001": dynamic(() => import("./PreviewSection001"), {suspense: true}),
};

const PreviewSection = (props: GlobalPreviewSectionProps) : JSX.Element => {
  const Component = getLayout(comps, props.data.layout);

  return (
    <React.Suspense fallback={"Loading..."}>
      <Component {...props} />
    </React.Suspense>
  );
};

PreviewSection.defaultProps = {layout: "default"};

export default React.memo(PreviewSection);
