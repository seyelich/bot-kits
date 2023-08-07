import { Dispatch, FC, SetStateAction } from 'react';
import styles from './popup-notifications-settings.module.css';
import CloseIcon from '../../../icons/others/Close';
import CopyAccountSettingsIcon from '../icon/copy-account-settings-icon';

interface IPopupNotificationsSettings {
  isOpen: boolean;
  setIsNotificationsSettingsPopupOpened: Dispatch<SetStateAction<boolean>>;
}

const PopupNotificationsSettings: FC<IPopupNotificationsSettings> = ({
  isOpen,
  setIsNotificationsSettingsPopupOpened,
}) => (
  <div
    className={isOpen ? styles.popup : styles.popup_hidden}
    onClick={(e) => {
      if (e.target === e.currentTarget) {
        setIsNotificationsSettingsPopupOpened(false);
      }
    }}
  >
    <div className={styles.container}>
      <p className={styles.title}>Настройка уведомлений</p>
      <p className={styles.subtitle}>Подписаться на уведомления</p>
      <div className={styles.btn_container}>
        <p className={styles.channel}>/notify 60a280e3f7b15d37975ccb69</p>
        <CopyAccountSettingsIcon width={24} height={24} />
      </div>
      <div className={styles.line} />
      <p className={styles.subtitle}>Отписаться от уведомлений</p>

      <div className={styles.btn_container}>
        <p className={styles.channel}>
          /disable_notify 60a280e3f7b15d37975ccb69
        </p>
        <CopyAccountSettingsIcon width={24} height={24} />
      </div>
      <button
        type="button"
        className={styles.close_btn}
        onClick={() => {
          setIsNotificationsSettingsPopupOpened(false);
        }}
      >
        <CloseIcon />
      </button>
    </div>
  </div>
);

export default PopupNotificationsSettings;
