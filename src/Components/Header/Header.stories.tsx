import type { Meta, StoryObj } from "@storybook/react";
import { Header as H } from "./Header";

const meta: Meta<typeof H> = {
  component: H,
  args: {
    title: ["Title 1", "Title 2", "Title 3"],
    subtitle: ["Subtitle 1", "Subtitle 2", "Subtitle 3"],
    buttonLink: "#",
    buttonText: "Przycisk",
  },
};

export default meta;

type Story = StoryObj<typeof H>;

const Template: Story = {
  render: (args) => <H {...args} />,
};

export const Primary: Story = {
  ...Template,
};
