import { NavLink } from 'react-router-dom';

import styles from './sidebar.module.css';
import dashboardIcon from './icons/dashboard-icon';
import mailingIcon from './icons/mailing-icon';
import botBuilderIcon from './icons/bot-builder-icon';
import chatIcon from './icons/chat-icon';
import shareIcon from './icons/share-icon';

const addButton = (
  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="none">
    <circle cx="23" cy="23" r="23" fill="#243CBB" />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M23 17v12M17 23h12"
    />
  </svg>
);

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <span>bot kits</span>
      <nav className={styles.navigation}>
        <NavLink to="/add-bot">{addButton}</NavLink>
        <NavLink to="/" className={styles.navlink}>
          {dashboardIcon}
          <span>Дашборд</span>
        </NavLink>
        <NavLink to="/bot-builder" className={styles.navlink}>
          {botBuilderIcon}
          Воронки
        </NavLink>
        <NavLink to="/mailing" className={styles.navlink}>
          {mailingIcon}
          Рассылки
        </NavLink>
        <NavLink to="/chat" className={styles.navlink}>
          {chatIcon}
          Диалоги
        </NavLink>
        <NavLink to="/share" className={styles.navlink}>
          {shareIcon}
          Общий доступ
        </NavLink>
        <NavLink to="/subscription" className={styles.navlink}>
          {shareIcon}
          Подписки и платежи
        </NavLink>
        <NavLink to="/partnership" className={styles.navlink}>
          {shareIcon}
          Партнёрская программа
        </NavLink>
      </nav>
    </div>
  );
}
