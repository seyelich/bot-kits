import type { Meta, StoryObj } from '@storybook/react';
import ForgotPassForm from './forgot-pass-form';
import '../../index.css';

const meta: Meta<typeof ForgotPassForm> = {
  title: 'UI/AuthForms/ForgotPassForm',
  component: ForgotPassForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof ForgotPassForm>;

export const Default: Story = {
  args: {
    handleForgotPass: () => {},
    windowWidth: 1440,
  },
  render: () => (
    <div style={{ width: 750 }}>
      <ForgotPassForm handleForgotPass={() => {}} windowWidth={1440} />
    </div>
  ),
};
