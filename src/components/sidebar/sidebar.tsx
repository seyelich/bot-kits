import { NavLink } from 'react-router-dom';

import styles from './sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <span>bot kits</span>
      <nav className={styles.navigation}>
        <NavLink to="/add-bot">кнопошка добавить</NavLink>
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
