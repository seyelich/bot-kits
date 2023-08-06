import { Dispatch, SetStateAction, useState } from 'react';
import ChevronBigIcon from '../../icons/others/ChevronBig';

import styles from './per-page-selector.module.css';

type TProps = {
  perPage: number;
  setPerPage: Dispatch<SetStateAction<number>>;
};

export default function PerPageSelector({ perPage, setPerPage }: TProps) {
  const [opened, setOpened] = useState<boolean>(false);

  function selectPerPage(value: number) {
    setPerPage(value);
    setOpened(false);
  }

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.button}
        onClick={() => setOpened((value) => !value)}
      >
        {perPage}
        <ChevronBigIcon />
      </button>
      <div
        className={
          opened ? `${styles.panel} ${styles['panel-active']}` : styles.panel
        }
      >
        <button
          type="button"
          className={styles.panel__button}
          onClick={() => selectPerPage(10)}
        >
          10
        </button>
        <button
          type="button"
          className={styles.panel__button}
          onClick={() => selectPerPage(20)}
        >
          20
        </button>
        <button
          type="button"
          className={styles.panel__button}
          onClick={() => selectPerPage(30)}
        >
          30
        </button>
      </div>
    </div>
  );
}
