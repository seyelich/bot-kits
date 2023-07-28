import { NavLink } from 'react-router-dom';

import styles from './sidebar.module.css';

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
        <NavLink to="/add-bot">{addButton}кнопошка добавить</NavLink>
        <NavLink to="/">Дашборд</NavLink>
        <NavLink to="/bot-builder">Воронки</NavLink>
        <NavLink to="/mailing">Рассылки</NavLink>
        <NavLink to="/chat">Диалоги</NavLink>
        <NavLink to="/share">Общий доступ</NavLink>
        <NavLink to="/subscription">Подписки и платежи</NavLink>
        <NavLink to="/partnership">Партнёрская программа</NavLink>
      </nav>
    </div>
  );
}
