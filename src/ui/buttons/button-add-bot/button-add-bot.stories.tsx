import React from 'react';
import type { Meta, Story } from '@storybook/react';
import BtnAddBot, { IBtnAddBot } from './button-add-bot';

export default {
  title: 'UI/Buttons/BtnAddBot',
  component: BtnAddBot,
  argTypes: {
    disabled: {
      type: 'boolean',
      description: 'Вариант активности кнопки',
      name: 'disabled',
      defaultValue: 'false',
    },
    sizeSmall: {
      type: 'boolean',
      description: 'Размер кнопки',
      name: 'sizeSmall',
      defaultValue: 'false',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback функция, вызываемая при клике',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<IBtnAddBot>;

const Template: Story<IBtnAddBot> = (arg) => <BtnAddBot {...arg} />;

export const Default = {
  args: {
    disabled: false,
    sizeSmall: true,
  },
  render: Template,
};

export const Disabled = {
  args: {
    disabled: true,
    sizeSmall: true,
  },
  render: Template,
};

export const Large = {
  args: {
    disabled: false,
    sizeSmall: false,
  },
  render: Template,
};
