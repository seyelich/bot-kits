import React, { FC } from 'react';

import styles from './index.module.css';
import { Plus } from '../icons/Plus/Plus';

interface IPlusButton {
  onClick?: VoidFunction;
  disabled?: boolean;
}

export const PlusButton: FC<IPlusButton> = ({ onClick, disabled }) => {
  return (
    <button
      className={`${styles.button} ${disabled && styles.button_disabled}`}
      onClick={onClick}
      disabled={disabled}
    >
      <Plus color="#fff" />
    </button>
  );
};
