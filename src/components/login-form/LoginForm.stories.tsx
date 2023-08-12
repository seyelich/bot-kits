import { Meta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import LoginForm, { LoginFormProps } from './LoginForm';

export default {
  title: 'UI/AuthForms/LoginForm',
  component: LoginForm,
} as Meta<LoginFormProps>;

const Template: Story<LoginFormProps> = (args) => (
  <BrowserRouter>
    <LoginForm {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  signIn: () => {},
  forgotPass: () => {},
  windowWidth: 1440,
  logIn: () => {},
};
