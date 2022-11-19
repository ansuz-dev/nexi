import React from "react";
import Button from "../../../../comps/items/buttons/Button";
import {ButtonProps} from "../../../../comps/items/buttons/buttonprops";

export default {
  title: "Items/Buttons/Button",
  component: Button,
  argTypes: {
    layout: {control: {type: "select"}},
    type: {control: {type: "select"}},
    size: {control: {type: "select"}},
  },
};

const Template = ({label, ...rest} : ButtonProps) => (
  <Button layout="default" label={label} type="primary" {...rest} />
);

export const SampleButton = Template.bind({});
SampleButton.args = {label: "Click me"};
