/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import Button from '../../components/Button/Button';
import ChevronBigIcon from '../../icons/others/ChevronBig';
import styles from './partnership.module.css';
import { fakeDataPayments, fakeDataStats } from './fakeDatafromApi';
import LinkWithCopyButton from '../../components/link-with-copy-btn/link-with-copy-btn';
import { IDataStatistics } from './parthnership-types';

export default function Partnership() {
  const [openFilter, setOpenFilter] = useState(false);
  const [openSlider, setOpenSlider] = useState(false);
  const [statistics, setStatistics] = useState(fakeDataStats);
  const [filtredStat, setFiltredStat] = useState(statistics);
  const [payments] = useState(fakeDataPayments);
  const [refLink] = useState('botkits.ru/?=12345');

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

      <LinkWithCopyButton
        className={styles.link_with_copy_button}
        link={refLink}
      />

      <div className={styles.statistics}>
        <div className={styles.container__header}>
          <h2 className={styles.container__title}>Статистика рефералов</h2>
          <div className={styles.filter}>
            <p className={styles.filter__text}>Все</p>
            <div
              className={`${styles.filter__icon} ${
                openFilter ? styles.filter__icon_rotated : ''
              }`}
              onClick={() => setOpenFilter(!openFilter)}
            >
              <ChevronBigIcon color="#A6B3C9" width={26} height={26} />
            </div>

            {openFilter && (
              <div className={styles.filter__list}>
                <p
                  className={styles.filter__listText}
                  onClick={() => {
                    setOpenFilter(false);
                    setFiltredStat(statistics);
                  }}
                >
                  Все
                </p>
                <p
                  className={styles.filter__listText}
                  onClick={() => {
                    setOpenFilter(false);
                    setFiltredStat(statistics.filter((el) => el.status === 'Оплачено'))
                  }}
                >
                  Оплачены
                </p>
                <p
                  className={styles.filter__listText}
                  onClick={() => {
                    setOpenFilter(false);
                    setFiltredStat(statistics.filter((el) => el.status === 'Не оплачено'))
                  }}
                >
                  Не оплачены
                </p>
                <p
                  className={styles.filter__listText}
                  onClick={() => {
                    setOpenFilter(false);
                    setFiltredStat(
                      statistics.filter((el) => el.status === 'В обработке')
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
            {filtredStat.map((el) => (
              <tr className={styles.tr_table} key={el.id}>
                <td className={styles.td_desktop}>{el.visities}</td>
                <td className={styles.td_desktop}>{el.registrations}</td>
                <td
                  className={[
                    styles.td_desktop_weight,
                    el.status === 'Оплачено'
                      ? styles.payPaidFor
                      : el.status === 'В обработке'
                      ? styles.inProcessing
                      : styles.notPaid,
                  ].join(' ')}
                >
                  {el.status}
                </td>
                <td className={styles.td_desktop}>
                  {formattedNumber(el.summ)}
                </td>
                <td className={styles.td_desktop}>
                  {formattedNumber(el.commission)}
                </td>
                <td className={styles.td_desktop}>
                  {formattedNumber(el.paid)}
                </td>
                <td className={styles.td_desktop}>
                  {formattedNumber(el.withdrawal)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.table__mobile}>
          {filtredStat.map((el) => (
            <table className={styles.table_item_mobile} key={el.id}>
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

      <div
        className={
          openSlider
            ? styles.payments
            : `${styles.payments} ${styles.payments_close}`
        }
      >
        <div className={styles.container__header}>
          <h2 className={styles.container__title}>Выплаты</h2>
          <div className={styles.slider}>
            <div
              className={`${styles.filter__icon} ${
                openSlider ? styles.filter__icon_rotated : ''
              }`}
              onClick={() => setOpenSlider(!openSlider)}
            >
              <ChevronBigIcon color="#A6B3C9" width={26} height={26} />
            </div>
          </div>
        </div>

        {openSlider ? (
          <table className={styles.table_desktop}>
            <colgroup>
              <col style={{ width: '20%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '15%' }} />
              <col style={{ width: '10%' }} />
            </colgroup>
            <thead>
              <tr>
                <th className={styles.th_desktop}>Дата запроса</th>
                <th className={styles.th_desktop}>Дата выплаты</th>
                <th className={styles.th_desktop}>Акт</th>
                <th className={styles.th_desktop}>Статус</th>
                <th className={styles.th_desktop}>Сумма выплаты</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((el) => (
                <tr className={styles.tr_table} key={el.id}>
                  <td className={styles.td_desktop_weight_weight}>
                    {el.date_request}
                  </td>
                  <td className={styles.td_desktop}>{el.date_payment}</td>
                  <td className={styles.td_desktop}>{el.act}</td>
                  <td
                    className={[
                      styles.td_desktop_weight,
                      el.status === 'Выплачено'
                        ? styles.payPaidFor
                        : styles.inProcessing,
                    ].join(' ')}
                  >
                    {el.status}
                  </td>
                  <td className={styles.td_desktop}>
                    {formattedNumber(el.summ)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}

        <div className={styles.table__mobile}>
          {openSlider &&
            payments.map((el) => (
              <table className={styles.table_item_mobile} key={el.id}>
                <colgroup>
                  <col style={{ width: '180px' }} />
                  <col style={{ width: '10px' }} />
                </colgroup>
                <tbody>
                  <tr key={el.id}>
                    <td className={styles.td_name_mobile}>Дата запроса</td>
                    <td className={styles.td_curr_mobile}>{el.date_request}</td>
                  </tr>
                  <tr>
                    <td className={styles.td_name_mobile}>Дата выплаты</td>
                    <td className={styles.td_curr_mobile}>{el.date_payment}</td>
                  </tr>
                  <tr>
                    <td className={styles.td_name_mobile}>Статус</td>
                    <td
                      className={[
                        styles.td_curr_mobile,
                        el.status === 'Выплачено'
                          ? styles.payPaidFor
                          : styles.inProcessing,
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
                    <td className={styles.td_name_mobile}>Акт</td>
                    <td className={styles.td_curr_mobile}>{el.act}</td>
                  </tr>
                </tbody>
              </table>
            ))}
        </div>
      </div>
    </section>
  );
}
