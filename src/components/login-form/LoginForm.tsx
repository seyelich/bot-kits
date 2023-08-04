import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import AuthInput from '../input-auth/AuthInput';
import NavLinkBar from '../nav-link-bar/NavLinkBar';
import styles from './LoginForm.module.css';

const LoginForm = () => {


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.authForm}>
      <div className={styles.authForm__socialContainer}>
        <p className={styles.authForm__socialContainer__title}>
          Вход
        </p>
        <NavLinkBar />
        <p className={styles.authForm__socialContainer__footer}>или</p>
      </div>
      <div className={styles.authForm__wrapper}>
        <form className={styles.authForm__form} onSubmit={handleSubmit}>
          <div className={styles.authForm__inputContainer}>
            <AuthInput type="text" placeholder="Имя" width={325} height={60} />
            <AuthInput
              type="email"
              placeholder="Email"
              width={325}
              height={60}
            />
            <div className={styles.authForm__passwordContainer}>
              <AuthInput
                type='password'
                placeholder="Пароль"
                width={325}
                height={60}
              />

            </div>

            <div className={styles.authForm__phoneContainer}>
              <AuthInput
                type="text"
                placeholder="Телефон"
                width={200}
                height={60}
              />
            </div>
          </div>
          <Button
            type="green"
            text="создать аккаунт"
            width={260}
            height={64}
            isRegister
          />
        </form>

        <div className={styles.authForm__footer}>
          <span className={styles.authForm__footer__text}>
            Уже прошли регистрацию?
          </span>
          <NavLink to="#">
            <span className={styles.authForm__footer__link}>Войти</span>
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default LoginForm;
