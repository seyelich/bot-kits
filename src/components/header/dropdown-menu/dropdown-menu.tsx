/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Dispatch, FC, SetStateAction, useContext } from 'react';
import { useNavigate } from 'react-router';
import styles from './dropdown-menu.module.css';
import SettingsIcon from '../../../icons/others/settings';
import PaymentIcon from '../../../icons/others/payment';
import ExitIcon from '../../../icons/others/exit';
import NotificationsIcon from '../../../icons/others/notifications/notifications';
import InfoIcon from '../../../icons/others/info';
import { Context } from '../../../app';
import useMediaQuery from '../../../hooks/use-media-query';

interface IDropdownMenu {
  state: boolean;
  setDropdownMenuOpen: Dispatch<SetStateAction<boolean>>;
  setIsPopupMessagesOpened: Dispatch<SetStateAction<boolean>>;
}

const DropdownMenu: FC<IDropdownMenu> = ({
  state,
  setDropdownMenuOpen,
  setIsPopupMessagesOpened,
}) => {
  const { logOut } = useContext(Context);
  const matches = useMediaQuery('(max-width: 414px)');

  const navigate = useNavigate();
  return (
    <div
      className={
        state
          ? `${styles.container_active} ${styles.container}`
          : `${styles.container} ${styles.container_default}`
      }
    >
      {matches && state && (
        <>
          <p className={styles.user}>Иванов Александр</p>
          <div className={styles.tariff_container}>
            <p className={styles.tariff}>Тариф</p>
            <p className={styles.tariff_name}>Демо</p>
          </div>
        </>
      )}

      <ul className={styles.list}>
        <li
          className={styles.item}
          onClick={() => {
            setDropdownMenuOpen(false);
          }}
        >
          <div className={styles.option}>
            <SettingsIcon color={!matches ? '#d7deea' : '#a6b3c9'} />
            <p className={styles.text}>Настройки аккаунта</p>
          </div>
        </li>
        <li
          className={styles.item}
          onClick={() => {
            navigate('/subscription');
            setDropdownMenuOpen(false);
          }}
        >
          <div className={styles.option}>
            <PaymentIcon
              color={!matches ? '#d7deea' : '#a6b3c9'}
              width={24}
              height={24}
            />
            <p className={styles.text}>Подписка и платежи</p>
          </div>
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setDropdownMenuOpen(false);
          }}
        >
          <div className={styles.option} onClick={logOut}>
            <ExitIcon
              color={!matches ? '#d7deea' : '#a6b3c9'}
              width={24}
              height={24}
            />
            <p className={styles.text}>Выйти</p>
          </div>
        </li>
        {matches && (
          <>
            <li
              className={styles.item}
              onClick={() => {
                setIsPopupMessagesOpened(true);
                setDropdownMenuOpen(false);
              }}
            >
              <div className={styles.option}>
                {' '}
                <NotificationsIcon counter={2} color="#ccd4e0" />
                <p className={styles.text}>Уведомления</p>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.option}>
                <InfoIcon
                  color={!matches ? '#d7deea' : '#a6b3c9'}
                  width={24}
                  height={24}
                />
                <p className={styles.text}>Справка</p>
              </div>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default DropdownMenu;
