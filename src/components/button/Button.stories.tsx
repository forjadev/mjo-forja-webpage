import { Meta, StoryFn } from "@storybook/react"
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
      table: { defaultValue: { summary: "callers" } },
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
      table: { defaultValue: { summary: "lg" } },
    },
  },
  args: {
    children: "Button",
    variant: "callers",
    size: "lg",
  },
} as Meta

const Template: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>{args.children}</Button>
)

export const Default = Template.bind({})
Default.args = {
  variant: "callers",
}

export const Callers = Template.bind({})
Callers.args = {
  variant: "callers",
  children: "Callers",
}

export const Info = Template.bind({})
Info.args = {
  variant: "info",
  children: "Info",
}
export const Sizes = () => (
  <div className="flex gap-4 items-center">
    <Info size="sm">Small</Info>
    <Info size="md">Medium</Info>
    <Info size="lg">Large</Info>
  </div>
)
