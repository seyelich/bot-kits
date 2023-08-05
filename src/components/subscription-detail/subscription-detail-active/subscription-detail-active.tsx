import styles from './subscription-detail-active.module.css';

export default function SubscriptionDetailActive() {
  return (
    <div className={styles.container}>
      <div className={styles.comment}>
        <p className={styles.comment__line}>Следующее списание</p>
      </div>
      <p className={`${styles.payment_data} ${styles.text_size_l}`}>
        15.06.2021
      </p>
      <p className={`${styles.payment_card} ${styles.text_size_l}`}>
        карта *** 1119
      </p>
      <button className={styles.cancel} type="button">
        отменить
      </button>
    </div>
  );
}
