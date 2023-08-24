import type { Meta, StoryFn } from '@storybook/react';
import '../../../index.css';

import TextInput from './input';

export default {
  title: 'UI/Inputs/TextInput',
  component: TextInput,
  docs: {
    source: {
      code: null,
    },
  },
  argTypes: {
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
      action: 'clicked',
      description: 'Callback функция, вызываемая при вводе данных',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof TextInput>;

const Template: StoryFn<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default = {
  args: {
    name: 'Input',
    disabled: false,
    value: '',
    placeholder: 'Введите сообщение',
  },
  render: Template,
};
export const Disabled = {
  args: {
    name: 'Input',
    disabled: true,
    value: '',
    placeholder: 'Введите сообщение',
  },
  render: Template,
};
