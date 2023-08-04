import React, { FC } from 'react';

import styles from './index.module.css';

interface IButton {
  type: 'blue' | 'green' | 'grey';
  onClick?: VoidFunction;
  disabled?: boolean;
  text: string;
  width: number;
  height: number;
  extraClass?: string;
}

const Button: FC<IButton> = ({
  type,
  onClick,
  disabled,
  text,
  width,
  height,
  extraClass,
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
    } ${extraClass} `}
    onClick={onClick}
    type="button"
    style={{
      width,
      height,
      cursor: disabled ? 'not-allowed' : 'pointer',
    }}
    disabled={disabled}
  >
    <p
      style={{
        opacity: disabled && type === 'green' ? '.4' : undefined,
        margin: '0',
      }}
    >
      {text}
    </p>
  </button>
);
export default Button;
