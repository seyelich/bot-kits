import { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './add-bot.module.css';
import PlusIcon from '../../../ui/icons/others/plus';

export default function AddBot() {
  const [onHover, setOnHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const MouseOver = () => setOnHover(true);
  const MouseOut = () => setOnHover(false);
  const navigate = useNavigate();
  const addBot = () => {
    setIsClicked(true);
    navigate('/add-bot');
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
        <PlusIcon
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
