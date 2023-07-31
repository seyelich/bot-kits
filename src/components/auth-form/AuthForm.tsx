import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styles from './AuthForm.module.css'


const AuthForm = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState('+375');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleCountryCodeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(event.target.value);
  };

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  };

  return (
    <div className={styles.authForm}>
      <div className={styles.authForm__socialContainer}>
        Соцсети
      </div>
      <form className={styles.authForm__form} onSubmit={handleSubmit}>
        <input type="text" placeholder='Имя' />
        <input type="email" placeholder='Email' />
        <div className={styles.passwordContainer}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Пароль"
          />
          <button
            type="button"
            onClick={handlePasswordVisibility}
          >
            {showPassword ? 'Скрыть' : 'Показать'}
          </button>
        </div>

        <div className={styles.phoneContainer}>
          <select
            value={countryCode}
            onChange={handleCountryCodeChange}
          >
            <option value="+375">+375 (Беларусь)</option>
            <option value="+375">+7 (Россия)</option>
          </select>
          <input
            type="text"
            placeholder="Телефон"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
        <button type="submit">Создать аккаунт</button>
      </form>

      <div className={styles.authForm__footer}>
      <span className={styles.authForm__footer__text}>Уже прошли регистрацию?</span>
      <NavLink className={styles.authForm__footer__link} to="#">Войти</NavLink>
      </div>
    </div>
  )
}

export default AuthForm
