import BotTemplates from '../../components/bot-templates/bot-templates';
// eslint-disable-next-line import/no-cycle
import MyBots from '../../components/my-bots/my-bots';
import Tutorials from '../../components/tutorials/tutorials';
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
