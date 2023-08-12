import { memo, Dispatch } from 'react';
import Styles from '../chat.module.css';
import { IFakeDialog } from '../fake-data/fake-data-types';
import DialogsList from '../../../components/dialogs-list/dialogs-list';
import DialogsMain from '../../../components/dialogs-main/dialogs-main';
import DialogsSidebar from '../../../components/dialogs-sidebar/dialogs-sidebar';

interface ChatMobileProps {
  data: IFakeDialog[] | null;
  currentDialog?: IFakeDialog | null;
  setCurrentDialog: Dispatch<React.SetStateAction<IFakeDialog | null>>;
}

const ChatMobile = memo(
  ({ data, currentDialog, setCurrentDialog }: ChatMobileProps) => (
    <div className={Styles.page}>
      {data && !currentDialog && (
        <DialogsList
          data={data}
          current={currentDialog}
          currentHandler={setCurrentDialog}
        />
      )}
      {currentDialog && (
        <DialogsMain
          currentDialog={currentDialog}
          currentHandler={setCurrentDialog}
        />
      )}
      {currentDialog && <DialogsSidebar currentDialog={currentDialog} />}
    </div>
  )
);

export default ChatMobile;
