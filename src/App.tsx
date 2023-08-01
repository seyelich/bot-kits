import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import Dashboard from './pages/Dashboard/dashboard';
import Subscription from './pages/Subscription/subscription';
import AddBot from './pages/add-bot';

import styles from './App.module.css';
import BotBuilder from './pages/bot-builder';
import Chat from './pages/chat';
import Mailing from './pages/mailing';
import Partnership from './pages/partnership';
import Share from './pages/share';
import NotFound from './pages/not-found';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Sidebar />
        <div className={styles.content}>
          <main>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="add-bot" element={<AddBot />} />
                <Route path="bot-builder" element={<BotBuilder />} />
                <Route path="chat" element={<Chat />} />
                <Route path="mailing" element={<Mailing />} />
                <Route path="partnership" element={<Partnership />} />
                <Route path="share" element={<Share />} />
                <Route path="subscription" element={<Subscription />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
