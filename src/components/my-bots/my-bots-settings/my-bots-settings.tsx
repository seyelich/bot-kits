/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Dispatch, FC, SetStateAction } from 'react';
import { useNavigate } from 'react-router';
import styles from './my-bots-settings.module.css';

import CopyBotIcon from '../../../icons/others/CopyBot';

import ShareIcon from '../../../icons/others/Share';
import EditIcon from '../../../icons/others/Edit';
import LinkIcon from '../../../icons/others/Link';
import InfoIcon from '../../../icons/others/Info';
import NotificationSettingsIcon from '../../../icons/others/NotificationSettings';
import TrashIcon from '../../../icons/others/Trash';
import CloseIcon from '../../../icons/others/Close';
import useMediaQuery from '../../../hooks/useMediaQuery';

interface IMyBotsSettings {
  isOpen: boolean;
  topOffset: number | undefined;
  leftOffset: number | undefined;
  setMyBotsSettingsOpen: Dispatch<SetStateAction<boolean>>;
  setIsRenamePopupOpened?: Dispatch<SetStateAction<boolean>>;
  setIsShareAccessPopupOpened?: Dispatch<SetStateAction<boolean>>;
  setIsCopyLinkPopupOpened?: Dispatch<SetStateAction<boolean>>;
  setIsConnectionInfoPopupOpened?: Dispatch<SetStateAction<boolean>>;
  setIsNotificationsSettingsPopupOpened?: Dispatch<SetStateAction<boolean>>;
}

const MyBotsSettings: FC<IMyBotsSettings> = ({
  isOpen,
  topOffset,
  leftOffset,
  setMyBotsSettingsOpen,
  setIsRenamePopupOpened,
  setIsShareAccessPopupOpened,
  setIsCopyLinkPopupOpened,
  setIsConnectionInfoPopupOpened,
  setIsNotificationsSettingsPopupOpened,
}) => {
  const navigate = useNavigate();
  const matches = useMediaQuery('(max-width: 414px)');
  return (
    <div
      className={
        !isOpen
          ? `${styles.container} ${styles.container_default}`
          : `${styles.container} ${styles.container_active}`
      }
      style={{ top: topOffset, left: leftOffset }}
    >
      <ul className={styles.list}>
        <li
          className={styles.item}
          onClick={() => {
            navigate('/add-bot');
            setMyBotsSettingsOpen(false);
          }}
        >
          <div className={styles.option}>
            <CopyBotIcon color={matches ? '#A6B3C9' : '#d7deea'} />
            <p className={styles.text}>
              {!matches ? 'Копировать бота' : 'Копировать'}
            </p>
          </div>
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setIsShareAccessPopupOpened?.(true);
            setMyBotsSettingsOpen(false);
          }}
        >
          <div className={styles.option}>
            <ShareIcon color={matches ? '#A6B3C9' : '#d7deea'} />
            <p className={styles.text}>Общий доступ</p>
          </div>
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setIsRenamePopupOpened?.(true);
            setMyBotsSettingsOpen(false);
          }}
        >
          <div className={styles.option}>
            <EditIcon color={matches ? '#A6B3C9' : '#d7deea'} />
            <p className={styles.text}>Переименовать</p>
          </div>
        </li>
        {!matches && (
          <>
            <li
              className={styles.item}
              onClick={() => {
                setIsCopyLinkPopupOpened?.(true);
                setMyBotsSettingsOpen(false);
              }}
            >
              <div className={styles.option}>
                <LinkIcon color={matches ? '#A6B3C9' : '#d7deea'} />
                <p className={styles.text}>Получить ссылку</p>
              </div>
            </li>
            <li
              className={styles.item}
              onClick={() => {
                setIsConnectionInfoPopupOpened?.(true);
                setMyBotsSettingsOpen(false);
              }}
            >
              <div className={styles.option}>
                <InfoIcon color={matches ? '#A6B3C9' : '#d7deea'} />
                <p className={styles.text}>Информация</p>
              </div>
            </li>
            <li
              className={styles.item}
              onClick={() => {
                setIsNotificationsSettingsPopupOpened?.(true);
                setMyBotsSettingsOpen(false);
              }}
            >
              <div className={styles.option}>
                <NotificationSettingsIcon
                  color={matches ? '#A6B3C9' : '#d7deea'}
                />
                <p className={styles.text}>Настройка уведомлений</p>
              </div>
            </li>
          </>
        )}
        {matches && (
          <>
            <li
              className={styles.item}
              onClick={() => {
                setIsConnectionInfoPopupOpened?.(true);
                setMyBotsSettingsOpen(false);
              }}
            >
              <div className={styles.option}>
                <InfoIcon color={matches ? '#A6B3C9' : '#d7deea'} />
                <p className={styles.text}>Информация</p>
              </div>
            </li>
            <li
              className={styles.item}
              onClick={() => {
                setIsNotificationsSettingsPopupOpened?.(true);
                setMyBotsSettingsOpen(false);
              }}
            >
              <div className={styles.option}>
                <NotificationSettingsIcon
                  color={matches ? '#A6B3C9' : '#d7deea'}
                />
                <p className={styles.text}>Настройка уведомлений</p>
              </div>
            </li>
            <li
              className={styles.item}
              onClick={() => {
                setIsCopyLinkPopupOpened?.(true);
                setMyBotsSettingsOpen(false);
              }}
            >
              <div className={styles.option}>
                <LinkIcon color={matches ? '#A6B3C9' : '#d7deea'} />
                <p className={styles.text}>Получить ссылку</p>
              </div>
            </li>
          </>
        )}

        <li
          className={styles.item}
          onClick={() => {
            setMyBotsSettingsOpen(false);
          }}
        >
          <div className={styles.option}>
            <TrashIcon color={matches ? '#A6B3C9' : '#d7deea'} />
            <p className={styles.text}>Удалить</p>
          </div>
        </li>
        {matches && (
          <li
            className={styles.item}
            onClick={() => {
              setMyBotsSettingsOpen(false);
            }}
          >
            <div className={styles.option}>
              <CloseIcon color={matches ? '#A6B3C9' : '#d7deea'} />
              <p className={styles.text}>Отмена</p>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default MyBotsSettings;
