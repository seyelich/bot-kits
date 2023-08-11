import type { Meta, StoryObj } from '@storybook/react';
import PopupMessages from './popup-messages';

const meta = {
  title: 'UI/Popups/PopupMessages',
  component: PopupMessages,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PopupMessages>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
};
