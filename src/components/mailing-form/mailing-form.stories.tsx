import type { Meta, StoryObj } from '@storybook/react';
import MailingForm from './mailing-form';

const meta = {
  title: 'UI/Forms/MailingForm',
  component: MailingForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MailingForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
