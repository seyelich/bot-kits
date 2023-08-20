import { Meta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import RegisterForm, { RegisterFormProps } from './register-form';
/* eslint-disable react/jsx-props-no-spreading */
export default {
  title: 'UI/AuthForms/RegisterForm',
  component: RegisterForm,
} as Meta<RegisterFormProps>;

const Template: Story<RegisterFormProps> = (args) => (
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
