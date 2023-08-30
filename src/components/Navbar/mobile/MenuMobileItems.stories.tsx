import { Meta, StoryFn, StoryObj } from "@storybook/react"
import {  
  DropdownMenuItem, 
} from "./DropdownPrimitives"
import { DropDownTemplate } from "./MenuMobile.stories"
import { MobileLink } from "./MobileLink"

export default {
  component: MobileLink,
  parameters: {
    layout: 'centered',
    controls: { 
      sort: 'alpha', 
      exclude: [
        'as', 
        'replace', 
        'scroll', 
        'shallow', 
        'passHref', 
        'prefetch', 
        'locale', 
        'legacyBehavior',
        'onMouseEnter',
        'onTouchStart',
        'onClick',
      ] 
    },
  },
  tags: ['autodocs'], 
  argTypes: {    
    children: { 
      type: 'string', 
      description: 'The text to display inside the link', 
      table: {
        defaultValue: { summary: 'Início' },
        type: { summary: 'string' },
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
    active: { 
      type: 'boolean', 
      description: 'Whether the link is active or not', 
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      }
    },
    onClick: { action: 'clicked' },
  }
} as Meta <typeof MobileLink>

type Story = StoryObj<typeof MobileLink>

const Template: StoryFn<typeof MobileLink> = ({href = '/', ...args}) => {
  return (
    <DropDownTemplate {...DropDownTemplate.args}>
      <DropdownMenuItem asChild>
        <MobileLink href={href} {...args} />
      </DropdownMenuItem>
    </DropDownTemplate>
  )
}

export const MenuItem: Story = Template.bind({})
MenuItem.args = {
  children: "Início"
}