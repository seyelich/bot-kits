import SubscriptionStatus from '../../components/subscription-status/subscription-status';
import Button from '../../components/Button/Button';
import SubscriptionTable from '../../components/subscription-table/subscription-table';
import styles from './subscription.module.css';
import {
  // paymentsEmpty,
  payments,
  // notSubscribe,
  // subscribeActive,
  subscribeNotActive,
} from '../../services/subcriription-fake-data';
import Modal from '../../components/modal/modal';
import PopupTarif from '../../components/popup-tarif/popup-tarif';
import useModal from '../../hooks/useModal';

export default function Subscription() {
  const subcriription = subscribeNotActive;
  const { status } = subcriription;
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Подписка и платежи</h1>
      {status === 'active' && (
        <div className={styles.button_container}>
          <Button
            type="green"
            text="СМЕНИТЬ ТАРИФ"
            width={188}
            height={46}
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
