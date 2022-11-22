import React from "react";
import StatsSection001 from "../../../../comps/sections/stats/StatsSection001";
import {StatsSectionProps} from "../../../../comps/sections/stats/statssectionprops";

export default {
  title: "Sections/Stats/StatsSection001",
  component: StatsSection001,
};

const Template = (props : StatsSectionProps) => (
  <div>
    <StatsSection001 {...props} />
  </div>
);

export const SampleSection = Template.bind({});
SampleSection.args = {
  data: {
    title: "Lorem ipsum dolor sit amen",
    stats: [
      {
        label: "Experience years",
        value: "10+",
      },
      {
        label: "Experience years",
        value: "10+",
      },
      {
        label: "Experience years",
        value: "10+",
      },
      {
        label: "Experience years",
        value: "10+",
      },
    ],
  },
  classes: {root: "bg-grey-100"},
};
