import React from "react";
import StatCard001 from "../../../../comps/cards/stats/StatCard001";
import {StatCardProps} from "../../../../comps/cards/stats/statcardprops";

export default {
  title: "Cards/stats/StatsCard001",
  component: StatCard001,
};

const Template = (props : StatCardProps) => (
  <div className="w-96">
    <StatCard001 {...props} />
  </div>
);

export const SampleCard = Template.bind({});
SampleCard.args = {
  stat: {
    label: "Experienced years",
    value: "10+",
  },
};
