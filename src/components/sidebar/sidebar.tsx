/* eslint-disable import/no-cycle */
import { NavLink, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import dashboardIcon from './icons/dashboard-icon';
import mailingIcon from './icons/mailing-icon';
import botBuilderIcon from './icons/bot-builder-icon';
import chatIcon from './icons/chat-icon';
import shareIcon from './icons/share-icon';
import botKitsTitle from './icons/botkits-title';
import botkitsLogo from './icons/botkits-logo';
import menuExpandIcon from './icons/menu-expand';

import styles from './sidebar.module.css';
import menuCollapseIcon from './icons/menu-collapse';
import { Context } from '../../App';

const linkStyle = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? `${styles.navlink} ${styles['navlink-active']}`
    : `${styles.navlink}`;

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const { pathname } = useLocation();
  const { sidebarOpen, setSidebarOpen } = useContext(Context);
  useEffect(() => {
    setSidebarOpen(false);
    setExpanded(false);
  }, [pathname]);

  function menuExpandHandler() {
    setSidebarOpen(!sidebarOpen);
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
        {expanded ? menuCollapseIcon : menuExpandIcon}
      </button>
      <div className={styles.content}>
        <div className={styles.title}>
          {botkitsLogo}
          {botKitsTitle}
        </div>
        <nav className={styles.navigation}>
          <NavLink to="/add-bot" className={styles.addbutton}>
            <span className={styles.addtext}>Добавить бота</span>
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 16.7306V8.36841"
                stroke="#CCD4E0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 16.7306V3.35107"
                stroke="#CCD4E0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.73621 20.6489H21.2639"
                stroke="#CCD4E0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 16.7306V11.7133"
                stroke="#CCD4E0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={styles.navtext}>Подписки и платежи</span>
          </NavLink>
          <NavLink to="/partnership" className={linkStyle}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 11L15.5 19M16 11C16 6.5 14.5 4 11.9999 2C9.5 4 8 6.5 8 11M16 11L18 12.5C19.259 13.4443 20 14.9262 20 16.5V19.4612C20 20.1849 19.2551 20.669 18.5939 20.375L15.5 19M8 11L8.5 19M8 11L6 12.5C4.74097 13.4443 4 14.9262 4 16.5V19.4612C4 20.1849 4.74485 20.669 5.40614 20.375L8.5 19M8.5 19H15.5M12 9V11"
                stroke="#D7DEEA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={styles.navtext}>Партнёрская программа</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
