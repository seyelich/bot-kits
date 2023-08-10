import { Dispatch, SetStateAction, useState } from 'react';
import Button from '../Button/Button';
import SubscriptionStatusNotSubscribe from './subscription-status-not-subscribe/subscription-status-not-subscribe';
import SubscriptionStatusSubscribe from './subscription-status-subscribe/subscription-status-subscribe';
import styles from './subscription-status.module.css';
import PopupPromocode from '../popup-promocode/popup-promocode';
import Modal from '../modal/modal';

type TProps = {
  subcriription: {
    tarif?: string;
    status: string;
    next_payment?: string;
    payment_source?: string;
    reason?: string;
    balance?: string;
  };
  setOpenTarif: Dispatch<SetStateAction<boolean>>;
};

export default function SubscriptionStatus({
  subcriription,
  setOpenTarif,
}: TProps) {
  const { status } = subcriription;
  const [openPromo, setOpenPromo] = useState(false);
  const openPopupPromocode = () => {
    setOpenPromo(true);
  };
  const closePopup = () => {
    setOpenPromo(false);
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
          <h3 className={styles.title}>{subcriription.balance}&#8381;</h3>
        </div>
        <Button
          type="grey"
          buttonHtmlType='button'
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
    </div>
  );
}
