/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React, { FC, useState } from 'react';

import styles from './index.module.css';

import ChevronBigIcon from '../../../../icons/others/ChevronBig';
import TutorialButton from '../../../../components/tutorial-button/TutorialButton';

const data = [
  {
    id: 22496346,
    name: '№1',
    messenger: 'Telegram',
    messages: '8 сообщений',
    conversion: '60%',
    status: 'Запущено',
  },
  {
    id: 32284427,
    name: '№2',
    messenger: 'Viber',
    messages: '1 сообщений',
    conversion: '0%',
    status: 'Отклонено',
  },
  {
    id: 65390710,
    name: '№3',
    messenger: 'VK',
    messages: '16 сообщений',
    conversion: '82%',
    status: 'Запущено',
  },
];

export const MyMailing: FC = () => {
  const [arrowRotate, setArrowRotate] = useState(false);
  const [mailings, setMailings] = useState(data);

  return (
    <div className={styles.section}>
      <div className={styles.mailings}>
        <div className={styles.mailing__header}>
          <h2 className={styles.mailing__title}>Мои рассылки</h2>
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
                    setMailings(data);
                  }}
                >
                  Все
                </p>
                <p
                  className={styles.filter__listText}
                  onClick={() => {
                    setArrowRotate(false);
                    setMailings(data.filter((el) => el.status === 'Запущено'));
                  }}
                >
                  Запущены
                </p>
                <p
                  className={styles.filter__listText}
                  onClick={() => {
                    setArrowRotate(false);
                    setMailings(data.filter((el) => el.status === 'Отклонено'));
                  }}
                >
                  Отклонены
                </p>
              </div>
            )}
          </div>
        </div>
        <table className={styles.table}>
          <tr className={styles.table__header}>
            <th style={{ width: '120px' }}>ID</th>
            <th style={{ width: '140px' }}>Название</th>
            <th style={{ width: '162px' }}>Мессенджер</th>
            <th style={{ width: '182px' }}>Отправлено сообщений</th>
            <th style={{ width: '132px' }}>Конверсия</th>
            <th style={{ width: '122px' }}>Статус запуска</th>
          </tr>
          {mailings.map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.messenger}</td>
                <td>{el.messages}</td>
                <td>{el.conversion}</td>
                <td
                  style={{
                    fontWeight: 600,
                    color: el.status === 'Запущено' ? '#00E98F' : '#FF5555',
                  }}
                >
                  {el.status}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className={styles.about}>
        <h3 className={styles.about__title}>Как это работает?</h3>
        <div className={styles.buttons}>
          <TutorialButton type="instruction" />
          <TutorialButton type="video" />
        </div>
      </div>
    </div>
  );
};
