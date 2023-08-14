import React, { FC } from 'react';

import styles from './index.module.css';

interface IIconButton {
  onClick?: VoidFunction;
  disabled?: boolean;
  width: number;
  height: number;
  icon: React.ReactNode;
  extraClass?: string;
}
const IconButton: FC<IIconButton> = ({
  onClick,
  disabled,
  width,
  height,
  icon,
  extraClass,
}) => (
  <button
    className={`${styles.button} ${
      disabled && styles.button_disabled
    } ${extraClass}`}
    onClick={onClick}
    disabled={disabled}
    style={{ width, height }}
    type="button"
  >
    {icon}
  </button>
);

export default IconButton;
