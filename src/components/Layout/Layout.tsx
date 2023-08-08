/* eslint-disable import/no-cycle */
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from '../Header/Header';
import Footer from '../footer/footer';

export default function Layout() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(!location.pathname.endsWith('bot-builder'));
  }, [location]);
  return (
    <div className="app-container">
      {isVisible && <Header />}
      <div className="page">
        <Outlet />
      </div>
      {isVisible && <Footer />}
    </div>
  );
}
