import BotTemplates from '../../components/BotTemplates/BotTemplates';
import MyBots from '../../components/MyBots/MyBots';
import Tutorials from '../../components/Tutorials/Tutorials';
import styles from './dashboard.module.css';

export default function Dashboard() {
  return (
    <main className={styles.container}>
      <BotTemplates />
      <MyBots />
      <div className={styles.wrapper}>
        {' '}
        <Tutorials />
      </div>
    </main>
  );
}
