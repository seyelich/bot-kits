import type { Meta, Story } from '@storybook/react';
import DialogMainInput from './dialogs-main-input';

export default {
  title: 'UI/Inputs/DialogMainInput',
  component: DialogMainInput,
} as Meta<typeof DialogMainInput>;

export const DialogMainInputStory: Story<typeof DialogMainInput> = () => (
  <DialogMainInput />
);

export const Default = DialogMainInputStory.bind({});
