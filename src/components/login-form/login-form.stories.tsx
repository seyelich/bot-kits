import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from './login-form';

const meta: Meta<typeof LoginForm> = {
  title: 'UI/AuthForms/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    signIn: () => {},
    forgotPass: () => {},
    windowWidth: 1440,
    logIn: () => {},
  },
  render: () => (
    <BrowserRouter>
      <div style={{ width: 750 }}>
        <LoginForm
          signIn={() => {}}
          forgotPass={() => {}}
          windowWidth={1440}
          logIn={() => {}}
        />
      </div>
    </BrowserRouter>
  ),
};
