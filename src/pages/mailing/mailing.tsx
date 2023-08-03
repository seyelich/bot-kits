import React, { FC } from 'react';
import { Outlet, useNavigate } from 'react-router';

import styles from './index.module.css';
import Button from '../../components/Button/Button';
// import FirstMailing from './ui/first-mailing/FirstMailing';
// import { MyMailing } from './ui/my-mailing/MyMailing';
// import CreateMailing from './ui/create-mailing/CreateMailing';

const Mailing: FC = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 className={styles.title}>Рассылки</h1>
        {window.location.pathname === '/mailing' ||
        window.location.pathname === '/mailing/start' ? (
          <Button
            type="green"
            text="СОЗДАТЬ РАССЫЛКУ"
            width={188}
            height={46}
            onClick={() =>
              navigate(
                window.location.pathname === '/mailing'
                  ? '/mailing/start'
                  : '/mailing/add'
              )
            }
          />
        ) : null}
      </div>
      <Outlet />
    </section>
  );
};

export default Mailing;
