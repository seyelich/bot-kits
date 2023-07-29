import React, { FC } from 'react';

import styles from './index.module.css';

interface IIconButton {
  onClick?: VoidFunction;
  disabled?: boolean;
  width: number;
  height: number;
  icon: React.ReactNode;
}

export const IconButton: FC<IIconButton> = ({
  onClick,
  disabled,
  width,
  height,
  icon,
}) => {
  return (
    <button
      className={`${styles.button} ${disabled && styles.button_disabled}`}
      onClick={onClick}
      disabled={disabled}
      style={{ width, height }}
    >
      {icon}
    </button>
  );
};
