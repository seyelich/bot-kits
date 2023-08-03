import React, { FC } from 'react';

import styles from './index.module.css';

interface ISocialButton {
  icon: React.ReactNode;
  onClick: (arg: boolean) => void;
  active: boolean;
  text: string;
}

const SocialButton: FC<ISocialButton> = ({ icon, onClick, active, text }) => (
  <button
    type="button"
    onClick={() => onClick(!active)}
    className={
      active ? `${styles.button} ${styles.button_active}` : styles.button
    }
  >
    <div
      className={
        active
          ? `${styles.button__icon} ${styles.button__icon_active}`
          : styles.button__icon
      }
    >
      {icon}
    </div>
    <p
      className={
        active
          ? `${styles.button__text} ${styles.button__text_active}`
          : styles.button__text
      }
    >
      {text}
    </p>
  </button>
);

export default SocialButton;
