import { ChangeEvent, FC } from 'react';
import styles from './popup-input.module.css';
import placeholderBlue from './placeholder-blue.module.css';
import placeholderWhite from './placeholder-white.module.css';

interface IPopupInput {
  placeholder?: string;
  placeHolderType: 'default' | 'blue' | 'white';
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
  placeHolderType,
}) => (
  <>
    <input
      placeholder={placeholder}
      className={
        placeHolderType === 'white'
          ? `${styles.input} ${placeholderWhite.input}`
          : `${styles.input}` && placeHolderType === 'blue'
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
