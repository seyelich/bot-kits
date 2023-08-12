import {
  Dispatch,
  FC,
  FormEventHandler,
  SetStateAction,
  useState,
} from 'react';
import styles from './popup-rename-file.module.css';
import CloseIcon from '../../../icons/others/Close';
import PopupInput from '../../popup_input/popup-input';
import Button from '../../button/button';
import useMediaQuery from '../../../hooks/useMediaQuery';

interface IPopupRenameFile {
  botName: string | undefined;
  isOpen: boolean;
  setIsRenamePopup: Dispatch<SetStateAction<boolean>>;
}

const PopupRenameFile: FC<IPopupRenameFile> = ({
  botName,
  isOpen,
  setIsRenamePopup,
}) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange: FormEventHandler<HTMLInputElement> | undefined = (
    e
  ) => {
    const target = e.target as HTMLInputElement;
    setInputValue(target?.value);
  };
  const matches = useMediaQuery('(max-width: 414px)');
  return (
    <div
      className={isOpen ? styles.popup : styles.popup_hidden}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsRenamePopup(false);
        }
      }}
    >
      <div className={styles.container}>
        <p className={styles.title}>Переименуйте файл</p>
        <PopupInput
          placeHolderType={matches ? 'blue' : 'white'}
          onChange={handleInputChange}
          name="fileName"
          value={inputValue}
          placeholder={botName}
        />
        <div className={styles.btn_container}>
          <button className={styles.btn_cancel} type="button">
            ОТМЕНА
          </button>
          <Button
            type="blue"
            width={matches ? 142 : 222}
            height={matches ? 56 : 46}
            text={matches ? 'OK' : 'ПЕРЕИМЕНОВАТЬ'}
          />
        </div>
        <button
          type="button"
          className={styles.close_btn}
          onClick={() => setIsRenamePopup(false)}
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default PopupRenameFile;
