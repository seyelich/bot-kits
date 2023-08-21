/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Subscription from './pages/subscription/subscription';
import AddBot from './pages/add-bot/add-bot';
import BotBuilder from './pages/bot-builder/bot-builder';
import Chat from './pages/chat/chat';
import Mailing from './pages/mailing/mailing';
import Partnership from './pages/partnership/partnership';
import Share from './pages/share/share';
import NotFound from './pages/not-found';
import Layout from './pages/layout/layout';
import FirstMailing from './components/first-mailing/first-mailing';
import MyMailing from './components/my-mailing/my-mailing';
import CreateMailing from './components/create-mailing/create-mailing';
import MailingConditions from './pages/mailing-conditions/mailing-conditions';
import Auth from './pages/auth/auth';

interface IContext {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
  logIn: () => void;
  logOut: () => void;
  myBotsSettingsOpen: boolean;
  setMyBotsSettingsOpen: Dispatch<SetStateAction<boolean>>;
  dropdownMenuOpen: boolean;
  setDropdownMenuOpen: Dispatch<SetStateAction<boolean>>;
  topOffset: number | undefined;
  setTopOffset: Dispatch<SetStateAction<number | undefined>>;
  leftOffset: number | undefined;
  setLeftOffset: Dispatch<SetStateAction<number | undefined>>;
}

export const Context = createContext({} as IContext);

export function App() {
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [myBotsSettingsOpen, setMyBotsSettingsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Установить false при демонстрации визуала авторизации
  const [authenticated, setAuthenticated] = useState(true);
  const [topOffset, setTopOffset] = useState<number | undefined>(0);
  const [leftOffset, setLeftOffset] = useState<number | undefined>(0);
  const logIn = () => {
    // Тут должна быть логика по авторизации(получение/проверка/запись токена и тд)
    setAuthenticated(true);
  };
  const logOut = () => {
    // Тут должна быть логика по удалению токена и закрытию сессии
    setAuthenticated(false);
  };

  const closeAllOpened = () => {
    if (myBotsSettingsOpen) {
      setMyBotsSettingsOpen(false);
    }
    if (dropdownMenuOpen) {
      setDropdownMenuOpen(false);
    }
  };

  return (
    <Context.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        logIn,
        logOut,
        myBotsSettingsOpen,
        setMyBotsSettingsOpen,
        dropdownMenuOpen,
        setDropdownMenuOpen,
        topOffset,
        setTopOffset,
        leftOffset,
        setLeftOffset,
      }}
    >
      <BrowserRouter>
        {!authenticated && <Auth />}
        {authenticated && (
          <div onClick={closeAllOpened}>
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
          </div>
        )}
      </BrowserRouter>
    </Context.Provider>
  );
}
