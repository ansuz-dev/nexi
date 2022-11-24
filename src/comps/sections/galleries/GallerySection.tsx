import React from "react";
import dynamic from "next/dynamic";
import {getLayout} from "../../../utils";
import {GlobalHeaderSectionProps} from "./gallerysectionprops";

const comps = {
  "default": dynamic(() => import("./GallerySection001"), {suspense: true}),
  "gs001": dynamic(() => import("./GallerySection001"), {suspense: true}),
  "gs002": dynamic(() => import("./GallerySection002"), {suspense: true}),
};

const GallerySection = (props: GlobalHeaderSectionProps) : JSX.Element => {
  const Component = getLayout(comps, props.data.layout);

  return (
    <React.Suspense fallback={"Loading..."}>
      <Component {...props} />
    </React.Suspense>
  );
};

GallerySection.defaultProps = {layout: "default"};

export default React.memo(GallerySection);
