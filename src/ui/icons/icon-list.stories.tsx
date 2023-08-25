import type { Meta, StoryObj } from '@storybook/react';
import IconList from './icon-list';

const meta: Meta<typeof IconList> = {
  title: 'UI/Icons/IconList',
  component: IconList,
};

export default meta;

type Story = StoryObj<typeof IconList>;

export const Primary: Story = {
  render: () => <IconList />,
};
