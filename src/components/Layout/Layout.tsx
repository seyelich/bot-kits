import { FC } from 'react';
import { Header } from '../Header/Header';
import Footer from '../footer/footer';
import { Outlet } from 'react-router';


export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};
