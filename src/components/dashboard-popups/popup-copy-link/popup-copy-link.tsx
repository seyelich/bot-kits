import {
  Dispatch,
  FC,
  FormEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import styles from './popup-copy-link.module.css';
import CloseIcon from '../../../icons/others/Close';
import PopupInput from '../../popup_input/popup-input';
import Button from '../../Button/Button';

interface IPopupCopyLink {
  isOpen?: boolean;
  setIsCopyLinkPopupOpened: Dispatch<SetStateAction<boolean>>;
}

const PopupCopyLink: FC<IPopupCopyLink> = ({
  isOpen,
  setIsCopyLinkPopupOpened,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  const handleInputChange: FormEventHandler<HTMLInputElement> | undefined = (
    e
  ) => {
    const target = e.target as HTMLInputElement;
    setInputValue(target?.value);
  };

  const toggle = () => {
    setIsActive(!isActive);
  };

  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 414px)').matches
  );
  useEffect(() => {
    window
      .matchMedia('(max-width: 414px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);
  return (
    <div
      className={isOpen ? styles.popup : styles.popup_hidden}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsCopyLinkPopupOpened(false);
        }
      }}
    >
      <div className={styles.container}>
        <p className={styles.title}>Скопируйте ссылку</p>
        <PopupInput
          onChange={handleInputChange}
          name="fileName"
          value={inputValue}
          placeholder={
            matches
              ? 'https://t.me/botname?start=7...'
              : 'https://t.me/botname?start=777'
          }
        />
        <div className={styles.btn_container}>
          <Button
            type="grey"
            buttonHtmlType='button'
            width={matches ? 272 : 384}
            height={matches ? 56 : 46}
            text={!isActive ? 'СКОПИРОВАТЬ ССЫЛКУ' : 'ССЫЛКА СКОПИРОВАНА'}
            onClick={toggle}
          />
        </div>
        <button
          type="button"
          className={styles.close_btn}
          onClick={() => {
            setIsActive(false);
            setIsCopyLinkPopupOpened(false);
          }}
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default PopupCopyLink;
