import { useContext, useState } from 'react';
import styles from './Header.module.css';
import Menu24px from '../icons/Menu24px/Menu24px';
import Help from '../icons/Help/Help';
import NotificationsIcon from '../../icons/others/Notifications/Notifications';
import avatar from '../../images/avatar.svg';
import ArrowSmall from '../icons/ArrowSmall/ArrowSmall';
import Logo from '../Logo/Logo';
import MenuMobile from '../icons/MenuMobile/MenuMobile';
// eslint-disable-next-line import/no-cycle
import DropdownMenu from './dropdown-menu/dropdown-menu';
// eslint-disable-next-line import/no-cycle

import PopupMessages from '../dashboard-popups/popup-messages/popup-messages';
import { Context } from '../../App';
import useMediaQuery from '../../hooks/useMediaQuery';

export default function Header() {
  const { dropdownMenuOpen, setDropdownMenuOpen } = useContext(Context);
  const [isPopupMessagesOpened, setIsPopupMessagesOpened] = useState(false);

  const toggle = () => {
    setDropdownMenuOpen(!dropdownMenuOpen);
  };

  const matches = useMediaQuery('(max-width: 414px)');
  const matchesMobile = useMediaQuery('(max-width: 414px)');

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {matches ? <MenuMobile /> : <Menu24px />}
        <span className={styles.logo}>
          <Logo />
        </span>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.text}>Тариф</p>
        <p className={styles.text}>Демо</p>
        <div className={styles.icons}>
          <Help />
          <button onClick={() => setIsPopupMessagesOpened(true)} type="button">
            {' '}
            <NotificationsIcon counter={2} color="#ccd4e0" />
          </button>
        </div>
        <span
          className={styles.avatar}
          onClick={() => {
            if (!matchesMobile) {
              toggle();
            }
            if (matchesMobile && isPopupMessagesOpened) {
              setIsPopupMessagesOpened(false);
            }
            if (matchesMobile && !isPopupMessagesOpened) {
              toggle();
            }
          }}
        >
          <img src={avatar} alt="Avatar" className={styles.image} />
        </span>
        <p className={styles.text}>User Name</p>
        <span
          className={`${styles.button} ${
            !dropdownMenuOpen ? styles.button_default : styles.button_active
          }`}
          onClick={toggle}
        >
          <ArrowSmall />
        </span>
        <DropdownMenu
          state={dropdownMenuOpen}
          setDropdownMenuOpen={setDropdownMenuOpen}
          setIsPopupMessagesOpened={setIsPopupMessagesOpened}
        />
        <PopupMessages
          isOpen={isPopupMessagesOpened}
          setIsPopupMessagesOpened={setIsPopupMessagesOpened}
        />
      </div>
    </header>
  );
}
