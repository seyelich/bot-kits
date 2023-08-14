import { Dispatch, FC, SetStateAction } from 'react';
import styles from './popup-connection-info.module.css';
import CloseIcon from '../../../icons/others/close';
import CopyAccountSettingsIcon from '../icon/copy-account-settings-icon';

interface IPopupConnectionInfo {
  isOpen?: boolean;
  setIsConnectionInfoPopupOpened: Dispatch<SetStateAction<boolean>>;
}

const PopupConnectionInfo: FC<IPopupConnectionInfo> = ({
  isOpen,
  setIsConnectionInfoPopupOpened,
}) => (
  <div
    className={isOpen ? styles.popup : styles.popup_hidden}
    onClick={(e) => {
      if (e.target === e.currentTarget) {
        setIsConnectionInfoPopupOpened(false);
      }
    }}
  >
    <div className={styles.container}>
      <p className={styles.title}>Иноформация о подключении</p>
      <p className={styles.subtitle}>Название канала</p>
      <p className={styles.channel}>ChanelName</p>
      <div className={styles.line} />
      <p className={styles.subtitle}>Ключ доступа</p>

      <div className={styles.btn_container}>
        <p className={styles.channel}>
          1842016250:AAF8uWUV1wE9B8XxZvfbmRiZkmh1tWXu-Ns
        </p>

        <CopyAccountSettingsIcon width={24} height={24} />
      </div>
      <button
        type="button"
        className={styles.close_btn}
        onClick={() => {
          setIsConnectionInfoPopupOpened(false);
        }}
      >
        <CloseIcon />
      </button>
    </div>
  </div>
);

export default PopupConnectionInfo;
