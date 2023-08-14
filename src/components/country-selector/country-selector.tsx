/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import countryList from './countries';

import styles from './country-selector.module.css';

type TCountrySelectorProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export default function CountrySelector({
  value,
  setValue,
}: TCountrySelectorProps) {
  const [opened, setOpened] = useState<boolean>(false);
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function handleClick(evt: any) {
      if (ulRef.current && !ulRef.current?.contains(evt.target)) {
        setOpened(false);
      }
    }

    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ulRef]);

  const countries = countryList
    .filter((ele) => ele.toLowerCase().startsWith(value.toLowerCase()))
    .map((name) => {
      return (
        <li
          key={name}
          className={styles.country}
          onClick={() => {
            setOpened(false);
            setValue(name);
          }}
        >
          {name}
        </li>
      );
    });

  return (
    <div className={styles.container}>
      <label htmlFor="country" className={styles.label}>
        Страна
        <input
          className={styles.input}
          type="text"
          value={value}
          id="country"
          name="country"
          placeholder="Введите страну"
          autoComplete="off"
          onFocus={() => setOpened(true)}
          onChange={({ target }) => setValue(target.value)}
        />
      </label>
      {opened && (
        <ul ref={ulRef} className={styles.panel}>
          {countries}
        </ul>
      )}
    </div>
  );
}
