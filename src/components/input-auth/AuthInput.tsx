import React, { FC } from 'react';
import styles from './AuthInput.module.css';

interface IAuthInput {
  type: string;
  placeholder: string;
  width: number;
  height: number;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  marginRight?: number;
}

const AuthInput: FC<IAuthInput> = ({
  type,
  placeholder,
  width,
  height,
  value,
  onChange,
  marginRight
}) => {
  return (
    <div className={styles.authInput__container}>
      <input
        className={styles.authInput}
        style={{
          width,
          height,
          marginRight,
        }}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span className={styles.authInput__necessarily}>*</span>
    </div>
  );
};

export default AuthInput;
