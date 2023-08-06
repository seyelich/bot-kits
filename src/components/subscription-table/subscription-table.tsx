import { useState } from 'react';
import ChevronBigIcon from '../../icons/others/ChevronBig';
import styles from './subscription-table.module.css';

export default function SubscriptionTable() {
  const [arrowRotate, setArrowRotate] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <p className={styles.title}>История платежей</p>
        <div className={styles.filter}>
          <p className={styles.filter__text}>Все</p>
          <div
            className={`${styles.filter__icon} ${
              arrowRotate ? styles.filter__icon_rotated : ''
            }`}
            onClick={() => setArrowRotate(!arrowRotate)}
          >
            <ChevronBigIcon color="#A6B3C9" width={26} height={26} />
          </div>

          {arrowRotate && (
            <div className={styles.filter__list}>
              <button
                type="button"
                className={styles.filter__listText}
                onClick={() => {
                  setArrowRotate(false);
                  // setMailings(data);
                }}
              >
                Все
              </button>
              <button
                type="button"
                className={styles.filter__listText}
                onClick={() => {
                  setArrowRotate(false);
                  // setMailings(data.filter((el) => el.status === 'Запущено'));
                }}
              >
                Списания
              </button>
              <button
                type="button"
                className={styles.filter__listText}
                onClick={() => {
                  setArrowRotate(false);
                  // setMailings(data.filter((el) => el.status === 'Отклонено'));
                }}
              >
                Поступления
              </button>
            </div>
          )}
        </div>
      </div>
      <table className={styles.table}>
        <thead className={styles.table__header}>
          <th style={{ width: '136px' }}>Дата</th>
          <th style={{ width: '88px' }}>Операция</th>
          <th style={{ width: '116px' }}>Сумма</th>
          <th style={{ width: '276px' }}>Примечание</th>
          <th style={{ width: '76px' }}>Статус</th>
        </thead>
        <tbody>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
