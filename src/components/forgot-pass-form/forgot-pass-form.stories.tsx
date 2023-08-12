import { Meta, Story } from '@storybook/react';
import ForgotPassForm, { ForgotPassFormProps } from './forgot-pass-form';

export default {
  title: 'UI/AuthForms/ForgotPassForm',
  component: ForgotPassForm,
} as Meta<ForgotPassFormProps>;

const Template: Story<ForgotPassFormProps> = (args) => (
  <ForgotPassForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  handleForgotPass: () => {},
  windowWidth: 1440,
};
