import React, { FC } from 'react';

import styles from './index.module.css';
import Plus from '../icons/Plus/Plus';
import { BlackPlus } from '../icons/black-plus/BlackPlus';

interface IPlusButton {
  onClick?: VoidFunction;
  disabled?: boolean;
  type: 'blue' | 'green';
}

export const PlusButton: FC<IPlusButton> = ({ onClick, disabled, type }) => {
  return (
    <button
      className={`${styles.button} ${
        type === 'blue' ? styles.button_blue : styles.button_green
      } ${
        disabled
          ? type === 'blue'
            ? styles.button_disabled_blue
            : styles.button_disabled_green
          : ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {type === "blue" ? <Plus color='#fff'/> : <BlackPlus disabled={disabled} />}
    </button>
  );
};
