import type { Meta, StoryObj } from '@storybook/react';
import VideoElement from './VideoElement';
import preview from '../../../../images/video1.svg';

const meta = {
  title: 'UI/VideoElement',
  component: VideoElement,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof VideoElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Начало работы с блок-схемами',
    preview,
  },
};
