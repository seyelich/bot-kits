import { Meta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import LoginForm, { LoginFormProps } from './login-form';

export default {
  title: 'UI/AuthForms/LoginForm',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: LoginForm,
} as Meta<LoginFormProps>;

const Template: any = (args: any) => (
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
