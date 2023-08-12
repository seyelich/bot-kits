/* eslint-disable no-unneeded-ternary */
import React, { FC } from 'react';

import styles from './index.module.css';

import TutorialIcon from '../icons/tutorial-video-button/tutorial-icon';
import { TutorialVideoCircleIcon } from '../icons/tutorial-video-button/circle';
import TutorialVideoEllipseIcon from '../icons/tutorial-video-button/ellipse';
import VideoIcon from '../icons/tutorial-video-button/video';

interface ITutorialButton {
  onClick?: VoidFunction;
  disabled?: boolean;
  type: 'instruction' | 'video';
  extraClass?: string;
}

const TutorialButton: FC<ITutorialButton> = ({
  onClick,
  disabled,
  type,
  extraClass,
}) => (
  <button
    className={`${styles.button} ${disabled ? styles.button_disabled : ''} ${
      extraClass ? extraClass : ''
    }`}
    onClick={onClick}
    disabled={disabled}
    type="button"
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

export default TutorialButton;
