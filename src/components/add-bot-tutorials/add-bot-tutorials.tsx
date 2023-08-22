import { useState } from 'react';
import styles from './add-bot-tutorials.module.css';
import TutorialButton from '../../ui/buttons/tutorial-button/tutorial-button';
import Arrow from '../../ui/icons/others/arrow';

export default function AddBotTutorials() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className={styles.tutorContainer}>
      <p className={styles.tutorPar}>
        Как это работает?
        <button
          onClick={() => setIsActive(!isActive)}
          className={`${styles.arrowBtn} ${isActive && styles.arrowBtn_active}`}
          type="button"
        >
          <Arrow width={24} height={24} type="common" color="lightGrey" />
        </button>
      </p>
      {isActive && (
        <div className={styles.buttons}>
          <TutorialButton type="instruction" />
          <TutorialButton type="video" />
        </div>
      )}
    </div>
  );
}
