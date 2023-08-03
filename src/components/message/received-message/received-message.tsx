import React from 'react';
import styles from './received-message.module.css';
import ChatAvatarReceived from '../../../icons/others/ChatAvatarReceived';

type TReceivedMessage = {
  message: {
    text: string;
    sendTime: string;
    status: {
      time: string;
      delivered: boolean;
    };
    from: string;
  };
};

function ReceivedMessage({
  message = {
    text: 'Привет, как это сделать?',
    sendTime: '16 мин назад',
    status: {
      time: '14:54',
      delivered: true,
    },
    from: 'Сергей Надеин',
  },
}: TReceivedMessage) {
  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <p className={styles.name}>{message.from}</p>
        <p className={styles.message}>{message.text}</p>
        <p className={styles.sendTime}>{message.sendTime}</p>
      </div>
      <ChatAvatarReceived />
      <p className={styles.status}>
        {message.status.delivered
          ? `Просмотрено в ${message.status.time}`
          : `Отправлено в ${message.status.time}`}
      </p>
    </div>
  );
}

export default ReceivedMessage;
