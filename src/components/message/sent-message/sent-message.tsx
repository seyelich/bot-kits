import ChatAvatarSent from '../../../icons/others/ChatAvatarSent';
import styles from './sent-message.module.css';

type TSendMessage = {
  // Когда будет бек, нужно будет убрать оператор "?"
  message?: {
    text: string;
    sendTime: string;
    status: {
      time: string;
      delivered: boolean;
    };
  };
};

// Дефолтные значения пропсов нужны для отладки верстки компонента.
function SentMessage({
  message = {
    text: 'Привет, Перейдите по ссылке https://BOTkit/file/-node-id=3A332705',
    sendTime: '10 мин назад',
    status: {
      time: '14:54',
      delivered: true,
    },
  },
}: TSendMessage) {
  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <p className={styles.name}>Вы</p>
        <p className={styles.message}>{message.text}</p>
        <p className={styles.sendTime}>{message.sendTime}</p>
      </div>
      <ChatAvatarSent />
      <p className={styles.status}>
        {message.status.delivered
          ? `Просмотрено в ${message.status.time}`
          : `Отправлено в ${message.status.time}`}
      </p>
    </div>
  );
}

export default SentMessage;
