import ChatAvatarSent from '../../../icons/others/ChatAvatarSent';
import styles from './sent-message.module.css';

// Дефолтные значения пропсов нужны для отладки верстки компонента.
function SentMessage({
  message = 'Привет, Перейдите по ссылке https://BOTkit/file/-node-id=3A332705',
  sendTime = '10 мин назад',
  status = {
    time: '14:54',
    delivered: true,
  },
}: {
  message?: string;
  sendTime?: string;
  status?: {
    time: string;
    delivered: boolean;
  };
}) {
  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <p className={styles.name}>Вы</p>
        <p className={styles.message}>{message}</p>
        <p className={styles.sendTime}>{sendTime}</p>
      </div>
      <ChatAvatarSent />
      <p className={styles.status}>
        {status && status.delivered
          ? `Просмотрено в ${status!.time}`
          : `Отправлено в ${status!.time}`}
      </p>
    </div>
  );
}

export default SentMessage;
