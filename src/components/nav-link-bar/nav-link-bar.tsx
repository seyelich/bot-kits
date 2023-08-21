import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import FacebookIcon from '../../ui/icons/social/facebook';
import GoogleIcon from '../../ui/icons/social/google';
import MailruIcon from '../../ui/icons/social/mailru';
import OdnoklassnikiIcon from '../../ui/icons/social/odnoklassniki';
import TelegramIcon from '../../ui/icons/social/telegram';
import VKIcon from '../../ui/icons/social/vk';
import YandexIcon from '../../ui/icons/social/yandex';
import styles from './nav-link-bar.module.css';

export interface NavLinkBarProps {
  windowWidth: number;
}

const NavLinkBar: FC<NavLinkBarProps> = ({ windowWidth }) => (
  <div className={styles.navLinkBar}>
    <nav className={styles.navLinkBar_menu}>
      <NavLink className={styles.navLinkBar_menuItem} to="#">
        <GoogleIcon
          width={windowWidth <= 730 ? 34 : 40}
          height={windowWidth <= 730 ? 34 : 40}
          type="blue"
        />
      </NavLink>
      <NavLink className={styles.navLinkBar_menuItem} to="#">
        <YandexIcon
          width={windowWidth <= 730 ? 34 : 40}
          height={windowWidth <= 730 ? 34 : 40}
          type="blue"
        />
      </NavLink>
      <NavLink className={styles.navLinkBar_menuItem} to="#">
        <MailruIcon
          width={windowWidth <= 730 ? 34 : 40}
          height={windowWidth <= 730 ? 34 : 40}
          type="blue"
        />
      </NavLink>
    </nav>
    <nav className={styles.navLinkBar_menu}>
      <NavLink className={styles.navLinkBar_menuItem} to="#">
        <VKIcon
          width={windowWidth <= 730 ? 34 : 40}
          height={windowWidth <= 730 ? 34 : 40}
          type="blue"
        />
      </NavLink>
      <NavLink className={styles.navLinkBar_menuItem} to="#">
        <OdnoklassnikiIcon
          width={windowWidth <= 730 ? 34 : 40}
          height={windowWidth <= 730 ? 34 : 40}
          type="blue"
        />
      </NavLink>
      <NavLink className={styles.navLinkBar_menuItem} to="#">
        <FacebookIcon
          width={windowWidth <= 730 ? 34 : 40}
          height={windowWidth <= 730 ? 34 : 40}
          type="blue"
        />
      </NavLink>
      <NavLink className={styles.navLinkBar_menuItem} to="#">
        <TelegramIcon
          width={windowWidth <= 730 ? 34 : 40}
          height={windowWidth <= 730 ? 34 : 40}
          type="blue"
        />
      </NavLink>
    </nav>
  </div>
);

export default NavLinkBar;
