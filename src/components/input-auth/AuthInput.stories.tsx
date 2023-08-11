
import { Meta, Story } from '@storybook/react';
import AuthInput, { IAuthInput } from './AuthInput';

export default {
  title: 'UI/AuthInput',
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

const Template: Story<IAuthInput> = (args:any) => (
<div style={{
      backgroundColor: '#243cbb',
      maxWidth:501,
      maxHeight:70
    }}>
<AuthInput
    {...args}
  />
</div>
);

export const Обычный = Template.bind({});
Обычный.args = {
  type: 'text',
  placeholder: 'Введите текст',
  width: 500,
  height: 60,
};

export const СОшибкой = Template.bind({});
СОшибкой.args = {
  type: 'text',
  placeholder: 'Введите текст',
  width: 500,
  height: 60,
  error: true,
  textError: 'Это сообщение об ошибке',
};

export const СЗначениемИОбработчиком = Template.bind({});
СЗначениемИОбработчиком.args = {
  type: 'text',
  placeholder: 'Введите текст',
  width: 500,
  height: 60,
  value: 'Привет, мир!',
  onChange: (e) => console.log('Изменение ввода:', e.target.value),
};

export const Пароль = Template.bind({});
Пароль.args = {
  type: 'password',
  placeholder: 'Введите пароль',
  width: 500,
  height: 60,
};
