import { Meta, StoryFn, StoryObj } from "@storybook/react"
import React from "react"
import { Button, ButtonProps } from "./Button"

export default {
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      table: { defaultValue: { summary: "default" } },
    },
    children: {
      name: "content",
      description:
        "The content of the button can be either a simple text or a React Component",
      control: "text",
      table: { defaultValue: { summary: "<children/>" } },
    },
    asChild: {
      name: "asChild",
      table: { defaultValue: { summary: false } },
    },
    size: {
      control: {
        type: "radio",
      },
      table: { defaultValue: { summary: "md" } },
    },
  },
  args: {
    children: "Button",
    variant: "default",
    size: "md",
  },
} as Meta

const Template: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>{args.children}</Button>
)
type Story = StoryObj<typeof Button>

export const Default = Template.bind({})
Default.args = {
  variant: "default",
}
export const Variants: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <Button {...args} variant="default">
        Default
      </Button>
      <Button {...args} variant="neutral">
        Neutral
      </Button>
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="accent">
        Accent
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
    </div>
  ),
  args: {
    size: "md",
    variant: "primary",
  },
  argTypes: {},
}
