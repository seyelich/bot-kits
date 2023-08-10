import { FC, useContext, useRef, useState } from 'react';
import styles from './MyBots.module.css';
// eslint-disable-next-line import/no-cycle
import Bot from './Bot/Bot';
import AddBot from './AddBot/AddBot';
import { Context } from '../../App';
import useMediaQuery from '../../hooks/useMediaQuery';
import MyBotsSettings from './my-bots-settings/my-bots-settings';
import PopupRenameFile from '../dashboard-popups/popup-rename-file/popup-rename-file';
import PopupShareAccess from '../dashboard-popups/share-access/popup-share-access';
import PopupCopyLink from '../dashboard-popups/popup-copy-link/popup-copy-link';
import PopupConnectionInfo from '../dashboard-popups/popup-connection-info/popup-connection-info';
import PopupNotificationsSettings from '../dashboard-popups/popup-notifications-settings/popup-notifications-settings';

const bots = [
  'Салон красоты',
  'Запись клиентов для консультации',
  'Опрос клиентов для проведения встречи',
];

const MyBots: FC = () => {
  const refs = useRef<HTMLDivElement | null[]>([]);
  const [currentBot, setCurrentBot] = useState(0);
  const {
    topOffset,
    setTopOffset,
    setLeftOffset,
    leftOffset,
    myBotsSettingsOpen,
    setMyBotsSettingsOpen,
  } = useContext(Context);

  const matchesMobile = useMediaQuery('(max-width: 414px)');
  const [isRenamePopupOpened, setIsRenamePopupOpened] = useState(false);
  const [isShareAccessPopupOpened, setIsShareAccessPopupOpened] =
    useState(false);
  const [isCopyLinkPopupOpened, setIsCopyLinkPopupOpened] = useState(false);
  const [isConnectionInfoPopupOpened, setIsConnectionInfoPopupOpened] =
    useState(false);
  const [
    isNotificationsSettingsPopupOpened,
    setIsNotificationsSettingsPopupOpened,
  ] = useState(false);

  const openSettings = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLDivElement;
    if (matchesMobile) {
      setLeftOffset(0);
      setTopOffset(document.documentElement.clientHeight - 416);
    } else {
      setLeftOffset(target.offsetLeft + 25);
      setTopOffset(target.offsetTop + target.clientHeight);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Мои боты</h1>
      <div className={styles.container}>
        <div className={styles.track}>
          {bots.map((bot, i) => (
            <Bot
              text={bot}
              onClick={(e) => {
                openSettings(e);
                setCurrentBot(i);
              }}
              key={bot}
              ref={(element) => {
                (refs.current as Array<HTMLDivElement | null>)[i] = element;
              }}
            />
          ))}
          <AddBot />
        </div>
      </div>

      <MyBotsSettings
        isOpen={myBotsSettingsOpen}
        topOffset={topOffset}
        leftOffset={leftOffset}
        setMyBotsSettingsOpen={setMyBotsSettingsOpen}
        setIsRenamePopupOpened={setIsRenamePopupOpened}
        setIsShareAccessPopupOpened={setIsShareAccessPopupOpened}
        setIsCopyLinkPopupOpened={setIsCopyLinkPopupOpened}
        setIsConnectionInfoPopupOpened={setIsConnectionInfoPopupOpened}
        setIsNotificationsSettingsPopupOpened={
          setIsNotificationsSettingsPopupOpened
        }
      />
      <PopupRenameFile
        botName={bots[currentBot]}
        isOpen={isRenamePopupOpened}
        setIsRenamePopup={setIsRenamePopupOpened}
      />
      <PopupShareAccess
        isOpen={isShareAccessPopupOpened}
        setIsShareAccessPopupOpened={setIsShareAccessPopupOpened}
      />
      <PopupCopyLink
        isOpen={isCopyLinkPopupOpened}
        setIsCopyLinkPopupOpened={setIsCopyLinkPopupOpened}
      />
      <PopupConnectionInfo
        isOpen={isConnectionInfoPopupOpened}
        setIsConnectionInfoPopupOpened={setIsConnectionInfoPopupOpened}
      />
      <PopupNotificationsSettings
        isOpen={isNotificationsSettingsPopupOpened}
        setIsNotificationsSettingsPopupOpened={
          setIsNotificationsSettingsPopupOpened
        }
      />
    </div>
  );
};

export default MyBots;
