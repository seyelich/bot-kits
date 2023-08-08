import { ChangeEventHandler, useState } from 'react';
import Styles from './search-input.module.css';
import SearchIcon from '../../icons/others/Search';
import IconButton from '../icon-button/IconButton';
import FilterIcon from '../../icons/others/Filter';

interface SearchInputProps {
  placeholder: string;
  width?: string;
  size?: 'default' | 'small';
  hasFilter?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onFilterClick?: VoidFunction;
}

function SearchInput({
  placeholder,
  width = '100%',
  size = 'default',
  hasFilter = false,
  onChange,
  onFilterClick,
}: SearchInputProps) {
  const [hasFocus, setFocus] = useState(false);

  const iconColor = '#A6B3C9';
  const iconSize = 20;
  const propsStyle = {
    width,
    height: '40px',
  };
  if (size === 'small') {
    propsStyle.height = '30px';
  }

  const focusHandle = () => {
    setFocus(!hasFocus);
  };

  return (
    <div
      className={`${Styles.inputFrame} ${hasFocus && Styles.inputFrameFocus}`}
      style={propsStyle}
    >
      {!hasFocus && (
        <div style={{ flexBasis: '18px' }}>
          <SearchIcon color={iconColor} width={iconSize} height={iconSize} />
        </div>
      )}
      <input
        className={Styles.input}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        onFocus={focusHandle}
        onBlur={focusHandle}
      />
      {hasFilter && (
        <IconButton
          width={iconSize}
          height={iconSize}
          icon={FilterIcon({
            color: '#060C23',
            width: iconSize,
            height: iconSize,
          })}
          onClick={onFilterClick}
        />
      )}
    </div>
  );
}

export default SearchInput;
