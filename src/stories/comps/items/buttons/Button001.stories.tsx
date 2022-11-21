import React from "react";
import Button001 from "../../../../comps/items/buttons/Button001";
import {ButtonProps} from "../../../../comps/items/buttons/buttonprops";

export default {
  title: "Items/Buttons/Button001",
  component: Button001,
  argTypes: {
    link: {control: {type: "boolean"}},
    type: {control: {type: "select"}},
    color: {control: {type: "select"}},
    size: {control: {type: "select"}},

  },
};

const Template = ({label, ...rest} : ButtonProps) => (
  <Button001 label={label} color="primary" {...rest} />
);

export const SampleButton = Template.bind({});
SampleButton.args = {label: "Click me"};
