import { Dispatch, SetStateAction } from 'react';
// import Button from '../Button/Button';
import styles from './subscription-status-subscribe.module.css';
import SubscriptionDetailNotActive from '../../subscription-detail/subscription-detail-not-active/subscription-detail-not-active';
import SubscriptionDetailActive from '../../subscription-detail/subscription-detail-active/subscription-detail-active';

type TProps = {
  status: string;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
};

export default function SubscriptionStatusSubscribe({
  status,
  setOpenPopup,
}: TProps) {
  const openPopupTarif = () => {
    setOpenPopup(true);
  };

  return (
    <div
      className={styles.subscription}
      style={status === 'active' ? { paddingBottom: 32 } : {}}
    >
      <div className={styles.statusbar}>
        <h3 className={styles.title}>Бизнес</h3>
        {status === 'active' && (
          <h4 className={`${styles.text} ${styles.text_active}`}>активен</h4>
        )}
        {status === 'notActive' && (
          <h4 className={`${styles.text} ${styles.text_notactive}`}>
            неактивен
          </h4>
        )}
      </div>
      {status === 'notActive' && (
        <SubscriptionDetailNotActive openTariffs={openPopupTarif} />
      )}
      {status === 'active' && <SubscriptionDetailActive />}
    </div>
  );
}
