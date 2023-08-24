import type { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import PopupCopyLink from './popup-copy-link';

export default {
  title: 'UI/Popups/PopupCopyLink',
  component: PopupCopyLink,
} as Meta<typeof PopupCopyLink>;

const Template: Story<typeof PopupCopyLink> = () => {
  const [isOpen, setIsOpen] = useState(true);
  return <PopupCopyLink isOpen={isOpen} setIsCopyLinkPopupOpened={setIsOpen} />;
};

export const Default = Template.bind({});
