import type { Meta, StoryObj } from '@storybook/react';
import InputSelect from './input-select';

const meta = {
  title: 'UI/Inputs/InputSelect',
  component: InputSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    inputName: 'options',
    options: ['январь', 'февраль', 'март'],
    width: '200px',
    label: 'Выберете месяц',
    dropDownHeight: '130px',
    dropDownWidth: '200px',
    placeholder: 'январь',
    labelType: 'regular',
    disabled: false,
  },
};

export const Bold: Story = {
  args: {
    inputName: 'options',
    options: ['январь', 'февраль', 'март'],
    width: '200px',
    label: 'Выберете месяц',
    dropDownHeight: '130px',
    dropDownWidth: '200px',
    placeholder: 'январь',
    labelType: 'bold',
    disabled: false,
  },
};
