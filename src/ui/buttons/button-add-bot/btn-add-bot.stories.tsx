import type { Meta, Story } from '@storybook/react';
import Btn, { IBtnAddBot } from './btn-add-bot';
/* eslint-disable react/jsx-props-no-spreading */

export default {
  title: 'UI/Buttons/BtnAddBot',
  component: Btn,
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

const Template: Story<IBtnAddBot> = (arg) => <Btn {...arg} />;

export const Default = Template.bind({});

Default.args = {
  disabled: false,
  sizeSmall: true,
};
