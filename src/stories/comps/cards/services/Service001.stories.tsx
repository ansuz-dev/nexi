import React from "react";
import Service001 from "../../../../comps/cards/services/Service001";
import {ServiceCardProps} from "../../../../comps/cards/services/serviceprops";

export default {
  title: "Cards/Services/Service001",
  component: Service001,
};

const Template = ({service} : ServiceCardProps) => (
  <div className="w-96">
    <Service001 service={service} />
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
