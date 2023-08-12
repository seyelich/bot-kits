import React, { FC } from 'react';

import styles from './index.module.css';
import AddBotIcon from '../icons/add-bot/add-bot-icon';

interface IAddBotButton {
  onClick?: VoidFunction;
  disabled?: boolean;
}

const AddBotButton: FC<IAddBotButton> = ({ onClick, disabled }) => (
  <button
    className={`${styles.button} ${disabled ? styles.button_disabled : ''}`}
    onClick={onClick}
    disabled={disabled}
    type="button"
  >
    <AddBotIcon />
    <p style={{ margin: 0 }}>Добавить бота</p>
  </button>
);

export default AddBotButton;
