/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import SearchInput from '../../ui/inputs/search-input/search-input';
import IconButton from '../../ui/buttons/icon-button/icon-button';
import styles from './share.module.css';
import TrashIcon from '../../ui/icons/others/trash';
import UploadIcon from '../../ui/icons/others/upload';
import DownloadIcon from '../../ui/icons/others/download';
import Button from '../../ui/buttons/button/button';
import MyUsers from '../../components/my-users/my-users';
import { TUser } from '../../utils/types';
import PageControl from '../../components/page-control/page-control';
import PerPageSelector from '../../components/per-page-selector/per-page-selector';
import useFakeUsers from '../../hooks/use-fake-users';
import Modal from '../../ui/modal/modal';
import CreateUser from '../../components/create-user/create-user';
import useModal from '../../hooks/use-modal';
import MoreButtonIcon from '../../ui/icons/others/more-button';

export default function Share() {
  const [filter, setFilter] = useState<string>();
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [total, setTotal] = useState<number>(0);
  const [perPage, setPerPage] = useState<number>(10);
  const [current, setCurrent] = useState<number>(1);
  const [users, setUsers] = useState<Array<TUser>>([]);
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const { getUsers, removeUsers, addUser } = useFakeUsers();
  const { isModalOpen, openModal, closeModal } = useModal();

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
  }, [current, perPage, modalOpened]);

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1 className={styles['title-text']}>Пользователи</h1>
        <Button
          type="green"
          text="ДОБАВИТЬ ПОЛЬЗОВАТЕЛЯ"
          width={237}
          height={46}
          extraClass={styles.greenbutton}
          onClick={openModal}
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
          <IconButton
            width={24}
            height={24}
            icon={<MoreButtonIcon color="#A6B3C9" />}
          />
        </div>
      </div>
      <MyUsers
        users={users}
        checked={checked}
        setChecked={setChecked}
        openModal={openModal}
      />
      <div className={styles['page-control']}>
        <PageControl
          page={current}
          count={Math.ceil(total / perPage)}
          setCurrent={setCurrent}
        />
        <div className={styles['row-number']}>
          <p className={styles['page-selector-label']}>
            Отображать по строкам:
          </p>
          <PerPageSelector perPage={perPage} setPerPage={setPerPage} />
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <CreateUser callback={addUser} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
}
