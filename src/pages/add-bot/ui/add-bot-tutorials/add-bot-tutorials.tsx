import { useState } from 'react';
import styles from './add-bot-tutorials.module.css';
import TutorialButton from '../../../../components/tutorial-button/TutorialButton';
import Arrow24x24 from '../../../../components/icons/Arrow24x24/Arrow24x24';

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
          <Arrow24x24 />
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
