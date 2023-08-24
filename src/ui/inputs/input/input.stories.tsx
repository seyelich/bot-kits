import type { Meta, StoryFn } from '@storybook/react';
import '../../../index.css';

import TextInput from './input';
import AuthInput from '../input-auth/input-auth';
/* eslint-disable react/jsx-props-no-spreading */

export default {
  title: 'UI/Inputs/TextInput',
  component: TextInput,
  docs: {
    source: {
      code: null,
    },
  },
  argTypes: {
    textError: {
      type: 'stirng',
      name: 'textError',
      description: 'Сообщение об ошибке валидации',
      defaultValue: 'Сообщение об ошибке',
    },
    type: {
      type: 'string',
      name: 'type',
      description: 'Тип вводимых данных',
      defaultValue: 'string',
    },
    error: {
      type: 'boolean',
      name: 'error',
      description: 'Ошибка валидиции',
      defaultValue: false,
    },
    width: {
      type: 'number',
      description: 'Ширина инпута',
      name: 'width',
      defaultValue: 460,
    },
    height: {
      type: 'number',
      description: 'Высота инпута',
      name: 'height',
      defaultValue: 60,
    },
    placeholder: {
      type: 'string',
      name: 'placeholder',
      description: 'Placeholder инпута',
      defaultValue: '',
    },
    value: {
      type: 'string',
      name: 'value',
      description: 'value инпута',
      defaultValue: '',
    },
    errorMessage: {
      type: 'string',
      name: 'errorMessage',
      description: 'Сообщение об ошибке валидации',
      defaultValue: 'Сообщение об ошибке',
    },
    name: {
      type: 'string',
      name: 'name',
      description: 'Уникальное имя элемента формы',
      defaultValue: 'Input',
    },
    disabled: {
      skeleton: {
        control: 'boolean',
      },
      type: 'boolean',
      name: 'disabled',
      description: 'Активность инпута',
      defaultValue: false,
    },
    isInvalid: {
      type: 'boolean',
      name: 'isInvalid',
      description: 'Ошибка валидиции',
      defaultValue: false,
    },
    onChange: {
      control: false,
    },
  },
  parameters: {
    layout: 'centered',
  },y
  tags: ['autodocs'],
} as Meta<typeof TextInput>;

const Template: StoryFn<typeof TextInput> = (arg) => <TextInput {...arg} />;

export const Default = Template.bind({});

Default.args = {
  name: 'Input',
  disabled: false,
  value: '',
  placeholder: 'Введите сообщение',
};

const asd: StoryFn<typeof AuthInput> = (arg) => {
  return (
    <div
      style={{
        backgroundColor: '#243cbb',
      }}
    >
      <AuthInput {...arg} />;
    </div>
  );
};

export const ss = {
  args: {
    type: 'string',
    width: 460,
    height: 60,
    placeholder: 'Введите сообщение',
  },
  render: asd,
};
