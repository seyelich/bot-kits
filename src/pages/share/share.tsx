/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, useEffect, useState } from 'react';
import SearchInput from '../../components/search-input/search-input';
import IconButton from '../../components/icon-button/IconButton';

import moreIcon from './icons/more';
import styles from './share.module.css';
import TrashIcon from '../../icons/others/Trash';
import UploadIcon from '../../icons/others/Upload';
import DownloadIcon from '../../icons/others/Download';
import Button from '../../components/Button/Button';
import getFakeUsers from './get-fake-users';
import MyUsers from '../../components/my-users/my-users';
import { TUser } from '../../utils/types';
import PageControl from '../../components/page-control/page-control';

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

  useEffect(() => {
    const res = getFakeUsers(perPage, (current - 1) * perPage);
    setUsers(res.users);
    setTotal(res.total);
  }, [current]);

  return (
    <>
      <div className={styles.title}>
        <h1>Пользователи</h1>
        <Button type="green" text={filter || ''} width={237} height={46} />
      </div>
      <div className={styles['top-panel']}>
        <div className={styles.filter}>
          <SearchInput
            placeholder=""
            hasFilter
            onChange={(evt) => {
              setFilter(evt.target.value);
            }}
          />
        </div>
        <div className={styles['panel-buttons']}>
          <button type="button" className={styles['panel-button']}>
            {UploadIcon({ color: 'var(--primary-text-color)' })}
            Экспорт
          </button>
          <button type="button" className={styles['panel-button']}>
            {DownloadIcon({ color: 'var(--primary-text-color)' })}
            Импорт
          </button>
          <button type="button" className={styles['panel-button']}>
            {TrashIcon({ color: 'var(--primary-text-color)' })}
            Удалить
          </button>
          <IconButton width={24} height={24} icon={MoreIcon() as ReactNode} />
        </div>
      </div>
      <MyUsers users={users} checked={checked} setChecked={setChecked} />
      <PageControl
        page={current}
        count={Math.ceil(total / perPage)}
        setCurrent={setCurrent}
      />
    </>
  );
}
