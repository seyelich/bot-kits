import { useState } from 'react';
import styles from './AddBot.module.css';
import Plus from '../../icons/Plus/Plus';

export default function AddBot() {
  const [onHover, setOnHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const MouseOver = () => setOnHover(true);
  const MouseOut = () => setOnHover(false);
  const addBot = () => {
    setIsClicked(true);
  };
    setIsClicked(true);
  };
  return (
    <div
      className={`${styles.wrapper} ${
        isClicked ? styles.wrapper_clicked : styles.wrapper
      }`}
      onMouseEnter={MouseOver}
      onMouseLeave={MouseOut}
    >
      <span
        className={`${styles.botton} ${
          onHover ? styles.button_hover : styles.button
        }`}
        onClick={addBot}
      >
        <Plus
          color={(isClicked && onHover) || onHover ? '#243cbb' : '#a6b3c9'}
        />
      </span>
      <p
        className={`${styles.text} ${
          onHover ? styles.text_hover : styles.text_default
        }`}
      >
        Добавить бота
      </p>
    </div>
  );
}
