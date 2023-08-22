import { memo, Dispatch } from 'react';
import Styles from '../chat.module.css';
import { IFakeDialog } from '../../../services/types/chat-types';
import DialogsList from '../../../components/dialogs-list/dialogs-list';
import DialogsMain from '../../../components/dialogs-main/dialogs-main';
import DialogsSidebar from '../../../components/dialogs-sidebar/dialogs-sidebar';

interface ChatDesktopProps {
  data: IFakeDialog[] | null;
  currentDialog: IFakeDialog | null;
  setCurrentDialog: Dispatch<React.SetStateAction<IFakeDialog | null>>;
}

const ChatDesktop = memo(
  ({ data, currentDialog, setCurrentDialog }: ChatDesktopProps) => (
    <div className={Styles.page}>
      {data && currentDialog && (
        <>
          <DialogsList
            data={data}
            current={currentDialog}
            currentHandler={setCurrentDialog}
          />
          <DialogsMain currentDialog={currentDialog} />
          <DialogsSidebar currentDialog={currentDialog} />
        </>
      )}
    </div>
  )
);

export default ChatDesktop;
