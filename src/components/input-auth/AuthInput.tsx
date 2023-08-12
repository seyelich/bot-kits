import React, { FC } from 'react';
import styles from './AuthInput.module.css';

export interface IAuthInput {
  type: string;
  placeholder: string;
  width: number;
  height: number;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: boolean;
  textError?: string;
}

const AuthInput: FC<IAuthInput> = ({
  type,
  placeholder,
  width,
  height,
  value,
  onChange,
  error,
  textError,
}) => (
  <div className={styles.authInput__container}>
    <input
      className={`${styles.authInput} ${error && styles.authInput_error}`}
      style={{
        width,
        height,
      }}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    <span
      className={`${styles.authInput__necessarily} ${
        error && styles.authInput__necessarily_error
      }`}
    >
      *
    </span>
    <span
      className={`${styles.authInput__textError} ${
        textError && styles.authInput__textError_visible
      }`}
    >
      {textError}
    </span>
  </div>
);

export default AuthInput;
