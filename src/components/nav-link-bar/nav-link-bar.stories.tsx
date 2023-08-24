import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import NavLinkBar from './nav-link-bar';

const meta: Meta<typeof NavLinkBar> = {
  title: 'blocks/NavLinkBar',
  component: NavLinkBar,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof NavLinkBar>;

export const Default: Story = {
  args: {
    windowWidth: 1440,
  },
  render: () => (
    <BrowserRouter>
      <div style={{ width: 750 }}>
        <NavLinkBar windowWidth={1440} />
      </div>
    </BrowserRouter>
  ),
};
