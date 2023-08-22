import type { Meta, StoryObj } from '@storybook/react';
import AuthInput from './input-auth';

const meta: Meta<typeof AuthInput> = {
  title: 'UI/Inputs/AuthInput',
  component: AuthInput,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
};
export default meta;

type Story = StoryObj<typeof AuthInput>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Введите текст',
    width: 500,
    height: 60,
  },
  render: () => (
    <div
      style={{
        backgroundColor: '#243cbb',
        maxWidth: 510,
        maxHeight: 70,
      }}
    >
      <AuthInput
        type="text"
        placeholder="Введите текст"
        width={500}
        height={60}
      />
    </div>
  ),
};

export const Error: Story = {
  args: {
    type: 'text',
    placeholder: 'Введите текст',
    width: 500,
    height: 60,
    error: true,
    textError: 'Это сообщение об ошибке',
  },
  render: () => (
    <div
      style={{
        backgroundColor: '#243cbb',
        maxWidth: 510,
        maxHeight: 70,
      }}
    >
      <AuthInput
        type="text"
        placeholder="Введите текст"
        width={500}
        height={60}
        error
        textError="Это сообщение об ошибке"
      />
    </div>
  ),
};

export const WithValue: Story = {
  args: {
    type: 'text',
    placeholder: 'Введите текст',
    width: 500,
    height: 60,
    value: 'Привет, мир!',
    // eslint-disable-next-line no-console
    onChange: (e: any) => console.log('Изменение ввода:', e.target.value),
  },
  render: () => (
    <div
      style={{
        backgroundColor: '#243cbb',
        maxWidth: 510,
        maxHeight: 70,
      }}
    >
      <AuthInput
        type="text"
        placeholder="Введите текст"
        width={500}
        height={60}
        value="Привет, мир!"
        // eslint-disable-next-line no-console
        onChange={(e: any) => console.log('Изменение ввода:', e.target.value)}
      />
    </div>
  ),
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Введите пароль',
    width: 500,
    height: 60,
  },
  render: () => (
    <div
      style={{
        backgroundColor: '#243cbb',
        maxWidth: 510,
        maxHeight: 70,
      }}
    >
      <AuthInput
        type="password"
        placeholder="Введите пароль"
        width={500}
        height={60}
      />
    </div>
  ),
};
