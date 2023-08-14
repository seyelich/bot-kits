import {
  Dispatch,
  FC,
  FormEventHandler,
  SetStateAction,
  useRef,
  useState,
} from 'react';

import styles from './input-select.module.css';

import Arrow from '../../icons/others/arrow';

interface IInputSelectsProps {
  inputName?: string;
  options: string[];
  width: string;
  label?: string;
  dropDownHeight?: string;
  dropDownWidth?: string;
  placeholder?: string;
  labelType?: 'regular' | 'bold';
  setSelectedValue?: Dispatch<SetStateAction<string>>;
  disabled: boolean;
  onClick?: () => void;
  reset?: boolean;
}

const InputSelect: FC<IInputSelectsProps> = ({
  inputName,
  options,
  width,
  label,
  dropDownHeight,
  dropDownWidth,
  placeholder,
  labelType,
  setSelectedValue,
  onClick,
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

  const handleButtonClick = () => {
    if (disabled) {
      return;
    }
    handleToggle();
    setInputValue('');
  };

  const handleOptionOnclick = (option: string) => {
    setInputValue(option);
    setActive(false);
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
      <span
        className={`${styles.input__button} ${
          !isActive ? styles.input__button_default : styles.input__button_active
        }`}
        onClick={handleButtonClick}
      >
        <Arrow
          type="common"
          width={16}
          height={16}
          color={disabled ? 'lightGrey' : 'darkGrey'}
        />
      </span>

      <div
        className={`${styles.wrapper} ${
          !isActive ? styles.wrapper_default : styles.wrapper_active
        }`}
        style={{
          height: isActive ? dropDownHeight : 0,
          width: dropDownWidth !== undefined ? dropDownWidth : width,
        }}
      >
        <ul className={styles.list}>
          {options.map((option, index) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li
              className={styles.list__option}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              onClick={() => {
                handleOptionOnclick(option);
                setSelectedValue?.(option);
                onClick?.();
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InputSelect;
