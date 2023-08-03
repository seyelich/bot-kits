import React, { FC } from 'react';

import styles from './index.module.css';
import Button from '../../components/Button/Button';
// import FirstMailing from './ui/first-mailing/FirstMailing';
// import { MyMailing } from './ui/my-mailing/MyMailing';
import CreateMailing from './ui/create-mailing/CreateMailing';

const Mailing: FC = () => (
  <section className={styles.section}>
    <div className={styles.header}>
      <h1 className={styles.title}>Рассылки</h1>
      <Button type="green" text="СОЗДАТЬ РАССЫЛКУ" width={188} height={46} />
    </div>
    {/* <FirstMailing /> */}
    {/* <MyMailing /> */}
    <CreateMailing />
  </section>
);

export default Mailing;
