import Button from '../../components/Button/Button';
import styles from './bot-builder.module.css';

export default function BotBuilder() {
  return (
    <div className={styles.main}>
      <Button
        type="green"
        width={60}
        height={60}
        extraClass={styles.plusButton}
      />
      <h1>Bot builder222</h1>
    </div>
  );
}
