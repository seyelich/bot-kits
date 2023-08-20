import type { Meta, Story } from '@storybook/react';
import Button, { IButton } from './button';
/* eslint-disable react/jsx-props-no-spreading */

export default {
  title: 'UI/Buttons/Button',
  component: Button,
  argTypes: {
    type: {
      type: 'string',
      description: 'Вариант внешнего вида кнопки',
      defaultValue: 'blue',
      options: ['blue', 'green', 'grey'],
      control: {
        type: 'radio',
      },
    },
    text: {
      type: 'string',
      name: 'text',
      description: 'Текст кнопки',
      defaultValue: 'Button',
    },
    disabled: {
      type: 'boolean',
      description: 'Вариант активности кнопки',
      name: 'disabled',
      defaultValue: 'false',
    },
    width: {
      type: 'number',
      description: 'Ширина кнопки',
      name: 'width',
      defaultValue: 200,
    },
    height: {
      type: 'number',
      description: 'Высота кнопки',
      name: 'height',
      defaultValue: 70,
    },
    buttonHtmlType: {
      type: 'string',
      description: 'Вариант кнопки',
      default: 'asd',
      defaultValue: 'button',
      options: ['button', 'submit', 'reset'],
      control: {
        type: 'radio',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<IButton>;

const Template: Story<IButton> = (arg) => <Button {...arg} />;

export const Default = Template.bind({});

Default.args = {
  type: 'blue',
  buttonHtmlType: 'button',
  disabled: false,
  text: 'Button',
  width: 200,
  height: 70,
};
