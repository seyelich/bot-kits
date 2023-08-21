import { BrowserRouter } from 'react-router-dom';
import { Meta } from '@storybook/react';
import NavLinkBar, { NavLinkBarProps } from './nav-link-bar';

export default {
  title: 'UI/NavLinkBar',
  component: NavLinkBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<NavLinkBarProps>;

const Template: any = (args:any) => (
  <BrowserRouter>
    <NavLinkBar {...args} />
  </BrowserRouter>
);

export const MaxSize = Template.bind({});
MaxSize.args = {
  windowWidth: 1440,
};

export const Tablet = Template.bind({});
Tablet.args = {
  windowWidth: 720,
};

