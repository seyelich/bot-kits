import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import IconButton from '../icon-button/IconButton';
import HidePasswordIcon from '../icons/hide-password/hide-password';
import AuthInput from '../input-auth/AuthInput';
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
    <option  className={styles.authForm__phoneOption} key={country.code} value={country.code}>
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
          <AuthInput type="text" placeholder="Имя" width={325} height={60} />
          <AuthInput type="email" placeholder="Email" width={325} height={60}/>
            <div className={styles.authForm__passwordContainer}>
            <AuthInput type={showPassword ? 'text' : 'password'} placeholder="Пароль" width={325} height={60}/>
              <button className={styles.authForm__passwordHide} type="button" onClick={handlePasswordVisibility}>
                <HidePasswordIcon/>
              </button>
            </div>

            <div className={styles.authForm__phoneContainer}>
              <select className={styles.authForm__phoneSelector} value={countryCode} onChange={handleCountryCodeChange}>
                {options}
              </select>
          <AuthInput type="text" placeholder="Телефон" value={phoneNumber} width={325} height={60} onChange={handlePhoneNumberChange}/>

            </div>
          </div>
          <Button type="green" text="СОЗДАТЬ АККАУНТ" width={260} height={64} isRegister={true} />
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
