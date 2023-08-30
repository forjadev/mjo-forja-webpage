import { Meta, StoryFn } from "@storybook/react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "./DropdownPrimitives"
import { FiMenu } from "react-icons/fi"
import { MobileLink } from "./MobileLink"
import { DropdownMenuProps } from "@radix-ui/react-dropdown-menu"

interface IDropdownMenuTemplate extends DropdownMenuProps {
  children: React.ReactNode
  label?: string
}

export const DropDownTemplate: StoryFn<IDropdownMenuTemplate> = ({ children, label = 'Menu', ...args }) => {
  return (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger className="text-surface-secondary-dark dark:text-surface-secondary-light">
        <FiMenu width={24} height={24} />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          className="bg-surface-secondary-light dark:bg-surface-secondary-dark border-surface-metal-light dark:border-surface-metal-dark shadow-[#45A6AA]/5"
        >
          <DropdownMenuLabel
            className="text-on-secondary-light/70 dark:text-on-secondary-dark/70"
          >
            {label}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {children}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  )
}

export default {
  title: 'Components/Navbar/mobile',
  component: DropDownTemplate,
  parameters: {
    layout: 'centered',
    controls: { exclude: ['children'] },
  },
  tags: ['autodocs'],
  excludeStories: /.*Template$/, // Storybook ignores anything that contains Template
  argTypes: {
    label: {
      type: 'string', 
      description: 'The dropdown menu label',
      table: {
        defaultValue: { summary: 'Menu' },
        type: { summary: 'string' },
      }
    },
    open: {
      type: 'boolean', 
      description: 'Whether the dropdown menu is open or not',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      }
    },
  },
} as Meta<IDropdownMenuTemplate>

export const MenuMobile = DropDownTemplate.bind({})
MenuMobile.args = {
  children: (
    <>
      <DropdownMenuItem asChild>
        <MobileLink href="/">Início</MobileLink>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <MobileLink href="/sobre">Sobre</MobileLink>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <MobileLink href="/conteudo">Conteúdo</MobileLink>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <MobileLink href="/pro">Forja PRO</MobileLink>
      </DropdownMenuItem>
    </>
  ),
  label: 'Menu'
}