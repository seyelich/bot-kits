import type { Meta, StoryObj } from '@storybook/react';
import TutorialButton from './TutorialButton';

const meta = {
  title: 'UI/Buttons/TutorialButton',
  component: TutorialButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TutorialButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    type: 'instruction',
  },
};
