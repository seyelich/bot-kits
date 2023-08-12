import React, { FC } from 'react';

import styles from './index.module.css';
import Plus from '../icons/plus/plus';
import BlackPlus from '../icons/black-plus/black-plus';

interface IPlusButton {
  onClick?: VoidFunction;
  disabled?: boolean;
  type: 'blue' | 'green';
}

const PlusButton: FC<IPlusButton> = ({ onClick, disabled, type }) => (
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
    type="button"
  >
    {type === 'blue' ? (
      <Plus color="#fff" />
    ) : (
      <BlackPlus disabled={disabled} />
    )}
  </button>
);

export default PlusButton;
