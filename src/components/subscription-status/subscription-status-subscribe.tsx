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
        <h3 className={styles.title}>Бизнес</h3>
        {status === 'active' && (
          <h4 className={`${styles.text} ${styles.text_active}`}>активен</h4>
        )}
        {status === 'notActive' && (
          <h4 className={`${styles.text} ${styles.text_notactive}`}>
            неактивен
          </h4>
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
