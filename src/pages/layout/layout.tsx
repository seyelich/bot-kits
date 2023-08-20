/* eslint-disable import/no-cycle */
import { useContext, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Sidebar from '../../components/sidebar/sidebar';
import styles from './layout.module.css';
import { Context } from '../../app';

export default function Layout() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const { sidebarOpen } = useContext(Context);

  useEffect(() => {
    setIsVisible(!location.pathname.endsWith('bot-builder'));
  }, [location]);
  return (
    <div
      className={`${styles.layout} ${
        sidebarOpen ? styles.layout__sidebar : ''
      } ${!isVisible ? styles.layout__fullScreen : ''}`}
    >
      <Sidebar />
      {isVisible && <Header />}
      <main className={styles.page}>
        <Outlet />
      </main>
      {isVisible && <Footer />}
    </div>
  );
}
