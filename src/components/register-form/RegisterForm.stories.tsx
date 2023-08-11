import { Meta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import RegisterForm, { RegisterFormProps } from './RegisterForm';

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
