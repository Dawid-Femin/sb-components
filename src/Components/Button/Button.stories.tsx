import type { Meta, StoryObj } from "@storybook/react";
import { Button as B } from "./Button";

const meta: Meta<typeof B> = {
  component: B,
  args: {
    type: "submit",
    onClick: () => console.log("click!"),
    title: "Button title",
    buttonSize: "small",
    rounded: true,
    bgColor: "#019cfd",
    txtColor: "#FFFFFF",
  },
};

export default meta;

type Story = StoryObj<typeof B>;

const Template: Story = {
  render: (args) => <B {...args} />,
};

export const Small: Story = {
  ...Template,
};

export const Medium: Story = {
  ...Template,
  args: {
    buttonSize: "medium",
  },
};

export const Big: Story = {
  ...Template,
  args: {
    buttonSize: "big",
  },
};
