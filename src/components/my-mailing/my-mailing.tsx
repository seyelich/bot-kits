/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router';

import styles from './index.module.css';

import ChevronBigIcon from '../../ui/icons/others/chevron-big';
import TutorialButton from '../../ui/buttons/tutorial-button/tutorial-button';
import Button from '../../ui/buttons/button/button';
import IconWithPercents from '../icon-with-percents/icon-with-percents';
import data from '../../services/mailings-fake-data';

const MyMailing: FC = () => {
  const navigate = useNavigate();
  const [arrowRotate, setArrowRotate] = useState(false);
  // @todo: replace fake data
  const [mailings, setMailings] = useState(data);
  const [showTutotialButtons, setShowtutorialButtons] = useState(true);

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
                    // @todo: replace fake data
                    setMailings(data);
                  }}
                >
                  Все
                </p>
                <p
                  className={styles.filter__listText}
                  onClick={() => {
                    setArrowRotate(false);
                    // @todo: replace fake data
                    setMailings(data.filter((el) => el.status === 'Запущено'));
                  }}
                >
                  Запущены
                </p>
                <p
                  className={styles.filter__listText}
                  onClick={() => {
                    setArrowRotate(false);
                    // @todo: replace fake data
                    setMailings(data.filter((el) => el.status === 'Отклонено'));
                  }}
                >
                  Отклонены
                </p>
              </div>
            )}
          </div>
        </div>
        <div className={styles.table__block}>
          <table className={styles.table}>
            <thead className={styles.table__header}>
              <tr>
                <th style={{ width: '120px' }}>ID</th>
                <th style={{ width: '140px' }}>Название</th>
                <th style={{ width: '162px' }}>Мессенджер</th>
                <th style={{ width: '182px' }}>Отправлено сообщений</th>
                <th style={{ width: '132px' }}>Конверсия</th>
                <th style={{ width: '122px' }}>Статус запуска</th>
              </tr>
            </thead>
            <tbody>
              {mailings.map((el) => (
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
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.table__mobile}>
          {mailings.map((el, i) => (
            <div className={styles.row} key={i}>
              <div className={styles.row__iconBlock}>
                <IconWithPercents
                  messenger={el.messenger}
                  conversion={el.conversion}
                />
                <div className={styles.row__info}>
                  <div className={styles.row__header}>
                    <p className={styles.row__name}>{el.name}</p>
                    <p className={styles.row__id}>{el.id}</p>
                  </div>
                  <p className={styles.row__messages}>{el.messages}</p>
                </div>
              </div>
              <p
                className={styles.row__status}
                style={{
                  color: el.status === 'Запущено' ? '#00E98F' : '#243CBB',
                }}
              >
                {el.status}
              </p>
            </div>
          ))}
        </div>
        <div>
          <div className={styles.button__mobile}>
            <Button
              type="green"
              text="СОЗДАТЬ РАССЫЛКУ"
              width={272}
              height={56}
              onClick={() =>
                navigate(
                  window.location.pathname === '/mailing'
                    ? '/mailing/start'
                    : '/mailing/add'
                )
              }
            />
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.about__header}>
          <h3 className={styles.about__title}>Как это работает?</h3>
          <div
            onClick={() => setShowtutorialButtons(!showTutotialButtons)}
            className={`${styles.about__icon} ${
              showTutotialButtons && styles.about__icon_rotated
            }`}
          >
            <ChevronBigIcon width={26} height={26} />
          </div>
        </div>
        {showTutotialButtons && (
          <div className={styles.buttons}>
            <TutorialButton
              type="instruction"
              extraClass={styles.buttons__button}
            />
            <TutorialButton type="video" extraClass={styles.buttons__button} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyMailing;
