import { FC } from 'react';
import styles from './MyBots.module.css';
import { Bot } from './Bot/Bot';
import { AddBot } from './AddBot/AddBot';


export const MyBots: FC = () => {

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Мои боты</h1>
      <div className={styles.container}>
        <Bot text='Салон красоты' />
        <Bot text='Запись клиентов для консультации' />
        <Bot text='Опрос клиентов для проведения встречи' />
        <AddBot />
      </div>
    </div>

  );
};
