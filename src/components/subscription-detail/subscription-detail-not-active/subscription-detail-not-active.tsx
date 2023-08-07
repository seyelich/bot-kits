import Button from '../../Button/Button';
import styles from './subscription-detail-not-active.module.css';

type TDetailProps = {
  payment: string;
  reason: string;
  openTariffs: () => void;
};

export default function SubscriptionDetailNotActive({
  payment,
  reason,
  openTariffs,
}: TDetailProps) {
  return (
    <div className={styles.container}>
      <div className={styles.comment}>
        <p className={styles.comment__line}>
          {`Не удалось продлить подписку ${payment}`}
        </p>
        <p className={styles.comment__line}>{reason}</p>
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
