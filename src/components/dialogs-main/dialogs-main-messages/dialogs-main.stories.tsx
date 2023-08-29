import type { Meta, Story } from '@storybook/react';
import DialogsMain from '../dialogs-main';
import FAKE_DIALOGS from '../../../services/chat-fake-data';

export default {
  title: 'blocks/DialogsMain',
  component: DialogsMain,
} as Meta<typeof DialogsMain>;

const Template: Story<typeof DialogsMain> = () => (
  <DialogsMain currentDialog={FAKE_DIALOGS[0]} />
);

export const Default = Template.bind({});
Default.args = {
  currentDialog: FAKE_DIALOGS[0],
};
