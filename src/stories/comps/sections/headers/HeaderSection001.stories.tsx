import React from "react";
import HeaderSection001 from "../../../../comps/sections/headers/HeaderSection001";
import {HeaderSectionProps} from "../../../../comps/sections/headers/headersectionprops";

export default {
  title: "Sections/Headers/HeaderSection001",
  component: HeaderSection001,
};

const Template = (props : HeaderSectionProps) => (
  <div>
    <HeaderSection001 {...props} />
  </div>
);

export const SampleSection = Template.bind({});
SampleSection.args = {
  data: {
    title: "Lorem ipsum dolor sit amen",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photos: [
      {data: {attributes: {url: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}}},
    ],
    links: [
      {
        title: "Estimation Intervention",
        link: "/click-me",
      },
    ],
  },
  classes: {root: "bg-grey-100"},
};
