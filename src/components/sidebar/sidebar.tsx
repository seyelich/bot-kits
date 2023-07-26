import { Link } from "react-router-dom";

import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <span>bot kits</span>
      <nav className={styles.navigation}>
        <Link to="/add-bot">кнопошка добавить</Link>
        <Link to="/">Дашборд</Link>
        <Link to="/bot-builder">Воронки</Link>
        <Link to="/mailing">Рассылки</Link>
        <Link to="/chat">Диалоги</Link>
        <Link to="/share">Общий доступ</Link>
        <Link to="/subscription">Подписки и платежи</Link>
        <Link to="/partnership">Партнёрская программа</Link>
      </nav>
    </div>
  )
}
