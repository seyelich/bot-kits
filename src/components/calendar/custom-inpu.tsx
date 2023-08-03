import { forwardRef } from 'react';
import Arrow from '../../icons/others/arrow';
import styles from './calendar.module.css';
import CalendarIcon from '../../icons/others/calendarIcon';

const CustomInput = forwardRef<
  unknown,
  { value?: string; onClick?: VoidFunction }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
>(({ value, onClick }, ref) => (
  <div className={styles.container_input}>
    <div onClick={onClick} className={styles.icon}>
      <span className={styles.calendar_icon}>
        <CalendarIcon />
      </span>
      <p className={styles.date}>Дата</p>
    </div>
    <div className={styles.input_wrapper}>
      <input
        readOnly
        className={styles.custom_input}
        onClick={onClick}
        value={value}
      />
      <span className={styles.arrow}>
        <Arrow width={16} height={16} type="common" color="darkGrey" />
      </span>
    </div>
  </div>
));

export default CustomInput;
