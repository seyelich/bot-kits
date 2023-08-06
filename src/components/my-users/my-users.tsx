/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import { Dispatch, SetStateAction } from 'react';
import { TUser } from '../../utils/types';
import UserRow from '../user-row/user-row';

import styles from './my-users.module.css';
import UserCheckbox from '../user-checkbox/user-checkbox';

type TMyUsersProps = {
  users: Array<TUser>;
  checked: Set<string>;
  setChecked: Dispatch<SetStateAction<Set<string>>>;
};

export default function MyUsers({ users, checked, setChecked }: TMyUsersProps) {
  function handleCheckAll() {
    if (users.length === checked.size) {
      setChecked(new Set());
    } else {
      const res = new Set<string>();
      users.forEach((user) => res.add(user._id));
      setChecked(res);
    }
  }

  const elements = users.map((user) => (
    <UserRow
      {...user}
      checked={checked.has(user._id)}
      setChecked={setChecked}
      key={user._id}
    />
  ));
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Мои пользователи</h2>
      <div className={styles['table-head']}>
        <UserCheckbox
          check={checked.size > 0 && users.length === checked.size}
          onClick={() => handleCheckAll()}
        />
        <p className={styles['table-head__text']}>Имя</p>
        <p className={styles['table-head__text']}>Фамилия</p>
        <p className={styles['table-head__text']}>Юзернейм</p>
        <p className={styles['table-head__text']}>ID в мессенджере</p>
        <p className={`${styles['table-head__text']} ${styles['last-column']}`}>
          Телефон
        </p>
      </div>
      {elements}
    </div>
  );
}
