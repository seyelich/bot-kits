import { Dispatch, SetStateAction } from 'react';
import Button from '../../Button/Button';
import styles from './subscription-status-not-subscribe.module.css';

type TProps = {
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
};

export default function SubscriptionStatusNotSubscribe({
  setOpenPopup,
}: TProps) {
  const openPopupTarif = () => {
    setOpenPopup(true);
  };
  return (
    <div className={styles.subscription}>
      <h4 className={styles.text}>У вас нет активных подписок</h4>
      <div className={styles.comment}>
        <p className={styles.comment__line}>
          Выберите оптимальный тариф для себя
        </p>
      </div>
      <Button
        type="green"
        text="ВЫБРАТЬ ТАРИФ"
        width={340}
        height={56}
        onClick={openPopupTarif}
      />
    </div>
  );
}
