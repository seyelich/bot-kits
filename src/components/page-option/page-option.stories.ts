import type { Meta, StoryObj } from '@storybook/react';

import PageOption from './page-option';

const testAva =
  'https://yt3.googleusercontent.com/ytc/AL5GRJVNMJ3rUkEuWjhgjNctvK2LchSZ8wiEwkfWrBTLeA=s900-c-k-c0x00ffffff-no-rj';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'UI/PageOption',
  component: PageOption,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof PageOption>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    id: '1',
    isUploader: false,
    isSelected: false,
    isDisabled: false,
    label: 'Страница 1',
    avatar: testAva,
  },
};

export const DefaultUploader: Story = {
  args: {
    id: '1',
  },
};

export const Selected: Story = {
  args: {
    id: '1',
    isUploader: false,
    isSelected: true,
    label: 'Страница 1',
    avatar: testAva,
  },
};

export const Disabled: Story = {
  args: {
    id: '1',
    isUploader: false,
    isDisabled: true,
    label: 'Страница 1',
    avatar: testAva,
  },
};
