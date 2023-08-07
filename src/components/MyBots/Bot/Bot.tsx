/* eslint-disable import/no-cycle */
import { FC, useContext, useEffect, useState } from 'react';
import styles from './Bot.module.css';
import Dots from '../../icons/Dots/Dots';
import TelegramIcon from '../../../icons/social/telegram';
import { Context } from '../../../App';

interface IBot {
  text: string;
}

const Bot: FC<IBot> = ({ text }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { settingsOpen, setSettingOpen } = useContext(Context);
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
        <button
          onClick={() => {
            setSettingOpen(true);
          }}
          type="button"
        >
          <Dots />
        </button>
      </div>
      <div className={styles.container}>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default Bot;
