import type { Meta, StoryObj } from '@storybook/react';
import Bot from './bot';

const meta = {
  title: 'UI/Bot',
  component: Bot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Bot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Мой бот',
  },
};
