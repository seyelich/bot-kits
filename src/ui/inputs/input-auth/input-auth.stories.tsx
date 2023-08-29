import type { Meta, Story } from '@storybook/react';
import '../../../index.css';
import AuthInput, { IAuthInput } from './input-auth';

export default {
  title: 'UI/Inputs/AuthInput',
  component: AuthInput,
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
    textError: {
      type: 'string',
      name: 'errorMessage',
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
      name: 'isInvalid',
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
    onChange: {
      action: 'clicked',
      description: 'Callback функция, вызываемая при вводе данных',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<IAuthInput>;

const Template: Story<IAuthInput> = (arg) => {
  return (
    <div
      style={{
        backgroundColor: '#243cbb',
        maxWidth: 510,
        maxHeight: 70,
      }}
    >
      <AuthInput {...arg} />
    </div>
  );
};

export const Default = {
  args: {
    type: 'string',
    width: 460,
    height: 60,
    placeholder: 'Введите сообщение',
  },
  render: Template,
};

export const Error = {
  args: {
    type: 'string',
    width: 460,
    height: 60,
    placeholder: 'Введите сообщение',
    error: true,
    textError: 'Ошибка валидации',
  },
  render: Template,
};
