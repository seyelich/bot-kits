import SubscriptionStatus from '../../components/subscription-status/subscription-status';
// import { useState } from 'react';
import { Button } from '../../components/Button/Button';
import SubscriptionStatusNotSubscribe from '../../components/subscription-status/subscription-status-not-subscribe';
import SubscriptionTable from '../../components/subscription-table/subscription-table';
import styles from './subscription.module.css';

export default function Subscription() {
  let status = 'notSubscribe';
  // const [status, setStatus] = useState('notSubscribe');
  // ['notSubscribe', 'active', 'notActive']
  status = 'notActive';

  return (
    <main className={styles.container}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Подписка и платежи</h1>
        {status !== 'notSubscribe' && (
          <Button type="green" text="СМЕНИТЬ ТАРИФ" width={188} height={46} />
        )}
      </div>
      <section className={styles.subscription}>
        {status === 'notSubscribe' && <SubscriptionStatusNotSubscribe />}
        {status !== 'notSubscribe' && <SubscriptionStatus status={status} />}
        <SubscriptionTable />
      </section>
    </main>
  );
}
