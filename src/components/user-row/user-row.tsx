import { Dispatch, SetStateAction } from 'react';
import { TUser } from '../../utils/types';
import styles from './user-row.module.css';
import UserCheckbox from '../user-checkbox/user-checkbox';

type TUserRowProps = TUser & {
  checking?: boolean;
  checked: boolean;
  setChecked: Dispatch<SetStateAction<Set<string>>>;
  extraClass?: string;
};

export default function UserRow({
  _id,
  avatar = (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
      <rect width="32" height="32" fill="#D8E8F3" rx="16" />
      <g clipPath="url(#a)">
        <path
          fill="#222A54"
          fillRule="evenodd"
          d="M16.031 15.348A8 8 0 0 0 8.057 8a8 8 0 0 0 7.291 7.969A8 8 0 0 0 8 23.943a8 8 0 0 0 7.969-7.291A8 8 0 0 0 23.943 24a8 8 0 0 0-7.291-7.969A8 8 0 0 0 24 8.057a8 8 0 0 0-7.969 7.291ZM16 16Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M8 8h16v16H8z" />
        </clipPath>
      </defs>
    </svg>
  ),
  name,
  surname,
  username = '-',
  messengerId,
  phone = '-',
  checked = false,
  setChecked,
  extraClass = '',
  checking = true,
}: TUserRowProps) {
  return (
    <div className={`${styles.user} ${extraClass}`}>
      <UserCheckbox
        check={checked}
        extraClass={
          checking
            ? styles.check
            : `${styles.check} ${styles['check_mobile-invisible']}`
        }
        onClick={() =>
          setChecked((set) => {
            const newSet: Set<string> = new Set(set.values());
            if (newSet.has(_id)) {
              newSet.delete(_id);
            } else {
              newSet.add(_id);
            }
            return newSet;
          })
        }
      />
      <div className={styles.avatar}>{avatar}</div>
      <p className={styles.name}>{name}</p>
      <p className={styles.surname}>{surname}</p>
      <p className={styles.username}>{username || '-'}</p>
      <p className={styles.messengerid}>{messengerId}</p>
      <p className={styles.phone}>{phone || '-'}</p>
    </div>
  );
}
