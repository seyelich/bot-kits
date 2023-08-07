/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import Button from '../../components/Button/Button';
import ChevronBigIcon from '../../icons/others/ChevronBig';
import styles from './partnership.module.css';
import data from './fakeDatafromApi';

export default function Partnership() {
  const [arrowRotate, setArrowRotate] = useState(false);
  const [statistics, setStatistics] = useState(data);

  const formattedNumber = (numberValue: number): string =>
    `${numberValue.toLocaleString()} Р`;

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

      <div className={styles.statistics}>
        <div className={styles.statistics__header}>
          <h2 className={styles.statistics__title}>Статистика рефералов</h2>
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
                    setStatistics(data);
                  }}
                >
                  Все
                </p>
                <p
                  className={styles.filter__listText}
                  onClick={() => {
                    setArrowRotate(false);
                    setStatistics(
                      data.filter((el) => el.status === 'Оплачено')
                    );
                  }}
                >
                  Оплачены
                </p>
                <p
                  className={styles.filter__listText}
                  onClick={() => {
                    setArrowRotate(false);
                    setStatistics(
                      data.filter((el) => el.status === 'Не оплачено')
                    );
                  }}
                >
                  Не оплачены
                </p>
                <p
                  className={styles.filter__listText}
                  onClick={() => {
                    setArrowRotate(false);
                    setStatistics(
                      data.filter((el) => el.status === 'В обработке')
                    );
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
          <tbody>
            {statistics.map((el) => (
              <tr className={styles.tr_table} key={el.id}>
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
                <td>{formattedNumber(el.summ)}</td>
                <td>{formattedNumber(el.commission)}</td>
                <td>{formattedNumber(el.paid)}</td>
                <td>{formattedNumber(el.withdrawal)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.table__mobile}>
          {statistics.map((el) => (
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
                  <td className={styles.td_curr_mobile}>
                    {formattedNumber(el.summ)}
                  </td>
                </tr>
                <tr>
                  <td className={styles.td_name_mobile}>Комиссия</td>
                  <td className={styles.td_curr_mobile}>
                    {formattedNumber(el.commission)}
                  </td>
                </tr>
                <tr>
                  <td className={styles.td_name_mobile}>Выплачено</td>
                  <td className={styles.td_curr_mobile}>
                    {formattedNumber(el.paid)}
                  </td>
                </tr>
                <tr>
                  <td className={styles.td_name_mobile}>Вывод</td>
                  <td className={styles.td_curr_mobile}>
                    {formattedNumber(el.withdrawal)}
                  </td>
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
