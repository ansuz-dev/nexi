import React from "react";
import GallerySection001 from "../../../../comps/sections/galleries/GallerySection001";
import {GallerySectionProps} from "../../../../comps/sections/galleries/gallerysectionprops";

export default {
  title: "Sections/Galleries/GallerySection001",
  component: GallerySection001,
};

const Template = (props : GallerySectionProps) => (
  <div>
    <GallerySection001 {...props} />
  </div>
);

export const SampleSection = Template.bind({});
SampleSection.args = {
  data: {
    photos: {
      data: [
        {attributes: {url: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}},
        {attributes: {url: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}},
        {attributes: {url: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}},
        {attributes: {url: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}},
      ],
    },
  },
  classes: {root: "bg-grey-100"},
};
