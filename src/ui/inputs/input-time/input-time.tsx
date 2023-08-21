import { FC } from 'react';

import styles from './input-time.module.css';

import Arrow from '../../../ui/icons/others/arrow';
import Clock from '../../../ui/icons/others/clock';

interface IInputTimeProps {
  inputName?: string;
  onClick?: () => void;
}

const InputTime: FC<IInputTimeProps> = ({ inputName, onClick }) => (
  <div className={styles.container}>
    <div className={styles.container_input}>
      <div onClick={onClick} className={styles.icon}>
        <span className={styles.calendar_icon}>
          <Clock color="#A6B3C9" />
        </span>
        <p className={styles.date}>Время</p>
      </div>
      <div className={styles.input_wrapper}>
        <input
          name={inputName}
          readOnly
          className={styles.custom_input}
          onClick={onClick}
          value="4:00"
        />
        <span className={styles.arrow}>
          <Arrow width={16} height={16} type="common" color="lightGrey" />
        </span>
      </div>
    </div>
  </div>
);

export default InputTime;
