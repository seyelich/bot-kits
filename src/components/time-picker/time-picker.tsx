import { TimePicker } from 'react-ios-time-picker';
import { useState } from 'react';
import styles from './time-picker.module.css';
import Clock from '../../icons/others/clock';
import InputTime from '../input-time/input-time';
import '../../vendor/stylesheets/react-ios-time-picker.css';
import Arrow from '../../icons/others/arrow';

export default function TimePickerInput() {
  const [value, setValue] = useState('04:00');

  const onChange = (timeValue: string) => {
    setValue(timeValue);
  };

  return (
    <div className={styles.main}>
      <InputTime inputName="time" />
      <button
        type="button"
        className={styles.btn_left}
        onClick={() => {
          onChange('04.00');
        }}
      >
        {' '}
        <Arrow width={16} height={16} type="common" color="darkGrey" />
      </button>
      <span className={styles.btn_right}>
        {' '}
        <Arrow width={16} height={16} type="common" color="darkGrey" />
      </span>
      <Clock color="#A6B3C9" />

      <TimePicker
        onChange={onChange}
        value={value}
        cellHeight={50}
        saveButtonText="Сохранить"
        cancelButtonText="Очистить"
      />
    </div>
  );
}
