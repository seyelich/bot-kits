/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import styles from './mailing-conditions.module.css';

import MailingForm from '../../components/mailing-form/mailing-form';
import Button from '../../components/Button/Button';
import Widget from '../mailing/ui/widget/widget';

const MailingConditions: FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('Моя рассылка 1');
  const [text, setText] = useState(
    'Привет, {name}. Мы приготовили для тебя кое-что крутое 🔥'
  );

  const [hideSection, setHideSection] = useState(true);

  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 767px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(max-width: 767px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  return (
    <section className={styles.container}>
      <section className={styles.wrapper}>
        <div className={styles.section}>
          <div className={styles.mailing__header}>
            <div className={styles.creation}>
              <div
                className={styles.button_container}
                style={{ marginBottom: '2px' }}
              >
                <div className={styles.firstStep}>
                  <p>{'1  Шаг  >'}</p>
                  <p>Создание рассылки</p>
                </div>
                <div className={styles.firstStep}>
                  <p>{'2  Шаг  >'}</p>
                  <p>Условия рассылки</p>
                </div>
              </div>
              <h2 className={styles.mailing__title}>Моя рассылка 1</h2>
              <MailingForm />
            </div>
          </div>
          <div className={styles.navigation}>
            <button
              type="button"
              className={styles.navigation__exit}
              onClick={() => window.history.back()}
            >
              НАЗАД
            </button>
            <Button
              type="green"
              text="ОТПРАВИТЬ"
              width={matches ? 130 : 188}
              height={matches ? 48 : 65}
              onClick={() => navigate('/mailing/conditions')}
            />
          </div>
        </div>
        <Widget
          name={name}
          text={text}
          hideSection={hideSection}
          setHideSection={setHideSection}
        />
      </section>
    </section>
  );
};

export default MailingConditions;
