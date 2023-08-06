// import { useState } from 'react';
import SubscriptionStatus from '../../components/subscription-status/subscription-status';
import Button from '../../components/Button/Button';
import SubscriptionTable from '../../components/subscription-table/subscription-table';
import styles from './subscription.module.css';
import {
  // notSubscribe,
  // subscribeActive,
  subscribeNotActive,
} from '../../services/subcriription-fake-data';

export default function Subscription() {
  const subcriription = subscribeNotActive;
  const { status } = subcriription;
  return (
    <main className={styles.container}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Подписка и платежи</h1>
        {status === 'active' && (
          <Button type="green" text="СМЕНИТЬ ТАРИФ" width={188} height={46} />
        )}
      </div>
      <section className={styles.subscription}>
        <SubscriptionStatus subcriription={subcriription} />
        <SubscriptionTable />
      </section>
    </main>
  );
}
