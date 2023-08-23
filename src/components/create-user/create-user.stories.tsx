/* eslint-disable no-console */
import type { Meta, Story } from '@storybook/react';

import CreateUser from './create-user';

export default {
  title: 'UI/Popups/CreateUser',
  component: CreateUser,
} as Meta<typeof CreateUser>;

const Template: Story<typeof CreateUser> = () => (
  <CreateUser
    onClose={() => console.log('close')}
    callback={() => console.log('close')}
  />
);
export const Default = Template.bind({});
