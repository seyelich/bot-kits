import { FC, useEffect, useState } from 'react';
import styles from './Bot.module.css';
import Dots from '../../icons/Dots/Dots';
import TelegramIcon from '../../../icons/social/telegram';

interface IBot {
  text: string;
}

const Bot: FC<IBot> = ({ text }) => {
  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 768px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(max-width: 768px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.icons}>
        {matches ? (
          <TelegramIcon width={40} height={40} type="blue" />
        ) : (
          <TelegramIcon width={52} height={52} type="blue" />
        )}

        <Dots />
      </div>
      <div className={styles.container}>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default Bot;
