import { Dispatch, SetStateAction } from 'react';
import Button from '../Button/Button';
import styles from './subscription-status-subscribe.module.css';

type TProps = {
  status: string;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
};

export default function SubscriptionStatusSubscribe({
  status,
  setOpenPopup,
}: TProps) {
  const openPopupTarif = () => {
    setOpenPopup(true);
  };

  return (
    <div className={styles.subscription}>
      <div className={styles.statusbar}>
        <h2 className={styles.title}>Бизнес</h2>
        {status === 'active' && (
          <p className={`${styles.text} ${styles.text_active}`}>активен</p>
        )}
        {status === 'notActive' && (
          <p className={`${styles.text} ${styles.text_notactive}`}>неактивен</p>
        )}
      </div>
      <div className={styles.comment}>
        <p className={styles.comment__line}>
          Не удалось продлить подписку 15.06.2020
        </p>
        <p className={styles.comment__line}>Недостаточно средств</p>
      </div>
      <Button
        type="green"
        text="АКТИВИРОВАТЬ ПОДПИСКУ"
        width={340}
        height={56}
        onClick={openPopupTarif}
      />
    </div>
  );
}
