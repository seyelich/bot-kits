import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import dashboardIcon from './icons/dashboard-icon';
import mailingIcon from './icons/mailing-icon';
import botBuilderIcon from './icons/bot-builder-icon';
import chatIcon from './icons/chat-icon';
import shareIcon from './icons/share-icon';
import menuExpandIcon from './icons/menu-expand';
import styles from './sidebar.module.css';
import menuCollapseIcon from './icons/menu-collapse';
import Logo from '../Logo/Logo';
import botkitsLogo from './icons/botkits-logo';

const linkStyle = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? `${styles.navlink} ${styles['navlink-active']}`
    : `${styles.navlink}`;

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  function menuExpandHandler() {
    setExpanded((value) => !value);
  }

  // Обработчик изменения размера экрана
  function handleResize() {
    if (window.innerWidth < 670) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }

  useEffect(() => {
    // При монтировании компонента добавляем обработчик изменения размера экрана
    window.addEventListener('resize', handleResize);
    // Проверяем размер экрана и устанавливаем значение expanded
    handleResize();
    // При размонтировании компонента удаляем обработчик изменения размера экрана
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={
        expanded
          ? `${styles.sidebar} ${styles['sidebar-expanded']}`
          : styles.sidebar
      }
    >
      <div className={styles.content}>
        <div className={styles.title}>
          <button
            type="button"
            onClick={menuExpandHandler}
            className={styles['expand-button']}
          >
            {expanded ? menuCollapseIcon : menuExpandIcon}
          </button>
          {expanded ? <Logo /> : botkitsLogo}
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
