import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import FacebookIcon from '../../icons/social/facebook';
import GoogleIcon from '../../icons/social/google';
import MailruIcon from '../../icons/social/mailru';
import OdnoklassnikiIcon from '../../icons/social/odnoklassniki';
import TelegramIcon from '../../icons/social/telegram';
import VKIcon from '../../icons/social/vk';
import YandexIcon from '../../icons/social/yandex';
import { Button } from '../Button/Button';
import NavLinkBar from '../nav-link-bar/NavLinkBar';
import styles from './AuthForm.module.css';

const countries: { code: string; name: string }[] = [
  { code: '+375', name: 'Беларусь' },
  { code: '+7', name: 'Россия' },
  { code: '+375', name: 'Неизвестно' },
];

const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState('+375');
  const [phoneNumber, setPhoneNumber] = useState('');
  const options = countries.map((country) => (
    <option key={country.code} value={country.code}>
      {country.code} {country.name}
    </option>
  ));

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleCountryCodeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCountryCode(event.target.value);
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.authForm}>
      <div className={styles.authForm__socialContainer}>
        <p className={styles.authForm__socialContainer__title}>
          Создай аккаунт с помощью
        </p>
        <NavLinkBar/>
        <p className={styles.authForm__socialContainer__footer}>или</p>
      </div>
      <div className={styles.authForm__wrapper}>
        <form className={styles.authForm__form} onSubmit={handleSubmit}>
          <div className={styles.authForm__inputContainer}>
            <input
              className={styles.authForm__defautInput}
              type="text"
              placeholder="Имя"
            />
            <input type="email" placeholder="Email" />
            <div className={styles.authForm__passwordContainer}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Пароль"
              />
              <button type="button" onClick={handlePasswordVisibility}>
                {showPassword ? 'Скрыть' : 'Показать'}
              </button>
            </div>

            <div className={styles.authForm__phoneContainer}>
              <select value={countryCode} onChange={handleCountryCodeChange}>
                {options}
                {/* <option value="+375">+375 (Беларусь)</option>
            <option value="+7">+7 (Россия)</option> */}
              </select>
              <input
                type="text"
                placeholder="Телефон"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </div>
          </div>
          <Button type="green" text="СОЗДАТЬ АККАУНТ" width={260} height={64} />
        </form>

        <div className={styles.authForm__footer}>
          <span className={styles.authForm__footer__text}>
            Уже прошли регистрацию?
          </span>
          <NavLink className={styles.authForm__footer__link} to="#">
            Войти
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
