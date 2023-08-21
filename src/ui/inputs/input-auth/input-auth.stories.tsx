import { Meta, Story } from '@storybook/react';
import AuthInput, { IAuthInput } from './input-auth';

export default {
  title: 'UI/Inputs/AuthInput',
  component: AuthInput,
  argTypes: {
    onChange: { action: 'changed' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta<IAuthInput>;

const Template: Story<IAuthInput> = (args: any) => (
  <div
    style={{
      backgroundColor: '#243cbb',
      maxWidth: 501,
      maxHeight: 70,
    }}
  >
    <AuthInput {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'Введите текст',
  width: 500,
  height: 60,
};

export const Error = Template.bind({});
Error.args = {
  type: 'text',
  placeholder: 'Введите текст',
  width: 500,
  height: 60,
  error: true,
  textError: 'Это сообщение об ошибке',
};

export const WithValue = Template.bind({});
WithValue.args = {
  type: 'text',
  placeholder: 'Введите текст',
  width: 500,
  height: 60,
  value: 'Привет, мир!',
  onChange: (e) => console.log('Изменение ввода:', e.target.value),
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder: 'Введите пароль',
  width: 500,
  height: 60,
};
