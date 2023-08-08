/* eslint-disable no-unneeded-ternary */
import React, { FC } from 'react';

import styles from './index.module.css';

interface IButton {
  type: 'blue' | 'green' | 'grey';
  onClick?: VoidFunction;
  disabled?: boolean;
  text?: string;
  fontFamily?: string;
  fontWeight?: number;
  width: number;
  height: number;
  extraClass?: string;
  isAuth?: boolean;
  children?: React.ReactNode;
}

const Button: FC<IButton> = ({
  type,
  onClick,
  disabled,
  text,
  width,
  height,
  extraClass,
  isAuth,
  children,
  fontFamily,
  fontWeight,
}) => (
  <button
    className={`${styles.button} ${
      type === 'blue'
        ? `${styles.button_blue} ${disabled ? styles.button_blue_disabled : ''}`
        : type === 'grey'
        ? `${styles.button_grey} ${disabled ? styles.button_grey_disabled : ''}`
        : `${styles.button_green} ${
            disabled ? styles.button_green_disabled : ''
          }`
    } ${isAuth && `${styles.regiser_button}`} ${extraClass}`}
    onClick={onClick}
    type="button"
    style={{
      width,
      height,
      cursor: disabled ? 'not-allowed' : 'pointer',
    }}
    disabled={disabled}
  >
    {children ? (
      children
    ) : (
      <p
        style={{
          opacity: disabled && type === 'green' ? '.4' : undefined,
          margin: '0',
          fontFamily: fontFamily ? fontFamily : "'Roboto', sans-serif",
          fontWeight: fontWeight ? fontWeight : 600,
        }}
      >
        {text}
      </p>
    )}
  </button>
);
export default Button;
