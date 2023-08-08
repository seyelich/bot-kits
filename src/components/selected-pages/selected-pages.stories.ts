import type { Meta, StoryObj } from '@storybook/react';

import SelectedPages from './selected-pages';
import fakeData from './selected-pages.fakedata';

const meta = {
  title: 'UI/SelectedPages',
  component: SelectedPages,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SelectedPages>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pages: fakeData,
    setPages: () => {},
    count: 0,
    setCount: () => {},
  },
};

export const Disable: Story = {
  args: {
    isDisabled: true,
    pages: fakeData,
    setPages: () => {},
    count: 0,
    setCount: () => {},
  },
};
