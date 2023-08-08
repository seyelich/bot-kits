import { useState } from 'react';
import ChevronBigIcon from '../../icons/others/ChevronBig';
import styles from './subscription-table.module.css';

type TTableProps = {
  payments: any[];
};

export default function SubscriptionTable({ payments }: TTableProps) {
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
          <tr>
            <th style={{ width: '136px' }}>Дата</th>
            <th style={{ width: '88px' }}>Операция</th>
            <th style={{ width: '116px' }}>Сумма</th>
            <th style={{ width: '276px' }}>Примечание</th>
            <th style={{ width: '76px' }}>Статус</th>
          </tr>
        </thead>
        <tbody className={styles.table_text}>
          {!payments.length && (
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          )}
          {payments.length &&
            payments.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.date}</td>
                <td>{payment.operation}</td>
                <td>{payment.summ}&#8381;</td>
                <td>{payment.note || '-'}</td>
                <td
                  className={
                    payment.status === 'Успешно'
                      ? styles.status_success
                      : styles.status_fail
                  }
                >
                  {payment.status}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
