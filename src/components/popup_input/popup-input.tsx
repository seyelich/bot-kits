import { ChangeEvent, FC } from 'react';
import styles from './popup-input.module.css';
import placeholderBlue from './placeholder-blue.module.css';
import placeholderWhite from './placeholder-white.module.css';

interface IPopupInput {
  placeholder?: string;
  disabled?: boolean;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  errorMessage?: string;
  isInvalid?: boolean;
}

const PopupInput: FC<IPopupInput> = ({
  placeholder,
  name,
  disabled,
  onChange,
  value,
  errorMessage,
  isInvalid,
}) => (
  <>
    <input
      placeholder={placeholder}
      className={
        placeholder === 'Салон красоты' || placeholder === 'Салон красоты NEW'
          ? `${styles.input} ${placeholderWhite.input}`
          : `${styles.input}` &&
            placeholder === 'https://t.me/botname?start=777'
          ? `${styles.input} ${placeholderBlue.input}`
          : `${styles.input}`
      }
      type="text"
      disabled={disabled}
      name={name}
      onChange={onChange}
      value={value}
    />
    {isInvalid && <p className={styles.errorMessage}>{errorMessage}</p>}
  </>
);

export default PopupInput;
