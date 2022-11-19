import React from "react";
import Button001 from "../../../../comps/items/buttons/Button001";
import {ButtonProps} from "../../../../comps/items/buttons/buttonprops";

export default {
  title: "Items/Buttons/Button001",
  component: Button001,
  argTypes: {
    type: {control: {type: "select"}},
    size: {control: {type: "select"}},
  },
};

const Template = ({label, ...rest} : ButtonProps) => (
  <Button001 label={label} type="primary" {...rest} />
);

export const Button = Template.bind({});
Button.args = {label: "Click me"};
