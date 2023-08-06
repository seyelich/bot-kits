import styles from './subscription-table.module.css';

export default function SubscriptionTable() {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <p className={styles.title}>История платежей</p>
        <select className={styles.switch}>
          <option>Все</option>
          <option>Списания</option>
          <option>Поступления</option>
        </select>
      </div>
      <table className={styles.table}>
        <tr className={styles.table__header}>
          <td className={`${styles.column} ${styles.column_date}`}>Дата</td>
          <td className={`${styles.column} ${styles.column_operation}`}>
            Операция
          </td>
          <td className={`${styles.column} ${styles.column_summ}`}>Сумма</td>
          <td className={`${styles.column} ${styles.column_note}`}>
            Примечание
          </td>
          <td className={`${styles.column} ${styles.column_status}`}>Статус</td>
        </tr>
      </table>
    </div>
  );
}
