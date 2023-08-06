import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import Menu24px from '../icons/Menu24px/Menu24px';
import Help from '../icons/Help/Help';
import NotificationsIcon from '../../icons/others/Notifications/Notifications';
import avatar from '../../images/avatar.svg';
import ArrowSmall from '../icons/ArrowSmall/ArrowSmall';
import Logo from '../Logo/Logo';
import MenuMobile from '../icons/MenuMobile/MenuMobile';
import DropdownMenu from './dropdown-menu/dropdown-menu';
import AccountSettings from './account-settings/account-settings';

import PopupRenameFile from '../dashboard-popups/popup-rename-file/popup-rename-file';
import PopupShareAccess from '../dashboard-popups/share-access/popup-share-access';
import PopupCopyLink from '../dashboard-popups/popup-copy-link/popup-copy-link';
import PopupConnectionInfo from '../dashboard-popups/popup-connection-info/popup-connection-info';
import PopupNotificationsSettings from '../dashboard-popups/popup-notifications-settings/popup-notifications-settings';
import PopupMessages from '../dashboard-popups/popup-messages/popup-messages';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [isRenamePopupOpened, setIsRenamePopupOpened] = useState(false);
  const [isShareAccessPopupOpened, setIsShareAccessPopupOpened] =
    useState(false);
  const [isCopyLinkPopupOpened, setIsCopyLinkPopupOpened] = useState(false);
  const [isConnectionInfoPopupOpened, setIsConnectionInfoPopupOpened] =
    useState(false);
  const [isPopupMessagesOpened, setIsPopupMessagesOpened] = useState(false);
  const [
    isNotificationsSettingsPopupOpened,
    setIsNotificationsSettingsPopupOpened,
  ] = useState(false);
  const toggle = () => {
    setIsActive(!isActive);
  };

  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 768px)').matches
  );
  const [matchesMobile, setMatchesMobile] = useState(
    window.matchMedia('(max-width: 414px)').matches
  );
  useEffect(() => {
    window
      .matchMedia('(max-width: 768px)')
      .addEventListener('change', (e) => setMatches(e.matches));
    window
      .matchMedia('(max-width: 414px)')
      .addEventListener('change', (e) => setMatchesMobile(e.matches));
  }, []);

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
            !isActive ? styles.button_default : styles.button_active
          }`}
          onClick={toggle}
        >
          <ArrowSmall />
        </span>
        <DropdownMenu
          state={isActive}
          setIsSettingOpen={setIsSettingOpen}
          setIsActive={setIsActive}
          setIsPopupMessagesOpened={setIsPopupMessagesOpened}
        />
        <AccountSettings
          isOpen={isSettingOpen}
          setIsSettingOpen={setIsSettingOpen}
          setIsRenamePopupOpened={setIsRenamePopupOpened}
          setIsShareAccessPopupOpened={setIsShareAccessPopupOpened}
          setIsCopyLinkPopupOpened={setIsCopyLinkPopupOpened}
          setIsConnectionInfoPopupOpened={setIsConnectionInfoPopupOpened}
          setIsNotificationsSettingsPopupOpened={
            setIsNotificationsSettingsPopupOpened
          }
        />
      </div>
      <PopupRenameFile
        isOpen={isRenamePopupOpened}
        setIsRenamePopup={setIsRenamePopupOpened}
      />
      <PopupShareAccess
        isOpen={isShareAccessPopupOpened}
        setIsShareAccessPopupOpened={setIsShareAccessPopupOpened}
      />
      <PopupCopyLink
        isOpen={isCopyLinkPopupOpened}
        setIsCopyLinkPopupOpened={setIsCopyLinkPopupOpened}
      />
      <PopupConnectionInfo
        isOpen={isConnectionInfoPopupOpened}
        setIsConnectionInfoPopupOpened={setIsConnectionInfoPopupOpened}
      />
      <PopupNotificationsSettings
        isOpen={isNotificationsSettingsPopupOpened}
        setIsNotificationsSettingsPopupOpened={
          setIsNotificationsSettingsPopupOpened
        }
      />
      <PopupMessages
        isOpen={isPopupMessagesOpened}
        setIsPopupMessagesOpened={setIsPopupMessagesOpened}
      />
    </header>
  );
}
