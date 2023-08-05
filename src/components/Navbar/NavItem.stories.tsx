import type { Meta, StoryObj } from '@storybook/react'
import { NavItem } from './NavItem'

const meta = {
  component: NavItem,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ul className="flex gap-10 text-[#D9E0EE]">
        {Story()}
      </ul>
    ),
  ],
  tags: ['autodocs']
} satisfies Meta<typeof NavItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    textPrimary: 'Default',
    href: '/',
    isActive: false
  }
}

export const Active: Story = {
  args: {
    textPrimary: 'Active',
    href: '/',
    isActive: true
  }
}

export const ActiveWithTextSecondary: Story = {
  args: {
    textPrimary: 'Active',
    textSecondary: 'Secondary',
    href: '/',
    isActive: true
  }
}