/* eslint-disable no-underscore-dangle */
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { TUser } from '../../utils/types';
import UserRow from '../user-row/user-row';

import styles from './my-users.module.css';
import UserCheckbox from '../user-checkbox/user-checkbox';
import Button from '../../ui/buttons/button/button';

type TMyUsersProps = {
  users: Array<TUser>;
  checked: Set<string>;
  setChecked: Dispatch<SetStateAction<Set<string>>>;
  openModal: () => void;
};

export default function MyUsers({
  users,
  checked,
  setChecked,
  openModal,
}: TMyUsersProps) {
  const [checking, setChecking] = useState<boolean>(false);
  function handleCheckAll() {
    if (users.length === checked.size) {
      setChecked(new Set());
    } else {
      const res = new Set<string>();
      users.forEach((user) => res.add(user._id));
      setChecked(res);
    }
  }

  useEffect(() => {
    setChecked(new Set());
  }, [checking]);

  const elements = users.map((user) => (
    <UserRow
      {...user}
      checked={checked.has(user._id)}
      setChecked={setChecked}
      key={user._id}
      checking={checking}
    />
  ));
  return (
    <div className={styles.container}>
      <div className={styles['title-container']}>
        <h2 className={styles.title}>Мои пользователи</h2>
        <button
          type="button"
          className={styles['check-button']}
          onClick={() => setChecking(!checking)}
        >
          {checking ? 'Отменить' : 'Выбрать'}
        </button>
      </div>
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
      <Button
        type="green"
        text="ДОБАВИТЬ ПОЛЬЗОВАТЕЛЯ"
        width={272}
        height={56}
        extraClass={styles.greenbutton}
        onClick={openModal}
      />
    </div>
  );
}
