import React, { FC } from 'react';
import Button from '../button/button';
import AuthInput from '../input-auth/AuthInput';
import styles from './ForgotPassForm.module.css';

export interface ForgotPassFormProps {
  handleForgotPass: () => void;
  windowWidth: number;
}

const ForgotPassForm: FC<ForgotPassFormProps> = ({
  handleForgotPass,
  windowWidth,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleForgotPass();
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
        <Button
          type="green"
          text="сбросить пароль"
          width={windowWidth <= 730 ? 320 : 260}
          height={64}
          isAuth
          buttonHtmlType="submit"
        />
      </form>
      <div className={styles.forgotPassForm__footer}>
        <div className={styles.forgotPassForm__authImage} />
      </div>
    </div>
  );
};

export default ForgotPassForm;
