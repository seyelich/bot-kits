/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import styles from './mailing-form.module.css';
import InputSelect from '../../ui/inputs/input-select/input-select';
import Calendar from '../calendar/calendar';
import TimePickerInput from '../time-picker/time-picker';

import InputTextMailingPage from '../../ui/inputs/text-input-mailing-page/text-input-mailing-page';
import ButtonWeek from '../../ui/buttons/button-week/button-week';
import InputSlider from '../../ui/inputs/input-slider/input-slider';
import ButtonMailing from '../../ui/buttons/button-mailing/button-mailing';
import { days, weekDays, months } from '../../utils/calendar';
import useMediaQuery from '../../hooks/use-media-query';

const timeOptions = ['Сейчас', 'Дата/Время'];
const repeatOptions = [
  'Без повтора',
  'Каждый день',
  'Каждую неделю',
  'Каждый месяц',
  'Каждый год',
  'Свой вариант',
];
const repeatFrequency = ['По дням', 'По неделям', 'По месяцам', 'По годам'];
const weeks = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
export default function MailingForm() {
  const [time, setTime] = useState('Сейчас');
  const [repeat, setRepeat] = useState('Без повтора');
  const [frequency, setFrequency] = useState('По дням');
  const [inputHidden, setInputHidden] = useState(false);
  const [weekChosen, setWeekChosen] = useState<string | undefined>('');
  const [dateOfMonth, setDateOfMonth] = useState(false);
  const [dayOfMonth, setDayOfMonth] = useState(false);
  const [daysOfWeek, setDaysOfWeek] = useState('Понедельник');
  const [monthOfYear, setMonthOfYear] = useState(false);
  const [date, setDate] = useState<string | undefined>('');
  const [day, setDay] = useState<string | undefined>('');
  const [month, setMonth] = useState<string | undefined>('');
  const matches = useMediaQuery('(max-width: 768px)');

  return (
    <div className={styles.wrapper}>
      <InputSelect
        label="Отправить"
        labelType="bold"
        placeholder="Сейчас"
        width={matches ? '169px' : '264px'}
        disabled={false}
        options={timeOptions}
        setSelectedValue={setTime}
        dropDownHeight="94px"
      />
      {time === 'Дата/Время' && (
        <div className={styles.container_gap_small}>
          <Calendar /> <TimePickerInput />
        </div>
      )}
      <InputSelect
        label="Повторять"
        labelType="bold"
        placeholder="Без повтора"
        width={matches ? '169px' : '264px'}
        disabled={false}
        options={repeatOptions}
        setSelectedValue={setRepeat}
        dropDownHeight="261px"
        dropDownWidth="272px"
      />
      {repeat === 'Свой вариант' && frequency === 'По дням' && (
        <div className={styles.container_gap_option}>
          <InputSelect
            label="Настроить"
            labelType="regular"
            placeholder="По дням"
            width={matches ? '169px' : '264px'}
            disabled={false}
            options={repeatFrequency}
            setSelectedValue={setFrequency}
            dropDownHeight="179px"
          />
          <div className={styles.container}>
            <InputTextMailingPage
              placeholder="День"
              width="174px"
              disabled={false}
              label="Каждый"
              labelType="regular"
            />
            <div
              className={
                !inputHidden ? styles.custom_value : styles.custom_value_hidden
              }
            >
              <InputTextMailingPage
                placeholder="Введите значение"
                width="174px"
                disabled={false}
              />
              {!matches && (
                <button
                  type="button"
                  className={styles.button}
                  onClick={() => setInputHidden(true)}
                >
                  Скрыть
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {repeat === 'Свой вариант' && frequency === 'По неделям' && (
        <div className={styles.container_gap_option}>
          <InputSelect
            label="Настроить"
            labelType="regular"
            placeholder="По неделям"
            width="174px"
            disabled={false}
            options={repeatFrequency}
            setSelectedValue={setFrequency}
            dropDownHeight="179px"
          />
          <div className={styles.container}>
            <InputTextMailingPage
              placeholder="Неделю"
              width="174px"
              disabled={false}
              label="Каждую"
              labelType="regular"
            />
            <div
              className={
                !inputHidden ? styles.custom_value : styles.custom_value_hidden
              }
            >
              <InputTextMailingPage
                placeholder="Введите значение"
                width="174px"
                disabled={false}
              />
              {!matches && (
                <button
                  type="button"
                  className={styles.button}
                  onClick={() => setInputHidden(true)}
                >
                  Скрыть
                </button>
              )}
              {!matches ? (
                <div className={styles.weekdays}>
                  {weeks.map((week) => (
                    <ButtonWeek
                      week={week}
                      key={week}
                      setWeekChosen={setWeekChosen}
                    />
                  ))}
                </div>
              ) : (
                <div className={styles.weekdays}>
                  {weekDays.map((week) => (
                    <ButtonWeek
                      week={week}
                      key={week}
                      setWeekChosen={setWeekChosen}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {repeat === 'Свой вариант' && frequency === 'По месяцам' && (
        <div className={styles.container_gap_option}>
          <InputSelect
            label="Настроить"
            labelType="regular"
            placeholder="По месяцам"
            width="174px"
            disabled={false}
            options={repeatFrequency}
            setSelectedValue={setFrequency}
            dropDownHeight="179px"
          />
          <div className={styles.container}>
            <InputTextMailingPage
              placeholder="Месяц"
              width="174px"
              disabled={false}
              label="Каждый"
              labelType="regular"
            />
            <div
              className={
                !inputHidden ? styles.custom_value : styles.custom_value_hidden
              }
            >
              <InputTextMailingPage
                placeholder="Введите значение"
                width="174px"
                disabled={false}
              />
              {!matches && (
                <button
                  type="button"
                  className={styles.button}
                  onClick={() => setInputHidden(true)}
                >
                  Скрыть
                </button>
              )}
            </div>

            <div
              className={`${styles.wrapper_pos_relative} ${styles.container_gap_small}`}
            >
              <ButtonMailing
                text="Число месяца"
                width={matches ? '272px' : '367px'}
                setSelected={setDateOfMonth}
              />
              {dateOfMonth && (
                <div className={styles.container_flex}>
                  <p className={styles.label}>
                    {!matches ? 'Выберите число отправки' : 'Число отпр.'}
                  </p>
                  <InputSlider
                    options={days}
                    setSelected={setDate}
                    width={matches ? '169px' : '174px'}
                    slideWidth={matches ? '169px' : '174px'}
                  />
                </div>
              )}
              <ButtonMailing
                text="День месяца"
                width={matches ? '272px' : '367px'}
                setSelected={setDayOfMonth}
              />
              {dayOfMonth && (
                <div className={styles.container_flex}>
                  <InputSlider
                    options={days}
                    setSelected={setDay}
                    width={matches ? '80px' : '174px'}
                    slideWidth={matches ? '80px' : '174px'}
                  />
                  <InputSelect
                    width="174px"
                    placeholder="Понедельник"
                    disabled={false}
                    options={weekDays}
                    setSelectedValue={setDaysOfWeek}
                    dropDownHeight="302px"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {repeat === 'Свой вариант' && frequency === 'По годам' && (
        <div className={styles.container_gap_option}>
          <InputSelect
            label="Настроить"
            labelType="regular"
            placeholder="По годам"
            width="174px"
            disabled={false}
            options={repeatFrequency}
            setSelectedValue={setFrequency}
            dropDownHeight="179px"
          />
          <div className={styles.container}>
            <InputTextMailingPage
              placeholder="Год"
              width="174px"
              disabled={false}
              label="Каждый"
              labelType="regular"
            />
            <div
              className={
                !inputHidden ? styles.custom_value : styles.custom_value_hidden
              }
            >
              <InputTextMailingPage
                placeholder="Введите значение"
                width="174px"
                disabled={false}
              />
              {!matches && (
                <button
                  type="button"
                  className={styles.button}
                  onClick={() => setInputHidden(true)}
                >
                  Скрыть
                </button>
              )}
            </div>

            <div
              className={`${styles.wrapper_pos_relative} ${styles.container_gap_small}`}
            >
              <ButtonMailing
                text="Месяц отправки"
                width={matches ? '272px' : '367px'}
                setSelected={setMonthOfYear}
              />
              {monthOfYear && (
                <div className={styles.container_flex}>
                  <p className={styles.label}>
                    {!matches ? 'Выберите день месяца' : 'Месяц отпр.'}
                  </p>
                  <InputSlider
                    options={months}
                    setSelected={setMonth}
                    width={matches ? '169px' : '174px'}
                    slideWidth={matches ? '169px' : '174px'}
                  />
                </div>
              )}
              <ButtonMailing
                text="День месяца"
                width={matches ? '272px' : '367px'}
                setSelected={setDayOfMonth}
              />
              {dayOfMonth && (
                <div className={styles.container_flex}>
                  <InputSlider
                    options={days}
                    setSelected={setDay}
                    width={matches ? '80px' : '174px'}
                    slideWidth={matches ? '80px' : '174px'}
                  />
                  <InputSelect
                    width="174px"
                    placeholder="Понедельник"
                    disabled={false}
                    options={weekDays}
                    setSelectedValue={setDaysOfWeek}
                    dropDownHeight="302px"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
