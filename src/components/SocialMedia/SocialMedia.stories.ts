import type { Meta, StoryObj } from "@storybook/react";
import SocialMedia from ".";

const meta = {
  title: "Components/SocialMedia",
  component: SocialMedia,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof SocialMedia>;

export default meta;

type Story = StoryObj<typeof SocialMedia>;

export const Default: Story = {};
