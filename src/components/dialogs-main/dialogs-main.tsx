import { memo, Dispatch } from 'react';
import Styles from './dialogs-main.module.css';
import DialogsMainHeader from './dialogs-main-header/dialogs-main-header';
import DialogMainMessages from './dialogs-main-messages/dialog-main-messages';
import DialogMainInput from './dialogs-main-input/dialogs-main-input';
import { IFakeDialog } from '../../pages/chat/fake-data/fake-data-types';

interface DialogMainProps {
  currentDialog: IFakeDialog;
  currentHandler?: Dispatch<React.SetStateAction<IFakeDialog | null>>;
}

const DialogsMain = memo(
  ({ currentDialog, currentHandler }: DialogMainProps) => (
    <section className={Styles.section}>
      {currentDialog && (
        <DialogsMainHeader
          data={currentDialog}
          currentHandler={currentHandler}
        />
      )}
      <DialogMainMessages currentDialog={currentDialog} />
      <DialogMainInput />
    </section>
  )
);

export default DialogsMain;
