import type { Meta, StoryFn } from "@storybook/react";
import { NavItem } from "./NavItem";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const meta = {
  component: NavItem,
  parameters: {
    layout: "centered",
    controls: { exclude: ["asChild"] },
  },
  decorators: [
    (Story) => (
      <NavigationMenu.Root>
        <NavigationMenu.List>{Story()}</NavigationMenu.List>
      </NavigationMenu.Root>
    ),
  ],
  argTypes: {
    isActive: {
      type: 'boolean',
      description: 'Whether the link is active or not',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      }
    },
    href: {
      type: 'string',
      description: 'The URL to link to ',
      table: {
        defaultValue: { summary: '/' },
        type: { summary: 'string' },
      },
    },
    children: {
      type: 'string',
      description: 'The text to display inside the link',
    }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavItem>;

export default meta;

const Template: StoryFn<typeof NavItem> = ({href = "/", ...args}) => {
  return <NavItem href={href} {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  children: "Início",
}

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  isActive: true,
}

export const ActiveWithPRO = Template.bind({});
ActiveWithPRO.args = {
  isActive: true,
  children: (
    <>
      Forja <span className='font-bold text-palette-orange-500 whitespace-pre'> PRO</span>
    </>
  ),
}
