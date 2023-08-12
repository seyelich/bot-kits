import { useContext, useState } from 'react';
import styles from './header.module.css';
import Menu24px from '../icons/menu-24px/menu-24px';
import Help from '../icons/help/help';
import NotificationsIcon from '../../icons/others/Notifications/Notifications';
import avatar from '../../images/avatar.svg';
import ArrowSmall from '../icons/arrow-small/arrow-small';
import Logo from '../logo/logo';
import MenuMobile from '../icons/menu-mobile/menu-mobile';
// eslint-disable-next-line import/no-cycle
import DropdownMenu from './dropdown-menu/dropdown-menu';
// eslint-disable-next-line import/no-cycle

import PopupMessages from '../dashboard-popups/popup-messages/popup-messages';
import { Context } from '../../app';
import useMediaQuery from '../../hooks/use-media-query';

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
