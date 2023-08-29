import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Styles from './dialog-main-messages.module.css';
import Message from './message/message';

import { IFakeDialog } from '../../../services/types/chat-types';

interface DialogMainMessagesProps {
  currentDialog: IFakeDialog;
}

const DialogMainMessages = memo(
  ({ currentDialog }: DialogMainMessagesProps) => {
    const { messages, name, isOnline, avatar } = currentDialog;

    return (
      <ul className={Styles.cnt}>
        {messages.map((item) => (
          <Message
            message={item}
            interlocutor={name}
            avatar={avatar}
            isOnline={item.isOwnMe ? false : isOnline}
            key={uuidv4()}
          />
        ))}
      </ul>
    );
  }
);

export default DialogMainMessages;
