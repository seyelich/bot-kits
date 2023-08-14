import styles from './subscription-detail-active.module.css';

type TDetailProps = {
  payment: string;
  card: string;
};

export default function SubscriptionDetailActive({
  payment,
  card,
}: TDetailProps) {
  return (
    <div className={styles.container}>
      <div className={styles.comment}>
        <p className={styles.comment__line}>Следующее списание</p>
      </div>
      <p className={`${styles.payment_data} ${styles.text_size_l}`}>
        {payment}
      </p>
      <p className={`${styles.payment_card} ${styles.text_size_l}`}>
        {`карта ${card}`}
      </p>
      <button className={styles.cancel} type="button">
        отменить
      </button>
    </div>
  );
}
