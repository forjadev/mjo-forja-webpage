import CommunityCard from './CommunityCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/CommunityCard',
  component: CommunityCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CommunityCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: '/group.svg',
    title: 'Ambiente',
    paragraph: 'Espaço dedicado à comunidade de desenvolvedores, onde pessoas de diferentes níveis podem se conectar e encontrar apoio mútuo.'
  },
};


export const Secondary: Story = {
  args: {
    icon: '/focus.svg',
    title: 'Focus',
    paragraph: 'Permanecemos constantemente empenhados em ampliar nossos horizontes e perseguir metas ambiciosas para alcançar novos patamares de sucesso.'
  },
}

export const Terciary: Story = {
  args: {
    icon: '/success.svg',
    title: 'Sucesso',
    paragraph: 'Temos um ambiente rico em recursos, suporte contínuo e uma ampla gama de oportunidades para garantir o seu sucesso e crescimento.'
  },
}
