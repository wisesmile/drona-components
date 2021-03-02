import React from "react";
import { Hello } from "./hello";

export default {
  title: "Example/Hello",
  component: Hello,
};

const Template = (args) => <Hello {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  say: "Mountain",
};

export const Secondary = Template.bind({});
Secondary.args = {
  say: "Cobra",
};
