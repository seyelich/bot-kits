import { useState, useEffect } from 'react';
import Styles from './chat.module.css';
import DialogsList from '../../components/dialogs-list/dialogs-list';
import DialogsMain from '../../components/dialogs-main/dialogs-main';
import DialogsSidebar from '../../components/dialogs-sidebar/dialogs-sidebar';
import { FAKE_DIALOGS } from './fakeData/fakeData';
import { IFakeDialog } from './fakeData/fakeDataTypes';

function Chat() {
  const [data, setData] = useState<IFakeDialog[] | null>(null);
  const [currentDialog, setCurrentDialog] = useState<IFakeDialog | null>(null);

  useEffect(() => {
    setData(FAKE_DIALOGS);
    setCurrentDialog(FAKE_DIALOGS[0]);
  }, []);

  return (
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
  );
}

export default Chat;
