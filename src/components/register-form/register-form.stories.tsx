import { Meta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import RegisterForm, { RegisterFormProps } from './register-form';

export default {
  title: 'UI/AuthForms/RegisterForm',
  component: RegisterForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<RegisterFormProps>;

const Template: any = (args: any) => (
  <BrowserRouter>
    <RegisterForm {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  logIn: () => {},
  handleRegister: () => {},
  windowWidth: 1440,
};
