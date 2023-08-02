import { Button } from '../Button/Button';
import PopupPromocode from '../popup-promocode/popup-promocode';
import styles from './subscription-status-not-subscribe.module.css';

export default function SubscriptionStatusNotSubscribe() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.subscription}>
          <div className={styles.statusbar}>
            <h2 className={styles.text}>У вас нет активных подписок</h2>
          </div>
          <div className={styles.comment}>
            <p className={styles.comment__line}>
              Выберите оптимальный тариф для себя
            </p>
          </div>
          <Button type="green" text="ВЫБРАТЬ ТАРИФ" width={340} height={56} />
        </div>
        <div className={styles.promo}>
          <div className={styles.balans}>
            <p className={styles.comment__line}>Баланс</p>
            <p className={styles.title}>0&#8381;</p>
          </div>
          <Button
            type="grey"
            text="АКТИВИРОВАТЬ ПРОМОКОД"
            width={229}
            height={60}
          />
        </div>
      </div>
      <PopupPromocode />
    </>
  );
}
