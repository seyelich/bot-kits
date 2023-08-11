import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './input';

const meta = {
  title: 'UI/Inputs/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Текстовый инпут',
    disabled: false,
    name: 'Текстовый инпут',
    onChange: (e) => {
      e.target.name = e.target.value;
    },
    value: 'Значение',
    errorMessage: 'Введены некорректные данные',
    isInvalid: false,
  },
};
