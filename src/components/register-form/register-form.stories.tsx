import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import RegisterForm from './register-form';

const meta: Meta<typeof RegisterForm> = {
  title: 'UI/AuthForms/RegisterForm',
  component: RegisterForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {
  args: {
    logIn: () => {},
    handleRegister: () => {},
    windowWidth: 1440,
  },
  render: () => (
    <BrowserRouter>
      <div style={{ width: 750 }}>
        <RegisterForm
          logIn={() => {}}
          handleRegister={() => {}}
          windowWidth={1440}
        />
      </div>
    </BrowserRouter>
  ),
};
