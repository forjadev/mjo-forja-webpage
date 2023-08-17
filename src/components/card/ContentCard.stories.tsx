import { Meta, StoryFn } from "@storybook/react"
import React from "react"
import ContentCard, { ContentCardProps } from "./ContentCard"

export default {
  component: ContentCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta

const Template: StoryFn<ContentCardProps> = (args) => (
  <ContentCard {...args}/>
)

export const Default = Template.bind({});
Default.args = {
  title: 'Sample Title',
  description: 'Sample description for the ContentCard.',
  tag: 'Tag',
};
