import { memo } from 'react';
import Styles from './dialogs-main.module.css';
import DialogsMainHeader from './dialogs-main-header/dialogs-main-header';
import DialogMainMessages from './dialogs-main-messages/dialog-main-messages';
import DialogMainInput from './dialogs-main-input/dialogs-main-input';
import { IFakeDialog } from '../../pages/chat/fakeData/fakeDataTypes';

interface DialogMainProps {
  currentDialog: IFakeDialog;
}

const DialogsMain = memo(({ currentDialog }: DialogMainProps) => (
  <section className={Styles.section}>
    {currentDialog && <DialogsMainHeader data={currentDialog} />}
    <DialogMainMessages currentDialog={currentDialog} />
    <DialogMainInput />
  </section>
));

export default DialogsMain;
