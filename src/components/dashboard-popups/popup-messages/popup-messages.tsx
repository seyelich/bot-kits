/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Dispatch, FC, SetStateAction, useState } from 'react';
import styles from './popup-messages.module.css';
import CloseIcon from '../../../icons/others/close';

import NotificationsIcon from '../../../icons/others/notifications/notifications';
import useMediaQuery from '../../../hooks/use-media-query';

interface IPopupMessages {
  isOpen: boolean;
  setIsPopupMessagesOpened?: Dispatch<SetStateAction<boolean>>;
}

const PopupMessages: FC<IPopupMessages> = ({
  isOpen,
  setIsPopupMessagesOpened,
}) => {
  const [activeTab, setActiveTab] = useState('tab1');
  const handleTab1 = () => {
    setActiveTab('tab1');
  };
  const handleTab2 = () => {
    setActiveTab('tab2');
  };
  const matches = useMediaQuery('(max-width: 414px)');
  return (
    <div
      className={isOpen ? styles.popup : styles.popup_hidden}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsPopupMessagesOpened?.(false);
        }
      }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.wrapper}>
            {matches ? (
              <NotificationsIcon counter={2} color="#060c23" />
            ) : (
              <NotificationsIcon />
            )}

            <p className={styles.title}>Уведомления</p>
          </div>
          {!matches && (
            <button
              type="button"
              className={styles.close_btn}
              onClick={() => setIsPopupMessagesOpened?.(false)}
            >
              <CloseIcon color="#d7deea" width={24} height={24} />
            </button>
          )}
        </div>
        <ul className={styles.tabs}>
          <li
            className={
              activeTab === 'tab1'
                ? `${styles.tab1} ${styles.tab1_active}`
                : styles.tab1
            }
            onClick={handleTab1}
          >
            Новости сервиса
          </li>
          <li
            className={
              activeTab === 'tab2'
                ? `${styles.tab2} ${styles.tab2_active}`
                : styles.tab1
            }
            onClick={handleTab2}
          >
            Лог событий
          </li>
        </ul>
        <div>
          {activeTab === 'tab1' ? (
            <div className="FirstTab" />
          ) : (
            <div className="FirstTab" />
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupMessages;
