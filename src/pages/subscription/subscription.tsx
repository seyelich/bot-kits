import SubscriptionStatus from '../../components/subscription-status/subscription-status';
import Button from '../../ui/buttons/button/button';
import SubscriptionTable from '../../components/subscription-table/subscription-table';
import styles from './subscription.module.css';
import {
  payments,
  subscribeActive,
} from '../../services/subcriription-fake-data';
import Modal from '../../ui/modal/modal';
import PopupTarif from '../../components/popup-tarif/popup-tarif';
import useModal from '../../hooks/use-modal';
import useMediaQuery from '../../hooks/use-media-query';

export default function Subscription() {
  const subcriription = subscribeActive;
  const { status } = subcriription;
  const { isModalOpen, openModal, closeModal } = useModal();
  const tablet = useMediaQuery('(max-width: 768px)');

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Подписка и платежи</h1>
      {status === 'active' && (
        <div className={styles.button_container}>
          <Button
            type="green"
            text="СМЕНИТЬ ТАРИФ"
            width={tablet ? 320 : 188}
            height={tablet ? 56 : 46}
            onClick={openModal}
          />
        </div>
      )}
      <section className={styles.subscription}>
        <SubscriptionStatus
          subcriription={subcriription}
          openModalTarif={openModal}
        />
        <SubscriptionTable payments={payments} />
      </section>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <PopupTarif />
        </Modal>
      )}
    </main>
  );
}
