import React from 'react';
import styles from './received-message.module.css';
import ChatAvatarReceived from '../../../icons/others/ChatAvatarReceived';

function ReceivedMessage({
  message = 'Привет, как это сделать?',
  sendTime = '16 мин назад',
  status = {
    time: '14:54',
    delivered: true,
  },
  from = 'Сергей Надеин',
}: {
  message?: string;
  sendTime?: string;
  status?: {
    time: string;
    delivered: boolean;
  };
  from?: string;
}) {
  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <p className={styles.name}>{from}</p>
        <p className={styles.message}>{message}</p>
        <p className={styles.sendTime}>{sendTime}</p>
      </div>
      <ChatAvatarReceived />
      <p className={styles.status}>
        {status && status.delivered
          ? `Просмотрено в ${status!.time}`
          : `Отправлено в ${status!.time}`}
      </p>
    </div>
  );
}

export default ReceivedMessage;
