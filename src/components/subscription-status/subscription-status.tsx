import { Button } from '../Button/Button';
import styles from './subscription-status.module.css';

type TProps = {
  status: string;
};

export default function SubscriptionStatus({ status }: TProps) {
  return (
    <div className={styles.container}>
      <div className={styles.subscription}>
        <div className={styles.statusbar}>
          <h2 className={styles.title}>Бизнес</h2>
          {status === 'active' && (
            <p className={`${styles.text} ${styles.text_active}`}>активен</p>
          )}
          {status === 'notActive' && (
            <p className={`${styles.text} ${styles.text_notactive}`}>
              неактивен
            </p>
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
        />
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
  );
}
