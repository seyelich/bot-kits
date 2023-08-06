/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import Button from '../../components/Button/Button';
import ChevronBigIcon from '../../icons/others/ChevronBig';
import styles from './partnership.module.css';

interface IDataShips {
  id: number;
  visities: string;
  registrations: number;
  status: string;
  summ: number;
  commission: number;
  paid: number;
  withdrawal: number;
}

const data: IDataShips[] = [
  {
    id: 1,
    visities: '28 человек',
    registrations: 15,
    status: 'Оплачено',
    summ: 5000,
    commission: 1500,
    paid: 4500,
    withdrawal: 1500,
  },
  {
    id: 2,
    visities: '17 человек',
    registrations: 8,
    status: 'Не оплачено',
    summ: 15000,
    commission: 4500,
    paid: 8200,
    withdrawal: 4500,
  },
  {
    id: 3,
    visities: '10 человек',
    registrations: 10,
    status: 'В обработке',
    summ: 5000,
    commission: 1500,
    paid: 10000,
    withdrawal: 1500,
  },
];

export default function Partnership() {
  const [arrowRotate, setArrowRotate] = useState(false);
  const [ships, setShips] = useState(data);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 className={styles.title}>Партнерская программа</h1>
        <Button
          type="green"
          text="ЗАПРОСИТЬ ВЫПЛАТУ"
          width={188}
          height={46}
          extraClass={styles.button__dekstop}
          onClick={() => {
            console.log(
              'Пока неизвестно, что должно происходить по нажатию кнопки'
            );
          }}
        />
      </div>
      <div className={styles.ships}>
        <div className={styles.ship__header}>
          <h2 className={styles.ship__title}>Статистика рефералов</h2>
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
                <p
                  className={styles.filter__listText}
                  onClick={() => {
                    setArrowRotate(false);
                    setShips(data);
                  }}
                >
                  Все
                </p>
                <p
                  className={styles.filter__listText}
                  onClick={() => {
                    setArrowRotate(false);
                    setShips(data.filter((el) => el.status === 'Оплачено'));
                  }}
                >
                  Оплачены
                </p>
                <p
                  className={styles.filter__listText}
                  onClick={() => {
                    setArrowRotate(false);
                    setShips(data.filter((el) => el.status === 'Не оплачено'));
                  }}
                >
                  Не оплачены
                </p>
                <p
                  className={styles.filter__listText}
                  onClick={() => {
                    setArrowRotate(false);
                    setShips(data.filter((el) => el.status === 'В обработке'));
                  }}
                >
                  В обработке
                </p>
              </div>
            )}
          </div>
        </div>
        <table className={styles.table_desktop}>
          <colgroup>
            <col style={{ width: '130px' }} />
            <col style={{ width: '140px' }} />
            <col style={{ width: '100px' }} />
            <col style={{ width: '100px' }} />
            <col style={{ width: '100px' }} />
            <col style={{ width: '130px' }} />
            <col style={{ width: '50px' }} />
          </colgroup>
          <thead>
            <tr>
              <th className={styles.th_desktop}>Перешли по ссылке</th>
              <th className={styles.th_desktop}>Регистраций</th>
              <th className={styles.th_desktop}>Оплата</th>
              <th className={styles.th_desktop}>Сумма</th>
              <th className={styles.th_desktop}>Комиссия</th>
              <th className={styles.th_desktop}>Выплачено</th>
              <th className={styles.th_desktop}>Вывод</th>
            </tr>
          </thead>
          <tbody className={styles.tbody_desktop}>
            {ships.map((el) => (
              <tr key={el.id}>
                <td>{el.visities}</td>
                <td>{el.registrations}</td>
                <td
                  className={[
                    styles.td_desktop,
                    el.status === 'Оплачено'
                      ? styles.payPaidFor
                      : el.status === 'В обработке'
                      ? styles.inProcessing
                      : styles.notPaid,
                  ].join(' ')}
                >
                  {el.status}
                </td>
                <td>{el.summ}</td>
                <td>{el.commission}</td>
                <td>{el.paid}</td>
                <td>{el.withdrawal}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className={styles.table__mobile}>
          {ships.map((el) => (
            <table className={styles.table_mobile}>
              <colgroup>
                <col style={{ width: '180px' }} />
                <col style={{ width: '10px' }} />
              </colgroup>
              <tbody>
                <tr key={el.id}>
                  <tr>
                    <td className={styles.td_name_mobile}>Перешли по ссылке</td>
                    <td className={styles.td_mobile}>{el.visities}</td>
                  </tr>
                  <tr>
                    <td className={styles.td_name_mobile}>Число регистраций</td>
                    <td className={styles.td_mobile}>{el.registrations}</td>
                  </tr>
                  <tr>
                    <td className={styles.td_name_mobile}>Оплата</td>
                    <td
                      className={
                        (styles.td_mobile,
                        el.status === 'Оплачено'
                          ? styles.payPaidFor
                          : el.status === 'В обработке'
                          ? styles.inProcessing
                          : styles.notPaid)
                      }
                    >
                      {el.status}
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.td_name_mobile}>Сумма</td>
                    <td className={styles.td_mobile}>{el.summ}</td>
                  </tr>
                  <tr>
                    <td className={styles.td_name_mobile}>Комиссия</td>
                    <td className={styles.td_mobile}>{el.commission}</td>
                  </tr>
                  <tr>
                    <td className={styles.td_name_mobile}>Выплачено</td>
                    <td className={styles.td_mobile}>{el.paid}</td>
                  </tr>
                  <tr>
                    <td className={styles.td_name_mobile}>Вывод</td>
                    <td className={styles.td_mobile}>{el.withdrawal}</td>
                  </tr>
                </tr>
              </tbody>
            </table>
          ))}
        </div> */}
        <div className={styles.table__mobile}>
          {ships.map((el) => (
            <table className={styles.table_item_mobile}>
              <colgroup>
                <col style={{ width: '180px' }} />
                <col style={{ width: '10px' }} />
              </colgroup>
              <tbody>
                <tr key={el.id}>
                  <td className={styles.td_name_mobile}>Перешли по ссылке</td>
                  <td className={styles.td_curr_mobile}>{el.visities}</td>
                </tr>
                <tr>
                  <td className={styles.td_name_mobile}>Число регистраций</td>
                  <td className={styles.td_curr_mobile}>{el.registrations}</td>
                </tr>
                <tr>
                  <td className={styles.td_name_mobile}>Оплата</td>
                  <td
                    className={[
                      styles.td_curr_mobile,
                      el.status === 'Оплачено'
                        ? styles.payPaidFor
                        : el.status === 'В обработке'
                        ? styles.inProcessing
                        : styles.notPaid,
                    ].join(' ')}
                  >
                    {el.status}
                  </td>
                </tr>
                <tr>
                  <td className={styles.td_name_mobile}>Сумма</td>
                  <td className={styles.td_curr_mobile}>{el.summ}</td>
                </tr>
                <tr>
                  <td className={styles.td_name_mobile}>Комиссия</td>
                  <td className={styles.td_curr_mobile}>{el.commission}</td>
                </tr>
                <tr>
                  <td className={styles.td_name_mobile}>Выплачено</td>
                  <td className={styles.td_curr_mobile}>{el.paid}</td>
                </tr>
                <tr>
                  <td className={styles.td_name_mobile}>Вывод</td>
                  <td className={styles.td_curr_mobile}>{el.withdrawal}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
        <div>
          <div className={styles.button__mobile}>
            <Button
              type="green"
              text="ЗАПРОСИТЬ ВЫПЛАТУ"
              width={272}
              height={56}
              onClick={() => {
                console.log(
                  'Пока неизвестно, что должно происходить по нажатию кнопки'
                );
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
