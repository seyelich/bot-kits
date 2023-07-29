import { FC } from 'react';
import styles from './ServiceBasics.module.css';
import { Arrow24x24 } from '../../icons/Arrow24x24/Arrow24x24';


export const ServiceBasics: FC = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h4 className={styles.title}>База знаний</h4>
        <span className={styles.icon}><Arrow24x24/></span>
      </div>
      <p className={styles.subtitle}>Узнай, как создать чат бота. Примеры и описание опций сервиса! </p>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}><span className={styles.marker}>&gt;</span><p className={styles.text}>Начало работы в сервисе</p> </li>
          <li className={styles.item}><span className={styles.marker}>&gt;</span><p className={styles.text}>Блок схемы</p> </li>
          <li className={styles.item}><span className={styles.marker}>&gt;</span><p className={styles.text}>Рассылка</p> </li>

        </ul>
        <ul className={styles.list}>
        <li className={styles.item}><span className={styles.marker}>&gt;</span><p className={styles.text}>Конфигурации </p> </li>
        <li className={styles.item}><span className={styles.marker}>&gt;</span><p className={styles.text}>Статистика</p> </li>
        <li className={styles.item}><span className={styles.marker}>&gt;</span><p className={styles.text}>Диалоги</p> </li>

        </ul>
      </div>
    </div>

  );
};
