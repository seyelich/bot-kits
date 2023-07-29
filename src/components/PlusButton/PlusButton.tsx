import React, { FC } from 'react';

import styles from './index.module.css';

interface IPlusButton {
  onClick?: VoidFunction;
  disabled?: boolean;
}

export const PlusButton: FC<IPlusButton> = ({ onClick, disabled }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      style={{
        backgroundColor: disabled ? '#ECEFFF' : undefined,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      disabled={disabled}
    >
      ДОБАВИТЬ БОТА
    </button>
  );
};
