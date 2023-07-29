import React, { FC } from 'react';

import styles from './index.module.css';

interface IAddBotButton {
  type: 'blue' | 'green';
  onClick?: VoidFunction;
  disabled?: boolean;
}

export const AddBotButton: FC<IAddBotButton> = ({
  type,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={`${styles.button} ${
        type === 'blue' ? styles.button_blue : styles.button_green
      } `}
      onClick={onClick}
      style={{
        backgroundColor: disabled
          ? type === 'blue'
            ? '#ECEFFF'
            : '#85FFD0'
          : undefined,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      disabled={disabled}
    >
      <p style={{ opacity: disabled && type === 'green' ? '.4' : undefined }}>
        ДОБАВИТЬ БОТА
      </p>
    </button>
  );
};
