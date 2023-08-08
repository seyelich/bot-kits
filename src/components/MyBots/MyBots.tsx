import { FC } from 'react';
import styles from './MyBots.module.css';
// eslint-disable-next-line import/no-cycle
import Bot from './Bot/Bot';
import AddBot from './AddBot/AddBot';

const MyBots: FC = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.header}>Мои боты</h1>
    <div className={styles.container}>
      <div className={styles.track}>
        <Bot text="Салон красоты" />
        <Bot text="Запись клиентов для консультации" />
        <Bot text="Опрос клиентов для проведения встречи" />
        <AddBot />
      </div>
    </div>
  </div>
);

export default MyBots;
