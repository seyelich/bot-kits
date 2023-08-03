import React, { FC } from 'react';

import styles from './index.module.css';

interface IAddBlockButton {
  icon: React.ReactNode;
  text: string;
  onClick?: VoidFunction;
  disabled?: boolean;
}

const AddBlockButton: FC<IAddBlockButton> = ({
  icon,
  text,
  onClick,
  disabled,
}) => (
  <button
    className={`${styles.button} ${disabled ? styles.button_disabled : ''}`}
    onClick={onClick}
    disabled={disabled}
    type="button"
  >
    {icon}
    <p style={{ margin: '0' }}>{text}</p>
  </button>
);

export default AddBlockButton;
