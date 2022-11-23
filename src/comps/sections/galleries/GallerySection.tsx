import React from "react";
import dynamic from "next/dynamic";
import {GlobalHeaderSectionProps} from "./gallerysectionprops";

const comps = {
  "default": dynamic(() => import("./GallerySection001"), {suspense: true}),
  "gs001": dynamic(() => import("./GallerySection001"), {suspense: true}),
  "gs002": dynamic(() => import("./GallerySection002"), {suspense: true}),
};

const GallerySection = ({data}: GlobalHeaderSectionProps) : JSX.Element => {
  const layout = data.layout ?? "default";
  const Component = comps[layout];

  return (
    <React.Suspense fallback={"Loading..."}>
      <Component data={data} />
    </React.Suspense>
  );
};

GallerySection.defaultProps = {layout: "default"};

export default React.memo(GallerySection);
