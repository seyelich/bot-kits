import React, { FC } from 'react';

import styles from './index.module.css';
import { AddBotIcon } from '../icons/add-bot/AddBotIcon';

interface IAddBotButton {
  onClick?: VoidFunction;
  disabled?: boolean;
}

export const AddBotButton: FC<IAddBotButton> = ({ onClick, disabled }) => {
  return (
    <button
      className={`${styles.button} ${disabled ? styles.button_disabled : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <AddBotIcon />
      <p style={{ margin: 0 }}>Добавить бота</p>
    </button>
  );
};
