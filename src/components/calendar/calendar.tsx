import ru from 'date-fns/locale/ru';
import { FC, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getMonth';
import getDate from 'date-fns/getDate';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import addMonths from 'date-fns/addMonths';
import '../../vendor/stylesheets/datepicker.scss';
import styles from './calendar.module.css';
import Arrow from '../../ui/icons/others/arrow';
import { formatDate, months, timeZoneUTC } from '../../utils/calendar';
import InputSelect from '../../ui/inputs/input-select/input-select';
import CustomInput from './custom-inpu';
import useMediaQuery from '../../hooks/use-media-query';

const Calendar: FC = () => {
  registerLocale('ru', ru);
  const [timeZone, setTimeZone] = useState('UTC+3:00');
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [startMonth, setStartMonth] = useState(new Date());
  const [endMonth, setEndMonth] = useState(new Date());
  const [resetDate, setDateReset] = useState(false);
  const matches = useMediaQuery('(max-width: 768px)');
  return (
    <DatePicker
      popperPlacement="bottom-end"
      popperModifiers={
        matches
          ? [
              {
                name: 'offset',
                options: {
                  offset: [15, -300],
                },
              },
            ]
          : [
              {
                name: 'offset',
                options: {
                  offset: [300, -200],
                },
              },
            ]
      }
      customInput={<CustomInput />}
      shouldCloseOnSelect
      locale="ru"
      dateFormat="dd.MM.yyyy"
      includeDateIntervals={[
        { start: startOfMonth(startMonth), end: endOfMonth(endMonth) },
      ]}
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
      }) => (
        <div
          style={{
            margin: 10,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <input
            readOnly
            className={styles.current_date}
            type="text"
            value={
              !resetDate
                ? `${getDate(date) > 9 ? getDate(date) : `0${getDate(date)}`}.${
                    getMonth(date) + 1 > 9
                      ? getMonth(date) + 1
                      : `0${getMonth(date) + 1}`
                  }.${getYear(date)}`
                : `${
                    getDate(new Date()) > 9
                      ? getDate(new Date())
                      : `0${getDate(new Date())}`
                  }.${
                    getMonth(new Date()) + 1 > 9
                      ? getMonth(new Date()) + 1
                      : `0${getMonth(new Date()) + 1}`
                  }.${getYear(new Date())}`
            }
          />
          <div className={styles.wrapper}>
            <div className={styles.container_months_years}>
              <p className={styles.text}>
                {resetDate
                  ? months[getMonth(new Date())]
                  : months[getMonth(date)]}
              </p>
              <p className={styles.text}>
                {resetDate ? getYear(new Date()) : getYear(date)}
              </p>
            </div>
            <div className={styles.text}>
              <span
                className={styles.btn_prev}
                onClick={() => {
                  if (resetDate) {
                    changeMonth(getMonth(new Date()) + 1);
                    changeYear(getYear(new Date()));
                    decreaseMonth();
                    const nextMonth = addMonths(date, 1);
                    const end = endOfMonth(nextMonth);
                    const start = startOfMonth(nextMonth);
                    setEndMonth(end);
                    setStartMonth(start);
                    setDateReset(false);
                  } else {
                    decreaseMonth();
                    const nextMonth = addMonths(date, -1);
                    const end = endOfMonth(nextMonth);
                    const start = startOfMonth(nextMonth);
                    setEndMonth(end);
                    setStartMonth(start);
                  }
                }}
              >
                <Arrow type="common" width={16} height={16} color="lightGrey" />
              </span>
              <span
                className={styles.btn_next}
                onClick={() => {
                  if (resetDate) {
                    changeMonth(getMonth(new Date()) + 1);
                    changeYear(getYear(new Date()));
                    decreaseMonth();
                    const nextMonth = addMonths(date, -1);
                    const end = endOfMonth(nextMonth);
                    const start = startOfMonth(nextMonth);
                    setEndMonth(end);
                    setStartMonth(start);
                    setDateReset(false);
                  } else {
                    increaseMonth();
                    const nextMonth = addMonths(date, 1);
                    const end = endOfMonth(nextMonth);
                    const start = startOfMonth(nextMonth);
                    setEndMonth(end);
                    setStartMonth(start);
                  }
                }}
              >
                <Arrow type="common" width={16} height={16} color="lightGrey" />
              </span>
            </div>
          </div>
          <div className={styles.weeks_container}>
            <ul className={styles.weeks}>
              <li>п</li>
              <li>в</li>
              <li>с</li>
              <li>ч</li>
              <li>п</li>
              <li>в</li>
              <li>с</li>
            </ul>
          </div>
        </div>
      )}
      selected={startDate}
      onChange={(date) => {
        setDateReset(false);
        const dateLocal = formatDate(String(date), timeZone);
        setStartDate(dateLocal);
      }}
    >
      <div className={styles.timeZone}>
        <InputSelect
          inputName="timeZoneUTC"
          options={timeZoneUTC}
          width="144px"
          label="Часовой пояс"
          dropDownHeight="220px"
          placeholder={timeZone}
          labelType="regular"
          setSelectedValue={setTimeZone}
          disabled={false}
          reset={resetDate}
        />
      </div>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          setStartDate(new Date());
          setDateReset(true);
          setTimeZone('UTC+3:00');
        }}
      >
        Очистить
      </button>
    </DatePicker>
  );
};

export default Calendar;
