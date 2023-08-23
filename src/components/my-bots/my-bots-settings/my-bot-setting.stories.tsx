/* eslint-disable no-console */
import type { Meta, Story } from '@storybook/react';

import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyBotsSettings from './my-bots-settings';

export default {
  title: 'UI/Menu/MyBotsSettings',
  component: MyBotsSettings,
} as Meta<typeof MyBotsSettings>;

const Template: Story<typeof MyBotsSettings> = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <BrowserRouter>
      {' '}
      <MyBotsSettings
        topOffset={50}
        leftOffset={50}
        isOpen={isActive}
        setMyBotsSettingsOpen={setIsActive}
      />
    </BrowserRouter>
  );
};
export const Default = Template.bind({});
