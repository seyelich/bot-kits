import type { Meta, StoryObj } from '@storybook/react';
import SubscriptionStatus from './subscription-status';
import {
  notSubscribe,
  subscribeActive,
  subscribeNotActive,
} from '../../services/subcriription-fake-data';
import '../../index.css';
import './subscription-status.module.css';

const meta: Meta<typeof SubscriptionStatus> = {
  component: SubscriptionStatus,
};
export default meta;

type Story = StoryObj<typeof SubscriptionStatus>;

export const Default: Story = {
  name: 'active',
  args: {
    subcriription: subscribeActive,
    openModalTarif: () => {},
  },
  render: () => (
    <>
      <div id="modals" />
      <SubscriptionStatus
        subcriription={subscribeActive}
        openModalTarif={() => {}}
      />
    </>
  ),
};

export const NotActive: Story = {
  name: 'not active',
  args: {
    subcriription: subscribeNotActive,
    openModalTarif: () => {},
  },
};

export const NotSubscribe: Story = {
  name: 'not subscribe',
  args: {
    subcriription: notSubscribe,
    openModalTarif: () => {},
  },
};
