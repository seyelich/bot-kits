import { useState, useEffect } from 'react';
import ChatDesktop from './chat-desktop/chat-desktop';
import ChatMobile from './chat-mobile/chat-mobile';
import { FAKE_DIALOGS } from './fakeData/fakeData';
import { IFakeDialog } from './fakeData/fakeDataTypes';
import useMediaQuery from '../../hooks/use-media-query';

function Chat() {
  const [data, setData] = useState<IFakeDialog[] | null>(null);
  const [currentDialog, setCurrentDialog] = useState<IFakeDialog | null>(null);
  const isMobile = useMediaQuery('(max-width: 360px)');

  useEffect(() => {
    setData(FAKE_DIALOGS);

    if (isMobile) {
      setCurrentDialog(null);
    } else {
      setCurrentDialog(FAKE_DIALOGS[0]);
    }
  }, [isMobile]);

  if (isMobile) {
    return (
      <ChatMobile
        data={data}
        currentDialog={currentDialog}
        setCurrentDialog={setCurrentDialog}
      />
    );
  }

  return (
    <ChatDesktop
      data={data}
      currentDialog={currentDialog}
      setCurrentDialog={setCurrentDialog}
    />
  );
}

export default Chat;
