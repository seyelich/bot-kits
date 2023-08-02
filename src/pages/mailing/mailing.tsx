/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
import React, { FC } from 'react';

import styles from './index.module.css';
import { Button } from '../../components/Button/Button';
import { FirstMailing } from './ui/first-mailing/FirstMailing';
import { MyMailing } from './ui/my-mailing/MyMailing';

export const Mailing: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 className={styles.title}>Рассылки</h1>
        <Button type="green" text="СОЗДАТЬ РАССЫЛКУ" width={188} height={46} />
      </div>
      {/* <FirstMailing /> */}
      <MyMailing />
    </section>
  );
};
