import { useState, useEffect } from 'react';
import ChatDesktop from './chat-desktop/chat-desktop';
import ChatMobile from './chat-mobile/chat-mobile';
import FAKE_DIALOGS from '../../services/chat-fake-data';
import { IFakeDialog } from '../../services/types/chat-types';
import useMediaQuery from '../../hooks/use-media-query';

function Chat() {
  const [data, setData] = useState<IFakeDialog[] | null>(null);
  const [currentDialog, setCurrentDialog] = useState<IFakeDialog | null>(null);
  const isMobile = useMediaQuery('(max-width: 360px)');

  useEffect(() => {
    // @todo replace fake data
    setData(FAKE_DIALOGS);

    if (isMobile) {
      setCurrentDialog(null);
    } else {
      // @todo replace fake data
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
