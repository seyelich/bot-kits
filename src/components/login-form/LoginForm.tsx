import React from 'react';
import AuthInput from '../input-auth/AuthInput';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.loginForm}>
      <form className={styles.loginForm__form} onSubmit={handleSubmit}>
      <AuthInput type="email" placeholder="Email" width={570} height={60} />
      <AuthInput type="password" placeholder="Пароль" width={570} height={60} />
      <nav className={styles.loginForm__form__menu}>
        <span className={styles.loginForm__form__menuItems}>Забыли пароль?</span>
        <span className={styles.loginForm__form__menuItems}>Регистрация</span>
      </nav>
      </form>
    </div>
  );
};

export default LoginForm;
