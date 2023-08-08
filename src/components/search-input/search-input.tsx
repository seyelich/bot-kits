import { ChangeEventHandler, useState, Dispatch } from 'react';
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
  filterHandler?: Dispatch<React.SetStateAction<string>>;
}

function SearchInput({
  placeholder,
  width = '100%',
  size = 'default',
  hasFilter = false,
  onChange,
  filterHandler,
}: SearchInputProps) {
  const [hasFocus, setFocus] = useState(false);
  const [hasOpenedFilter, setOpenedFilter] = useState(false);

  const iconColor = '#A6B3C9';
  const iconSize = 20;
  const propsStyle = {
    width,
    height: '40px',
  };
  if (size === 'small') {
    propsStyle.height = '30px';
  }

  const focusHandler = () => {
    setFocus(!hasFocus);
  };

  const openFilterHandler = () => {
    setOpenedFilter(!hasOpenedFilter);
  };

  const firstNewClick = () => {
    if (filterHandler) {
      filterHandler('firstNew');
    }
    openFilterHandler();
  };

  const firstOldClick = () => {
    if (filterHandler) {
      filterHandler('firstOld');
    }
    openFilterHandler();
  };

  const unansweredClick = () => {
    if (filterHandler) {
      filterHandler('unanswered');
    }
    openFilterHandler();
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
        onFocus={focusHandler}
        onBlur={focusHandler}
      />
      {hasFilter && (
        <div className={Styles.filterCnt}>
          <IconButton
            width={iconSize}
            height={iconSize}
            icon={FilterIcon({
              color: '#060C23',
              width: iconSize,
              height: iconSize,
            })}
            onClick={openFilterHandler}
          />
          {hasOpenedFilter && (
            <div className={Styles.filterOptions}>
              <button
                className={Styles.filterOption}
                type="button"
                onClick={firstNewClick}
              >
                Сначала новые
              </button>
              <button
                className={Styles.filterOption}
                type="button"
                onClick={firstOldClick}
              >
                Сначала старые
              </button>
              <button
                className={Styles.filterOption}
                type="button"
                onClick={unansweredClick}
              >
                Неотвеченные
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchInput;
