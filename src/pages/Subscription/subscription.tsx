import { useState } from 'react';
import SubscriptionStatus from '../../components/subscription-status/subscription-status';
import Button from '../../components/Button/Button';
import SubscriptionTable from '../../components/subscription-table/subscription-table';
import styles from './subscription.module.css';
import {
  // paymentsEmpty,
  payments,
  // notSubscribe,
  subscribeActive,
  // subscribeNotActive,
} from '../../services/subcriription-fake-data';
import Modal from '../../components/modal/modal';
import PopupTarif from '../../components/popup-tarif/popup-tarif';

export default function Subscription() {
  const subcriription = subscribeActive;
  const { status } = subcriription;
  const [openTarif, setOpenTarif] = useState(false);
  const closePopup = () => {
    setOpenTarif(false);
  };

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
            onClick={() => {
              setOpenTarif(true);
            }}
          />
        </div>
      )}
      <section className={styles.subscription}>
        <SubscriptionStatus
          subcriription={subcriription}
          setOpenTarif={setOpenTarif}
        />
        <SubscriptionTable payments={payments} />
      </section>
      {openTarif && (
        <Modal onClose={closePopup}>
          <PopupTarif />
        </Modal>
      )}
    </main>
  );
}
