import { memo } from 'react';
import Styles from './message.module.css';
import ChatAvatar from '../../../chat-avatar/chat-avatar';
import { IFakeMessage } from '../../../../pages/chat/fake-data/fake-data-types';

interface MessageProps {
  message: IFakeMessage;
  interlocutor: string;
  avatar: string;
  isOnline: boolean;
}

const Message = memo(
  ({ message, interlocutor, avatar, isOnline }: MessageProps) => {
    const { isOwnMe, text, sendTime, status } = message;

    return (
      <li className={`${Styles.message} ${isOwnMe && Styles.messageMy}`}>
        <div className={`${Styles.block} ${isOwnMe && Styles.blockMy}`}>
          <div className={isOwnMe ? Styles.containerMy : Styles.container}>
            <p className={Styles.name}>{isOwnMe ? 'Вы' : interlocutor}</p>
            <p className={Styles.message}>{text}</p>
            <p className={Styles.sendTime}>{sendTime}</p>
          </div>
          <ChatAvatar img={avatar} isOnline={isOnline} />
          <p className={Styles.status}>
            {status.delivered
              ? `Просмотрено в ${status.time}`
              : `Отправлено в ${status.time}`}
          </p>
        </div>
      </li>
    );
  }
);

export default Message;
