import React from "react";
import ServiceCard004 from "../../../../comps/cards/services/ServiceCard004";
import {ServiceCardProps} from "../../../../comps/cards/services/servicecardprops";

export default {
  title: "Cards/Services/ServiceCard004",
  component: ServiceCard004,
};

const Template = (props : ServiceCardProps) => (
  <div className="w-[300px]">
    <ServiceCard004 {...props} />
  </div>
);

export const SampleCard = Template.bind({});
SampleCard.args = {
  service: {
    name: "Lorem ipsum dolor sit amen",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    photo: {data: {attributes: {url: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}}},
  },
};
