import type { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import PopupNotificationsSettings from './popup-notifications-settings';

export default {
  title: 'UI/Popups/PopupNotificationsSettings',
  component: PopupNotificationsSettings,
} as Meta<typeof PopupNotificationsSettings>;

const Template: Story<typeof PopupNotificationsSettings> = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <PopupNotificationsSettings
      isOpen={isOpen}
      setIsNotificationsSettingsPopupOpened={setIsOpen}
    />
  );
};

export const Default = Template.bind({});
