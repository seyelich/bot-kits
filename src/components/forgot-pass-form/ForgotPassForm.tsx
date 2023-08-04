import React, { FC } from 'react';
import Button from '../Button/Button';
import AuthInput from '../input-auth/AuthInput';
import robot from "../../images/forgotPassRobot.png";
import styles from './ForgotPassForm.module.css';

const ForgotPassForm: FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.forgotPassForm}>
      <form className={styles.forgotPassForm__form} onSubmit={handleSubmit}>
      <p className={styles.forgotPassForm__formTitle}>Введи свой e-mail:</p>
        <div className={styles.forgotPassForm__formContainer}>
          <AuthInput
            type="email"
            placeholder="E-mail"
            width={570}
            height={60}
          />
        </div>
        <Button type="green" text="сбросить пароль" width={260} height={64} isAuth />
      </form>
      <div className={styles.forgotPassForm__footer}>
      <img
          className={styles.forgotPassForm__authImage}
          src={robot}
          alt="forgot-robot"
        />
      </div>
    </div>
  );
};

export default ForgotPassForm;
