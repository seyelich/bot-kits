import { FC } from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../footer/footer';

const Layout: FC = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
