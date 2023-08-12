import Button from '../Button/Button';
import SubscriptionStatusNotSubscribe from './subscription-status-not-subscribe/subscription-status-not-subscribe';
import SubscriptionStatusSubscribe from './subscription-status-subscribe/subscription-status-subscribe';
import styles from './subscription-status.module.css';
import PopupPromocode from '../popup-promocode/popup-promocode';
import Modal from '../modal/modal';
import useModal from '../../hooks/useModal';
import useMediaQuery from '../../hooks/useMediaQuery';

type TProps = {
  subcriription: {
    tarif?: string;
    status: string;
    next_payment?: string;
    payment_source?: string;
    reason?: string;
    balance?: string;
  };
  openModalTarif: () => void;
};

export default function SubscriptionStatus({
  subcriription,
  openModalTarif,
}: TProps) {
  const { status } = subcriription;
  const {
    isModalOpen,
    openModal: openModalPromo,
    closeModal: closeModalPromo,
  } = useModal();
  const mobile = useMediaQuery('(max-width: 415px)');
  const tablet = useMediaQuery('(max-width: 768px)');

  return (
    <div className={styles.container}>
      {status === 'notSubscribe' ? (
        <SubscriptionStatusNotSubscribe openModal={openModalTarif} />
      ) : (
        <SubscriptionStatusSubscribe
          subcriription={subcriription}
          openModal={openModalTarif}
        />
      )}
      <div className={styles.promo}>
        <div className={styles.balans}>
          <p className={styles.comment__line}>Баланс</p>
          <h3 className={styles.title}>{subcriription.balance}&#8381;</h3>
        </div>
        <Button
          type="grey"
          text="АКТИВИРОВАТЬ ПРОМОКОД"
          width={mobile ? 272 : tablet ? 340 : 229}
          height={tablet ? 56 : 60}
          onClick={openModalPromo}
        />
      </div>
      {isModalOpen && (
        <Modal onClose={closeModalPromo}>
          <PopupPromocode onClose={closeModalPromo} />
        </Modal>
      )}
    </div>
  );
}
