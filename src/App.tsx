/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import Dashboard from './pages/Dashboard/dashboard';
import Subscription from './pages/Subscription/subscription';
import AddBot from './pages/add-bot/add-bot';
import styles from './App.module.css';
import BotBuilder from './pages/bot-builder';
import Chat from './pages/chat';
import Mailing from './pages/mailing/mailing';
import Partnership from './pages/partnership/partnership';
import Share from './pages/share';
import NotFound from './pages/not-found';
import Layout from './components/Layout/Layout';
import FirstMailing from './pages/mailing/ui/first-mailing/FirstMailing';
import MyMailing from './pages/mailing/ui/my-mailing/MyMailing';
import CreateMailing from './pages/mailing/ui/create-mailing/CreateMailing';
import MailingConditions from './pages/mailing-conditions/mailing-conditions';
import Auth from './pages/auth/auth';

interface IContext {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
  settingsOpen: boolean;
  setSettingOpen: (arg: boolean) => void;
  logIn: () => void;
  logOut: () => void;
}

export const Context = createContext({} as IContext);

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [settingsOpen, setSettingOpen] = useState(false);
  // Установить True при демонстрации визуала авторизации
  const [authenticated, setAuthenticated] = useState(true);

  const logIn = () => {
    //Тут должна быть логика по авторизации(запись токена и тд)
    setAuthenticated(true);
  };

  const logOut = () => {
    //Тут должна быть логика по удалению токена и закрытию авторизации)
    setAuthenticated(false);
  };

  return (
    <Context.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        settingsOpen,
        setSettingOpen,
        logIn,
        logOut,
      }}
    >
      <BrowserRouter>
        {!authenticated && <Auth />}
        {authenticated && (
          <div className={styles.content}>
            <Sidebar />
            <main>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="add-bot" element={<AddBot />} />
                  <Route path="bot-builder" element={<BotBuilder />} />
                  <Route path="chat" element={<Chat />} />
                  <Route path="mailing" element={<Mailing />}>
                    <Route path="" element={<FirstMailing />} />
                    <Route path="start" element={<MyMailing />} />
                    <Route path="add" element={<CreateMailing />} />
                    <Route path="conditions" element={<MailingConditions />} />
                  </Route>
                  <Route path="partnership" element={<Partnership />} />
                  <Route path="share" element={<Share />} />
                  <Route path="subscription" element={<Subscription />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </main>
          </div>
        )}
      </BrowserRouter>
    </Context.Provider>
  );
}
