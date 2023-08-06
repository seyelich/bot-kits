/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import SearchInput from '../../components/search-input/search-input';
import IconButton from '../../components/icon-button/IconButton';

import moreIcon from './icons/more';
import styles from './share.module.css';
import TrashIcon from '../../icons/others/Trash';
import UploadIcon from '../../icons/others/Upload';
import DownloadIcon from '../../icons/others/Download';
import Button from '../../components/Button/Button';
import MyUsers from '../../components/my-users/my-users';
import { TUser } from '../../utils/types';
import PageControl from '../../components/page-control/page-control';
import PerPageSelector from '../../components/per-page-selector/per-page-selector';
import useFakeUsers from './use-fake-users';
import Modal from '../../components/modal/modal';
import CreateUser from '../../components/create-user/create-user';

function MoreIcon() {
  return (
    <>
      {moreIcon}
      {}
    </>
  );
}

export default function Share() {
  const [filter, setFilter] = useState<string>();
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [total, setTotal] = useState<number>(0);
  const [perPage, setPerPage] = useState<number>(10);
  const [current, setCurrent] = useState<number>(1);
  const [users, setUsers] = useState<Array<TUser>>([]);
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const { getUsers, removeUsers } = useFakeUsers();

  function refreshUsers() {
    const res = getUsers(perPage, (current - 1) * perPage);
    setUsers(res.users);
    setChecked(new Set());
    setTotal(res.total);
  }

  function deleteUsers() {
    removeUsers(Array.from(checked));
    refreshUsers();
  }

  useEffect(() => {
    if (current > 1 && current > Math.ceil(total / perPage)) setCurrent(1);
    refreshUsers();
  }, [current, perPage]);

  return (
    <>
      <div className={styles.title}>
        <h1 className={styles['title-text']}>Пользователи</h1>
        <Button
          type="green"
          text="ДОБАВИТЬ ПОЛЬЗОВАТЕЛЯ"
          width={237}
          height={46}
          extraClass={styles.greenbutton}
          onClick={() => setModalOpened(true)}
        />
      </div>
      <div className={styles.filter}>
        <SearchInput
          placeholder=""
          hasFilter
          width="34.8%"
          onChange={(evt) => {
            setFilter(evt.target.value);
          }}
        />
        <div className={styles['panel-buttons']}>
          <button type="button" className={styles['panel-button']}>
            {UploadIcon({ color: 'currentColor' })}
            Экспорт
          </button>
          <button type="button" className={styles['panel-button']}>
            {DownloadIcon({ color: 'currentColor' })}
            Импорт
          </button>
          <button
            type="button"
            className={styles['panel-button']}
            onClick={() => deleteUsers()}
          >
            {TrashIcon({ color: 'currentColor' })}
            Удалить
          </button>
          <IconButton width={24} height={24} icon={MoreIcon() as ReactNode} />
        </div>
      </div>
      <MyUsers users={users} checked={checked} setChecked={setChecked} />
      <div className={styles['page-control']}>
        <PageControl
          page={current}
          count={Math.ceil(total / perPage)}
          setCurrent={setCurrent}
        />
        <p className={styles['page-selector-label']}>Отображать по строкам:</p>
        <PerPageSelector perPage={perPage} setPerPage={setPerPage} />
      </div>
      {modalOpened && (
        <Modal onClose={() => setModalOpened(false)}>
          <CreateUser />
        </Modal>
      )}
    </>
  );
}
