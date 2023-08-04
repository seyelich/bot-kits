import { NavLink } from 'react-router-dom';
import FacebookIcon from '../../icons/social/facebook';
import GoogleIcon from '../../icons/social/google';
import MailruIcon from '../../icons/social/mailru';
import OdnoklassnikiIcon from '../../icons/social/odnoklassniki';
import TelegramIcon from '../../icons/social/telegram';
import VKIcon from '../../icons/social/vk';
import YandexIcon from '../../icons/social/yandex';
import styles from './NavLinkBar.module.css';


const NavLinkBar = () => {
  return (
    <div className={styles.navLinkBar}>
          <nav className={styles.navLinkBar_menu}>
            <NavLink
              className={styles.navLinkBar_menuItem}
              to="#"
            >
              <GoogleIcon width={40} height={40} type="blue" />
            </NavLink>
            <NavLink
              className={styles.navLinkBar_menuItem}
              to="#"
            >
              <YandexIcon width={40} height={40} type="blue" />
            </NavLink>
            <NavLink
              className={styles.navLinkBar_menuItem}
              to="#"
            >
              <MailruIcon width={40} height={40} type="blue" />
            </NavLink>
          </nav>
          <nav className={styles.navLinkBar_menu}>
            <NavLink
              className={styles.navLinkBar_menuItem}
              to="#"
            >
              <VKIcon width={40} height={40} type="blue" />
            </NavLink>
            <NavLink
              className={styles.navLinkBar_menuItem}
              to="#"
            >
              <OdnoklassnikiIcon width={40} height={40} type="blue" />
            </NavLink>
            <NavLink
              className={styles.navLinkBar_menuItem}
              to="#"
            >
              <FacebookIcon width={40} height={40} type="blue" />
            </NavLink>
            <NavLink
              className={styles.navLinkBar_menuItem}
              to="#"
            >
              <TelegramIcon width={40} height={40} type="blue" />
            </NavLink>
          </nav>
        </div>
  )
}

export default NavLinkBar
