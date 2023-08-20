/* eslint-disable import/no-cycle */
import { NavLink, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import styles from './sidebar.module.css';

import dashboardIcon from './icons/dashboard-icon';
import mailingIcon from './icons/mailing-icon';
import botBuilderIcon from './icons/bot-builder-icon';
import listsIcon from './icons/lists-icon';
import chatIcon from './icons/chat-icon';
import shareIcon from './icons/share-icon';
import botKitsTitle from './icons/botkits-title';
import botKitsLogo from './icons/botkits-logo';
import menuExpandIcon from './icons/menu-expand';
import chartIcon from './icons/chart-icon';
import rocketIcon from './icons/rocket-icons';
import minilandingIcon from './icons/minilanding-icon';
import crmIcon from './icons/crm-icon';
import menuCollapseIcon from './icons/menu-collapse';

import { Context } from '../../app';

const linkStyle = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? `${styles.navlink} ${styles['navlink-active']}`
    : `${styles.navlink}`;

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const [isBotBuilder, setIsBotBuilder] = useState(false);
  const { pathname } = useLocation();
  const { sidebarOpen, setSidebarOpen } = useContext(Context);
  useEffect(() => {
    setSidebarOpen(false);
    setExpanded(false);
    setIsBotBuilder(pathname.endsWith('bot-builder'));
  }, [pathname]);

  function menuExpandHandler() {
    setSidebarOpen(!sidebarOpen);
    setExpanded((value) => !value);
  }

  return (
    <div
      className={`${styles.sidebar} ${
        expanded ? styles['sidebar-expanded'] : ''
      } ${isBotBuilder ? styles.sidebar_white : ''}`}
    >
      {!isBotBuilder && (
        <button
          type="button"
          onClick={menuExpandHandler}
          className={styles['expand-button']}
        >
          {expanded ? menuCollapseIcon : menuExpandIcon}
        </button>
      )}

      <div className={styles.content}>
        <div className={styles.title}>
          {botKitsLogo}
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

          <NavLink to="/lists" className={linkStyle}>
            {listsIcon}
            <span className={styles.navtext}>Списки</span>
          </NavLink>

          <NavLink to="/subscription" className={linkStyle}>
            {chartIcon}
            <span className={styles.navtext}>Статистика</span>
          </NavLink>

          <NavLink to="/chat" className={linkStyle}>
            {chatIcon}
            <span className={styles.navtext}>Диалоги</span>
          </NavLink>

          <NavLink to="/partnership" className={linkStyle}>
            {rocketIcon}
            <span className={styles.navtext}>Партнерская программа</span>
          </NavLink>

          <NavLink to="/share" className={linkStyle}>
            {shareIcon}
            <span className={styles.navtext}>Общий доступ</span>
          </NavLink>

          <NavLink to="/minilanding" className={linkStyle}>
            {minilandingIcon}
            <span className={styles.navtext}>Мини-лендинг</span>
          </NavLink>

          <NavLink to="/crm" className={linkStyle}>
            {crmIcon}
            <p className={styles.navtext}>CRM</p>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
