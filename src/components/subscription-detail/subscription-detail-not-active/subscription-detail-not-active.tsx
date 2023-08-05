import Button from '../Button/Button';
import styles from './subscription-detail-not-active.module.css';

type TDetailProps = {
  openTariffs: () => void;
};

export default function SubscriptionDetailNotActive({
  openTariffs,
}: TDetailProps) {
  return (
    <div className={styles.container}>
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
        onClick={openTariffs}
      />
    </div>
  );
}
