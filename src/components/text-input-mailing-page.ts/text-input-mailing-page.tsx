import { FC, FormEventHandler, useRef, useState } from 'react';

import styles from './text-input-mailing-page.module.css';

interface IInputSelectsProps {
  inputName?: string;
  width: string;
  label?: string;
  placeholder?: string;
  labelType?: 'regular' | 'bold';
  disabled: boolean;
  reset?: boolean;
}

const InputTextMailingPage: FC<IInputSelectsProps> = ({
  inputName,
  width,
  label,
  placeholder,
  labelType,
  disabled,
  reset,
}) => {
  const [inputValue, setInputValue] = useState(placeholder);
  const [isActive, setActive] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleInputChange: FormEventHandler<HTMLInputElement> | undefined = (
    e
  ) => {
    const target = e.target as HTMLInputElement;
    setInputValue(target?.value);
    handleToggle();
  };

  return (
    <div className={styles.container}>
      <label
        htmlFor="select"
        className={`${styles.input__label} ${
          labelType === 'regular'
            ? styles.input__label_regular
            : styles.input__label_bold
        }`}
      >
        {label}
      </label>

      <input
        disabled={disabled}
        ref={ref}
        id="select"
        type="text"
        name={inputName}
        value={reset ? placeholder : inputValue}
        placeholder={placeholder}
        className={`${styles.input} ${
          disabled ? styles.input_disabled : styles.input_default
        } `}
        style={{ width }}
        onChange={handleInputChange}
        onClick={handleToggle}
      />
    </div>
  );
};

export default InputTextMailingPage;
