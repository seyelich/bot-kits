import styles from './subscription-status-subscribe.module.css';
import SubscriptionDetailNotActive from '../../subscription-detail/subscription-detail-not-active/subscription-detail-not-active';
import SubscriptionDetailActive from '../../subscription-detail/subscription-detail-active/subscription-detail-active';

type TProps = {
  subcriription: {
    tarif?: string;
    status: string;
    next_payment?: string;
    payment_source?: string;
    reason?: string;
  };
  openModal: () => void;
};

export default function SubscriptionStatusSubscribe({
  subcriription,
  openModal,
}: TProps) {
  const {
    tarif,
    status,
    next_payment: nextPayment,
    payment_source: paymentSource,
    reason,
  } = subcriription;

  return (
    <div
      className={styles.subscription}
      style={status === 'active' ? { paddingBottom: 32 } : {}}
    >
      <div className={styles.statusbar}>
        <h3 className={styles.title}>{tarif}</h3>
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
        <SubscriptionDetailNotActive
          payment={nextPayment!}
          reason={reason!}
          openTariffs={openModal}
        />
      )}
      {status === 'active' && (
        <SubscriptionDetailActive
          payment={nextPayment!}
          card={paymentSource!}
        />
      )}
    </div>
  );
}
