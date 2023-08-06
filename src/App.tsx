/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/sidebar/sidebar';
// import Dashboard from './pages/Dashboard/dashboard';
// import Subscription from './pages/Subscription/subscription';
// import AddBot from './pages/add-bot';
// import styles from './App.module.css';
// import BotBuilder from './pages/bot-builder';
// import Chat from './pages/chat';
// import Mailing from './pages/mailing/mailing';
// import Partnership from './pages/partnership/partnership';
// import Share from './pages/share';
// import NotFound from './pages/not-found';
// import Layout from './components/Layout/Layout';
import Auth from './pages/auth/auth';
// import FirstMailing from './pages/mailing/ui/first-mailing/FirstMailing';
// import MyMailing from './pages/mailing/ui/my-mailing/MyMailing';
// import CreateMailing from './pages/mailing/ui/create-mailing/CreateMailing';
// import MailingConditions from './pages/mailing-conditions/mailing-conditions';

interface ISidebarContext {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

export const SidebarContext = createContext({} as ISidebarContext);

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      <BrowserRouter>
        <Auth/>
        {/* <div className={styles.content}>
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
        </div> */}
      </BrowserRouter>
    </SidebarContext.Provider>
  );
}
