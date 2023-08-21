/* eslint-disable import/no-cycle */
import { forwardRef, useContext } from 'react';
import styles from './bot.module.css';
import MoreButtonIcon from '../../../ui/icons/others/more-button';
import TelegramIcon from '../../../ui/icons/social/telegram';
import { Context } from '../../../app';
import useMediaQuery from '../../../hooks/use-media-query';

interface IBot {
  text: string;
  onClick?: (e: any) => void;
}

const Bot = forwardRef<HTMLDivElement | null, IBot>(
  ({ text, onClick }, ref) => {
    const { setMyBotsSettingsOpen } = useContext(Context);

    const matchesTablet = useMediaQuery('(max-width: 768px)');
    return (
      <div className={styles.wrapper} ref={ref} onClick={onClick}>
        <div className={styles.icons}>
          {matchesTablet ? (
            <TelegramIcon width={40} height={40} type="blue" />
          ) : (
            <TelegramIcon width={52} height={52} type="blue" />
          )}
          <button
            onClick={() => {
              setMyBotsSettingsOpen(true);
            }}
            type="button"
          >
            <MoreButtonIcon color="#A6B3C9" />
          </button>
        </div>
        <div className={styles.container}>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    );
  }
);

export default Bot;
