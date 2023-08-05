/* eslint-disable no-dupe-else-if */
import React, { FC, useState } from 'react';

import styles from './widget.module.css';

import BotLogoIcon from '../../../../icons/others/BotLogo';
import RobotIcon from '../../../../icons/others/Robot';
import ChevronBigIcon from '../../../../icons/others/ChevronBig';
import Button from '../../../../components/Button/Button';
import CloseIcon from '../../../../icons/others/Close';

interface IWidget {
  italicText?: boolean;
  boldText?: boolean;
  name: string;
  text: string;
  hideSection: boolean;
  setHideSection: (arg: boolean) => void;
}

const Widget: FC<IWidget> = ({
  italicText,
  boldText,
  name,
  text,
  hideSection,
  setHideSection,
}) => {
  const [showWidget, setShowWidget] = useState(true);
  const date = new Date();
  let minutes: number | string = date.getMinutes();
  let hours: number | string = date.getHours();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  const messageTime = `${hours}:${minutes}`;

  return (
    <div
      className={`${styles.widget} ${hideSection ? styles.widget_hide : ''}`}
    >
      <button
        type="button"
        className={styles.arrow}
        onClick={() => setShowWidget(!showWidget)}
      >
        <div
          className={
            showWidget
              ? `${styles.arrow__rotate} ${styles.arrow__rotate_rotated}`
              : styles.arrow__rotate
          }
        >
          <ChevronBigIcon width={16} height={16} />
        </div>
      </button>
      {showWidget ? (
        <div className={styles.widget__block}>
          <div className={styles.widget__header}>
            <p className={styles.widget__type}>Тестовый виджет</p>
            <div className={styles.widget__nameBlock}>
              <p className={styles.widget__name}>{name}</p>
              <div
                className={styles.widget__nameIcon}
                onClick={() => setHideSection(true)}
              >
                <CloseIcon width={24} height={24} color="#060C23" />
              </div>
            </div>
          </div>
          <div className={styles.widget__container}>
            <div className={styles.widget__chat}>
              <RobotIcon width={32} height={32} />
              <div className={styles.widget__chatText_container}>
                <div
                  className={
                    text.length > 0
                      ? `${styles.widget__chatText} ${
                          italicText && styles.widget__chatText_italic
                        } ${boldText && styles.widget__chatText_bold}`
                      : `${styles.widget__chatText} ${styles.widget__chatText_short}`
                  }
                >
                  {text.length > 0 ? (
                    <div>
                      <p className={styles.widget__chatText_title}>Бот</p>
                      <p
                        className={`
                           ${italicText && styles.widget__chatText_italic} ${
                             boldText && styles.widget__chatText_bold
                           }
                          `}
                      >
                        {text}
                      </p>
                    </div>
                  ) : (
                    '...'
                  )}
                  <p className={styles.widget__date}>{messageTime}</p>
                </div>
              </div>
            </div>
            <div className={styles.button__container}>
              <Button
                type="green"
                text="Отправить себе"
                width={149}
                height={32}
              />
            </div>
          </div>

          <div className={styles.widget__footer}>
            <p className={styles.widget__footerText}>Powered by</p>
            <BotLogoIcon color="#243CBB" />
            <p className={styles.widget__footerText}>BotKits</p>
          </div>
        </div>
      ) : (
        <div className={styles.widget__bot}>
          <BotLogoIcon color="#fff" width={44} height={40} />
        </div>
      )}
    </div>
  );
};

export default Widget;
