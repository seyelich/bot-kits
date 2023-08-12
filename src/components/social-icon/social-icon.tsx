/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import styles from './index.module.css';

interface ISocialIcon {
  children: React.ReactNode;
  type: 'blue' | 'common' | 'disabled';
  width?: number;
  height?: number;
  color?: string;
  onClick?: VoidFunction;
}

const typeToStyles = {
  blue: styles.icon_blue,
  common: styles.icon_common,
  disabled: styles.icon_disabled,
} as const;

function SocialIcon({
  children,
  type,
  width,
  height,
  color,
  onClick,
}: ISocialIcon) {
  return (
    <div
      className={`${styles.icon} ${typeToStyles[type]}`}
      style={{ width, height, color: type === 'common' ? color : undefined }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

SocialIcon.defaultProps = {
  width: 40,
  height: 40,
  color: 'black',
  onClick: () => {},
};

export default SocialIcon;
