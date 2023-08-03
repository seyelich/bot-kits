import React, { FC } from 'react';

import styles from './index.module.css';

interface ISocialButton {
  icon: React.ReactNode;
  onClick: VoidFunction;
  active: boolean;
  text: string;
}

const SocialButton: FC<ISocialButton> = ({ icon, onClick, active, text }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={!active}
    className={styles.button}
  >
    <div className={styles.button__icon}>{icon}</div>
    <p className={styles.button__text}>{text}</p>
  </button>
);

export default SocialButton;
