import React, { FC, useState } from 'react';
import Button from '../Button/Button';
import HidePasswordIcon from '../icons/hide-password/hide-password';
import AuthInput from '../input-auth/AuthInput';
import NavLinkBar from '../nav-link-bar/NavLinkBar';
import styles from './RegisterForm.module.css';
import SelectCodeNumber from '../select-code-number/SelectCodeNumber';
import { items } from '../../utils/itemsForRegister';
import robot from '../../images/registerRobot.png';

interface RegisterFormProps {
  logIn: ()=>void;
}

const RegisterForm: FC<RegisterFormProps> = ({logIn}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.registerForm}>
      <div className={styles.registerForm__socialContainer}>
        <p className={styles.registerForm__socialContainer__title}>
          Создай аккаунт с помощью
        </p>
        <NavLinkBar />
        <p className={styles.registerForm__socialContainer__footerText}>или</p>
      </div>
      <div className={styles.registerForm__wrapper}>
        <form className={styles.registerForm__form} onSubmit={handleSubmit}>
          <div className={styles.registerForm__inputContainer}>
            <AuthInput type="text" placeholder="Имя" width={325} height={60} />
            <AuthInput
              type="email"
              placeholder="E-mail"
              width={325}
              height={60}
              error
              textError='Ошибка'
            />
            <div className={styles.registerForm__passwordContainer}>
              <AuthInput
                type={showPassword ? 'text' : 'password'}
                placeholder="Пароль"
                width={325}
                height={60}
              />
              <button
                className={styles.registerForm__passwordHide}
                type="button"
                onClick={handlePasswordVisibility}
              >
                <HidePasswordIcon />
              </button>
            </div>

            <div className={styles.registerForm__phoneContainer}>
              <SelectCodeNumber items={items} />
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
            isAuth
          />
        </form>

        <div className={styles.registerForm__footer}>
          <span className={styles.registerForm__footer__text}>
            Уже прошли регистрацию?
          </span>
            <span className={styles.registerForm__footer__link} onClick={logIn}>Войти</span>
        </div>
        <img
          className={styles.registerForm__authImage}
          src={robot}
          alt="register-robot"
        />
      </div>
    </div>
  );
};

export default RegisterForm;
