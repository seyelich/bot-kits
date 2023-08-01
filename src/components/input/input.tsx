import { ChangeEvent } from 'react';
import styles from './input.module.css';

type TTextInput = {
  placeholder?: string;
  disabled?: boolean;
  name: string;
  onChahge: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  errorMessage?: string;
  isInvalid?: boolean;
};

export default function TextInput({
  placeholder,
  name,
  disabled,
  onChahge,
  value,
  errorMessage,
  isInvalid,
}: TTextInput) {
  return (
    <>
      <input
        placeholder={placeholder}
        className={`${styles.input} ${isInvalid && styles.input_incorrect}`}
        type="text"
        disabled={disabled}
        name={name}
        onChange={onChahge}
        value={value}
      />
      {isInvalid && <p className={styles.errorMessage}>{errorMessage}</p>}
    </>
  );
}
