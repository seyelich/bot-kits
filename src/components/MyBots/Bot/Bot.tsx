import { FC, useState } from 'react';
import styles from './Bot.module.css';
import { Telegram } from '../../icons/Telegram/Telegram';
import { Dots } from '../../icons/Dots/Dots';

interface IBot {
  text: string;
}

export const Bot: FC<IBot> = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icons}>
        <Telegram />
        <Dots />
      </div>
      <div className={styles.container}>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
