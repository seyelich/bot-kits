import { NavLink } from 'react-router-dom';

import dashboardIcon from './icons/dashboard-icon';
import mailingIcon from './icons/mailing-icon';
import botBuilderIcon from './icons/bot-builder-icon';
import chatIcon from './icons/chat-icon';
import shareIcon from './icons/share-icon';
import botKitsTitle from './icons/botkits-title';
import botkitsLogo from './icons/botkits-logo';

import styles from './sidebar.module.css';

/* const addButton = (
  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="none">
    <circle cx="23" cy="23" r="23" fill="#243CBB" />
    <path
      stroke="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M23 17v12M17 23h12"
    />
  </svg>
); */

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.title}>
        {botkitsLogo}
        {botKitsTitle}
      </div>
      <nav className={styles.navigation}>
        <NavLink to="/add-bot" className={styles.addbutton}>
          <span className={styles.addtext}>ДОБАВИТЬ БОТА</span>
        </NavLink>
        <NavLink to="/" className={styles.navlink}>
          {dashboardIcon}
          <span className={styles.navtext}>Дашборд</span>
        </NavLink>
        <NavLink to="/bot-builder" className={styles.navlink}>
          {botBuilderIcon}
          <span className={styles.navtext}>Воронки</span>
        </NavLink>
        <NavLink to="/mailing" className={styles.navlink}>
          {mailingIcon}
          <span className={styles.navtext}>Рассылки</span>
        </NavLink>
        <NavLink to="/chat" className={styles.navlink}>
          {chatIcon}
          <span className={styles.navtext}>Диалоги</span>
        </NavLink>
        <NavLink to="/share" className={styles.navlink}>
          {shareIcon}
          <span className={styles.navtext}>Общий доступ</span>
        </NavLink>
        <NavLink to="/subscription" className={styles.navlink}>
          {shareIcon}
          <span className={styles.navtext}>Подписки и платежи</span>
        </NavLink>
        <NavLink to="/partnership" className={styles.navlink}>
          {shareIcon}
          <span className={styles.navtext}>Партнёрская программа</span>
        </NavLink>
      </nav>
    </div>
  );
}
