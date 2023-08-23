/* eslint-disable no-console */
import type { Meta, Story } from '@storybook/react';

import PopupTarif from './popup-tarif';

export default {
  title: 'UI/Popups/PopupTarif',
  component: PopupTarif,
} as Meta<typeof PopupTarif>;

const Template: Story<typeof PopupTarif> = () => <PopupTarif />;
export const Default = Template.bind({});
