import {
  Dispatch,
  FC,
  FormEventHandler,
  SetStateAction,
  useState,
} from 'react';
import styles from './popup-share-access.module.css';
import CloseIcon from '../../../icons/others/close';
import PopupInput from '../../popup_input/popup-input';
import Button from '../../button/button';
import useMediaQuery from '../../../hooks/use-media-query';

interface IPopupShareAccess {
  isOpen: boolean;
  setIsShareAccessPopupOpened: Dispatch<SetStateAction<boolean>>;
}

const PopupShareAccess: FC<IPopupShareAccess> = ({
  isOpen,
  setIsShareAccessPopupOpened,
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
          setIsShareAccessPopupOpened(false);
        }
      }}
    >
      <div className={styles.container}>
        <p className={styles.title}>Поделитесь доступом к боту</p>
        <PopupInput
          placeHolderType="default"
          onChange={handleInputChange}
          name="fileName"
          value={inputValue}
          placeholder="Добавьте e-mail пользователя"
        />
        <div className={styles.btn_container}>
          <button className={styles.btn_cancel} type="button">
            ОТМЕНА
          </button>
          <Button
            type="blue"
            width={!matches ? 222 : 142}
            height={!matches ? 46 : 56}
            text={matches ? 'OK' : 'Поделиться'}
          />
        </div>
        <button
          type="button"
          className={styles.close_btn}
          onClick={() => setIsShareAccessPopupOpened(false)}
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default PopupShareAccess;
