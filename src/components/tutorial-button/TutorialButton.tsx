import React, { FC } from 'react';

import styles from './index.module.css';

import { TutorialIcon } from '../icons/tutorial-video-button/TutorialIcon';
import { TutorialVideoCircleIcon } from '../icons/tutorial-video-button/Circle';
import { TutorialVideoEllipseIcon } from '../icons/tutorial-video-button/Ellipse';
import { VideoIcon } from '../icons/tutorial-video-button/Video';

interface ITutorialButton {
  onClick?: VoidFunction;
  disabled?: boolean;
  type: 'instruction' | 'video';
}

export const TutorialButton: FC<ITutorialButton> = ({
  onClick,
  disabled,
  type,
}) => (
  <button
    className={`${styles.button} ${disabled ? styles.button_disabled : ''}`}
    onClick={onClick}
    disabled={disabled}
  >
    <div className={styles.icon}>
      <TutorialVideoCircleIcon className={styles.circle} />
      <TutorialVideoEllipseIcon className={styles.ellipse} />
      {type === 'instruction' ? (
        <TutorialIcon className={styles.main__icon} />
      ) : (
        <VideoIcon className={styles.main__icon} />
      )}
    </div>
    <p className={`${styles.text} ${disabled ? styles.text_disabled : ''}`}>
      {type === 'instruction' ? 'Пошаговая инструкция' : 'Видео'}
    </p>
  </button>
);
