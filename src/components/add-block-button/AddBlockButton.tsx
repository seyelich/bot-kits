import React, { FC } from 'react';

import styles from './index.module.css';

interface IAddBlockButton {
  icon: React.ReactNode;
  text: string;
  onClick?: VoidFunction;
  disabled?: boolean;
}

export const AddBlockButton: FC<IAddBlockButton> = ({
  icon,
  text,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={`${styles.button} ${disabled ? styles.button_disabled : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      <p style={{ margin: '0' }}>{text}</p>
    </button>
  );
};
