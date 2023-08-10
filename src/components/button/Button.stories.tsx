import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Button>Default</Button>,
};

export const Callers: Story = {
  render: () => <Button variant={"callers"}>Callers</Button>,
};

export const Info: Story = {
  render: () => <Button variant={"info"}>Info</Button>,
};

export const SizeSm: Story = {
  render: () => <Button size={"sm"}>Small</Button>,
};

export const SizeMd: Story = {
  render: () => <Button size={"md"}>Medium</Button>,
};

export const SizeLg: Story = {
  render: () => <Button size={"lg"}>Large</Button>,
};
