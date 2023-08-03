import Button from '../../components/Button/Button';
import styles from './partnership.module.css';

export default function Partnership() {
  return (
    <section className={styles.partnershipContainer}>
      <h1 className={styles.title}>Партнерская программа</h1>
      <Button type="blue" text="Запросить анкету" width={188} height={46} />
    </section>
  );
}
