import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../footer/footer';

export default function Layout() {
  return (
    <div className="app-container">
      <Header />
      <div className="page">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
