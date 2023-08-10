import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta = {
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Heading>Default Heading</Heading>,
};
export const h1: Story = {
  render: () => <Heading level={"h1"}>Heading h1</Heading>,
};
export const h2: Story = {
  render: () => <Heading level={"h2"}> Heading h2</Heading>,
};
export const h3: Story = {
  render: () => <Heading level={"h3"}> Heading h3</Heading>,
};
export const h4: Story = {
  render: () => <Heading level={"h4"}>Heading h4</Heading>,
};
export const h5: Story = {
  render: () => <Heading level={"h5"}>Heading h5</Heading>,
};

export const h6: Story = {
  render: () => <Heading level={"h6"}>Heading h6</Heading>,
};
