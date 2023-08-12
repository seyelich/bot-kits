import useMediaQuery from '../../../hooks/use-media-query';
import Button from '../../button/button';
import styles from './subscription-status-not-subscribe.module.css';

type TProps = {
  openModal: () => void;
};

export default function SubscriptionStatusNotSubscribe({ openModal }: TProps) {
  const mobile = useMediaQuery('(max-width: 415px)');

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
        width={mobile ? 272 : 340}
        height={56}
        onClick={openModal}
      />
    </div>
  );
}
