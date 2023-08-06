import { useState } from 'react';
import Button from '../Button/Button';
import SubscriptionStatusNotSubscribe from './subscription-status-not-subscribe/subscription-status-not-subscribe';
import SubscriptionStatusSubscribe from './subscription-status-subscribe/subscription-status-subscribe';
import styles from './subscription-status.module.css';
import PopupPromocode from '../popup-promocode/popup-promocode';
import Modal from '../modal/modal';
import PopupTarif from '../popup-tarif/popup-tarif';

type TProps = {
  subcriription: {
    tarif?: string;
    status: string;
    next_payment?: string;
    payment_source?: string;
    reason?: string;
  };
};

export default function SubscriptionStatus({ subcriription }: TProps) {
  const { status } = subcriription;
  const [openPromo, setOpenPromo] = useState(false);
  const [openTarif, setOpenTarif] = useState(false);
  const openPopupPromocode = () => {
    setOpenPromo(true);
  };
  const closePopup = () => {
    setOpenPromo(false);
    setOpenTarif(false);
  };

  return (
    <div className={styles.container}>
      {status === 'notSubscribe' ? (
        <SubscriptionStatusNotSubscribe setOpenPopup={setOpenTarif} />
      ) : (
        <SubscriptionStatusSubscribe
          subcriription={subcriription}
          setOpenPopup={setOpenTarif}
        />
      )}
      <div className={styles.promo}>
        <div className={styles.balans}>
          <p className={styles.comment__line}>Баланс</p>
          <h3 className={styles.title}>0&#8381;</h3>
        </div>
        <Button
          type="grey"
          text="АКТИВИРОВАТЬ ПРОМОКОД"
          width={229}
          height={60}
          onClick={openPopupPromocode}
        />
      </div>
      {openPromo && (
        <Modal onClose={closePopup}>
          <PopupPromocode onClose={closePopup} />
        </Modal>
      )}
      {openTarif && (
        <Modal onClose={closePopup}>
          <PopupTarif onClose={closePopup} />
        </Modal>
      )}
    </div>
  );
}
