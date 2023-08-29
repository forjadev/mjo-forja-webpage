import type { Meta, StoryFn } from '@storybook/react'
import { NavigationMenu, NavigationMenuList } from './NavIgationPrimitives'
import { NavItem } from "./NavItem"

const meta = {
  component: NavigationMenu,
  parameters: {
    layout: 'centered',
    controls: { exclude: ['asChild', 'children'] },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationMenu>

export default meta

const Template: StoryFn = ({children, ...args}) => {
  return (
    <NavigationMenu {...args}>
      <NavigationMenuList className="gap-10">
        {children}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export const NavDefault = Template.bind({})
NavDefault.args = {
  children: (
    <>
      <NavItem href="/" isActive>Início</NavItem>
      <NavItem href="/about">Sobre</NavItem>
      <NavItem href="/conteudos">Conteúdos</NavItem>
      <NavItem href="/pro">Forja <span className="font-bold text-palette-orange-500 whitespace-pre"> PRO</span></NavItem>
    </>
  )
}