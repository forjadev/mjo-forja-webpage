import type { Meta, StoryObj } from "@storybook/react";
import { NavItem } from "./NavItem";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const meta = {
  component: NavItem,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <NavigationMenu.Root>
        <NavigationMenu.List>{Story()}</NavigationMenu.List>
      </NavigationMenu.Root>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    textPrimary: "Default",
    href: "/",
  },
};

export const Active: Story = {
  args: {
    textPrimary: "Active",
    href: "/",
    variant: "isActive",
  },
};

export const ActiveWithTextSecondary: Story = {
  args: {
    textPrimary: "Active",
    textSecondary: "Secondary",
    href: "/",
    variant: "isActive",
  },
};
