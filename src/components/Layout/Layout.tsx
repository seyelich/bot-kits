import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../footer/footer';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
