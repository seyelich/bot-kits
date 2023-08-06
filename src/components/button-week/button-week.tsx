import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './button-week.module.css';
import CheckIcon from '../../icons/others/Check';

interface IButtonWeek {
  week: string;
  setWeekChosen: Dispatch<SetStateAction<string | undefined>>;
}

const ButtonWeek: FC<IButtonWeek> = ({ week, setWeekChosen }) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const handleClick = () => {
    setIsActive(!isActive);
    console.log(ref?.current?.innerText);
    setWeekChosen(ref?.current?.innerText);
  };

  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 767px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(max-width: 767px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  return (
    <div className={styles.wrapper}>
      <button
        ref={ref}
        type="button"
        key={week}
        className={!isActive ? styles.weekdays_btn : styles.weekdays_btn_active}
        onClick={handleClick}
      >
        {week}
      </button>
      {matches && isActive && (
        <div className={styles.icon}>
          <CheckIcon color="#243CBB" width={16} height={16} />
        </div>
      )}
    </div>
  );
};

export default ButtonWeek;
