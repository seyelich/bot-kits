import React, { FC } from 'react';
import { Outlet, useNavigate } from 'react-router';

import styles from './index.module.css';
import Button from '../../components/button/button';

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
            extraClass={styles.button__dekstop}
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
      {window.location.pathname === '/mailing' ? (
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
      ) : null}
    </section>
  );
};

export default Mailing;
