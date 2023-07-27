import { FC } from 'react';
import styles from './AddBot.module.css';
import { Plus } from '../../icons/Plus/Plus';


export const AddBot: FC = () => {
  const addBot = () => {
    console.log('Add bot')
  }
  return (
    <div className={styles.wrapper}>
      <span className={styles.botton} onClick={addBot}><Plus color='#a6b3c9' /></span>
      <p className={styles.text}>Добавить бота</p>
    </div>
  );
};
