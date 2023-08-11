import { BrowserRouter } from 'react-router-dom';
import { Meta, Story } from '@storybook/react';
import  NavLinkBar, { NavLinkBarProps } from './NavLinkBar';

export default {
  title: 'UI/NavLinkBar',
  component: NavLinkBar,
} as Meta<NavLinkBarProps>;

const Template: Story<NavLinkBarProps> = (args) => (
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
