import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import dashboardIcon from './icons/dashboard-icon';
import mailingIcon from './icons/mailing-icon';
import botBuilderIcon from './icons/bot-builder-icon';
import chatIcon from './icons/chat-icon';
import shareIcon from './icons/share-icon';
import botKitsTitle from './icons/botkits-title';
import botkitsLogo from './icons/botkits-logo';
import menuExpandIcon from './icons/menu-expand';

import styles from './sidebar.module.css';

const linkStyle = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? `${styles.navlink} ${styles['navlink-active']}`
    : `${styles.navlink}`;

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  function menuExpandHandler() {
    setExpanded((value) => !value);
  }

  return (
    <div
      className={
        expanded
          ? `${styles.sidebar} ${styles['sidebar-expanded']}`
          : styles.sidebar
      }
    >
      <button
        type="button"
        onClick={menuExpandHandler}
        className={styles['expand-button']}
      >
        {menuExpandIcon}
      </button>
      <div className={styles.content}>
        <div className={styles.title}>
          {botkitsLogo}
          {botKitsTitle}
        </div>
        <nav className={styles.navigation}>
          <NavLink to="/add-bot" className={styles.addbutton}>
            <span className={styles.addtext}>ДОБАВИТЬ БОТА</span>
          </NavLink>
          <NavLink to="/" className={linkStyle}>
            {dashboardIcon}
            <span className={styles.navtext}>Дашборд</span>
          </NavLink>
          <NavLink to="/bot-builder" className={linkStyle}>
            {botBuilderIcon}
            <span className={styles.navtext}>Воронки</span>
          </NavLink>
          <NavLink to="/mailing" className={linkStyle}>
            {mailingIcon}
            <span className={styles.navtext}>Рассылки</span>
          </NavLink>
          <NavLink to="/chat" className={linkStyle}>
            {chatIcon}
            <span className={styles.navtext}>Диалоги</span>
          </NavLink>
          <NavLink to="/share" className={linkStyle}>
            {shareIcon}
            <span className={styles.navtext}>Общий доступ</span>
          </NavLink>
          <NavLink to="/subscription" className={linkStyle}>
            {shareIcon}
            <span className={styles.navtext}>Подписки и платежи</span>
          </NavLink>
          <NavLink to="/partnership" className={linkStyle}>
            {shareIcon}
            <span className={styles.navtext}>Партнёрская программа</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
