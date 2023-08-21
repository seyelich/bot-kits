import type { Meta, StoryObj } from '@storybook/react';
import PopupBotDetails from './popup-bot-details';
import Beauty from '../../../ui/icons/others/bot-templates/beauty';

const meta = {
  title: 'UI/Popups/PopupBotDetails',
  component: PopupBotDetails,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PopupBotDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Салон красоты',
    icon: <Beauty size="desktop" />,
  },
};
