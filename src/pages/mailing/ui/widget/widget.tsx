import React, { FC, useState } from 'react';

import styles from './widget.module.css';

import BotLogoIcon from '../../../../icons/others/BotLogo';
import RobotIcon from '../../../../icons/others/Robot';
import ChevronBigIcon from '../../../../icons/others/ChevronBig';
import Button from '../../../../components/Button/Button';


interface IWidget {
  name: string;
  text: string;
}

const Widget: FC<IWidget> = ({ name, text }) => {
  const [showWidget, setShowWidget] = useState(true);

  return (
    <div className={styles.widget}>
      <button
        type="button"
        className={styles.arrow}
        onClick={() => setShowWidget(!showWidget)}
      >
        {
          <div
            className={
              showWidget
                ? `${styles.arrow__rotate} ${styles.arrow__rotate_rotated}`
                : styles.arrow__rotate
            }
          >
            <ChevronBigIcon width={16} height={16} />
          </div>
        }
      </button>
      {showWidget ? (
        <div className={styles.widget__block}>
          <div className={styles.widget__header}>
            <p className={styles.widget__type}>Тестовый виджет</p>
            <p className={styles.widget__name}>{name}</p>
          </div>
          <div className={styles.widget__container}>
            <div className={styles.widget__chat}>
              <RobotIcon width={32} height={32} />
              <div className={styles.widget__chatText}>
                <p className={styles.widget__chatText_title}>Бот</p>
                <p
                  className={
                    text.length > 0
                      ? styles.widget__chatText
                      : `${styles.widget__chatText} ${styles.widget__chatText_short}`
                  }
                >
                  {text.length > 0 ? text : '...'}
                </p>
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
