import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import Dashboard from './pages/Dashboard/dashboard';
import AddBot from './pages/add-bot';
import styles from './App.module.css';
import BotBuilder from './pages/bot-builder';
import Chat from './pages/chat';
import Mailing from './pages/mailing/mailing';
import Partnership from './pages/partnership/partnership';
import Share from './pages/share';
import Subscription from './pages/subscription';
import NotFound from './pages/not-found';
import Layout from './components/Layout/Layout';
import Auth from './pages/auth/auth';
import FirstMailing from './pages/mailing/ui/first-mailing/FirstMailing';
import MyMailing from './pages/mailing/ui/my-mailing/MyMailing';
import CreateMailing from './pages/mailing/ui/create-mailing/CreateMailing';
import MailingConditions from './pages/mailing-conditions/mailing-conditions';

function App() {
  return (
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
              </Route>
              <Route path="mailing/conditions" element={<MailingConditions />}/>
              <Route path="partnership" element={<Partnership />} />
              <Route path="share" element={<Share />} />
              <Route path="subscription" element={<Subscription />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </main>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
