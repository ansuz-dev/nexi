import React from "react";
import TextField from "../../../../comps/items/inputs/TextField";
import {GlobalInputProps} from "../../../../comps/items/inputs/inputprops";

export default {
  title: "Items/Inputs/TextField",
  component: TextField,
  argTypes: {
    layout: {control: {type: "select"}},
    type: {control: {type: "select"}},
    size: {control: {type: "select"}},
  },
};

const Template = (props : GlobalInputProps) => (
  <TextField
    {...props}
  />
);

export const SampleTextField = Template.bind({});
SampleTextField.args = {
  layout: "default",
  type: "primary",
  size: "medium",
  label: "Field name",
  helper: "Fill me",
};
