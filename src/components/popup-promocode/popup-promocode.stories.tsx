/* eslint-disable no-console */
import type { Meta, Story } from '@storybook/react';

import PopupPromocode from './popup-promocode';

export default {
  title: 'UI/Popups/PopupPromocode',
  component: PopupPromocode,
} as Meta<typeof PopupPromocode>;

const Template: Story<typeof PopupPromocode> = () => (
  <PopupPromocode onClose={() => console.log('close')} />
);
export const Default = Template.bind({});
