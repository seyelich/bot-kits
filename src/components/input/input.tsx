import styles from './input.module.css';

type TTextInput = {
  placeholder: string;
  disabled: boolean;
  name: string;
  onChahge: () => {};
  value: string;
  errorMessage: string;
  isValid: boolean;
};

export default function TextInput({
  placeholder,
  name,
  disabled,
  onChahge,
  value,
  errorMessage,
  isValid,
}: TTextInput) {
  return (
    <>
      <input
        placeholder={placeholder}
        className={`${styles.input} ${!isValid && styles.input_incorrect}`}
        type="text"
        disabled={disabled}
        name={name}
        onChange={onChahge}
        value={value}
      />
      {!isValid && <p className={styles.errorMessage}>{errorMessage}</p>}
    </>
  );
}
