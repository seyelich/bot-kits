import React from 'react';

import styles from './index.module.css';

interface ISocialIcon {
  children: React.ReactNode;
  type: 'blue' | 'common' | 'disabled';
}

const typeToStyles = {
  blue: styles.icon_blue,
  common: styles.icon_common,
  disabled: styles.icon_disabled,
} as const;

function SocialIcon({ children, type }: ISocialIcon) {
  return (
    <div className={`${styles.icon} ${typeToStyles[type]}`}>{children}</div>
  );
}

export default SocialIcon;
