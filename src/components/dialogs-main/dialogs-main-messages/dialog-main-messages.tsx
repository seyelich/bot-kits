import { memo } from 'react';
import Styles from './dialog-main-messages.module.css';
import Message from './message/message';
import { IFakeDialog } from '../../../pages/chat/fakeData/fakeDataTypes';

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
            key={item.text + item.sendTime}
          />
        ))}
      </ul>
    );
  }
);

export default DialogMainMessages;
