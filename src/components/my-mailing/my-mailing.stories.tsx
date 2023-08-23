/* eslint-disable react/jsx-props-no-spreading */
import { Meta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import MyMailing from './my-mailing';

export default {
  title: 'blocks/MyMailing',
  component: MyMailing,
  argTypes: {
    onChange: { action: 'changed' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta<typeof MyMailing>;

export const MyMailingStory: Story<typeof MyMailing> = () => (
  <BrowserRouter>
    {' '}
    <MyMailing />
  </BrowserRouter>
);

export const Default = MyMailingStory.bind({});
