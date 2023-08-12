import type { Meta, StoryObj } from '@storybook/react';
import BotTemplateElement from './bot-template-element';
import Beauty from '../../icons/bot-templates/beauty/beauty';

const meta = {
  title: 'UI/BotTemplateElement',
  component: BotTemplateElement,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BotTemplateElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Beauty size="desktop" />,
    text: 'My bot',
  },
};
