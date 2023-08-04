/* eslint-disable no-plusplus */
import { Dispatch, ReactNode, SetStateAction, useMemo } from 'react';
import styles from './page-control.module.css';

type TPageControlProps = {
  page: number;
  count: number;
  setCurrent: Dispatch<SetStateAction<number>>;
};

export default function PageControl({
  page,
  count,
  setCurrent,
}: TPageControlProps) {
  const pages = useMemo(() => {
    const res: ReactNode[] = [];
    for (let i = 1; i <= count; i++) {
      const style =
        page === i ? `${styles.page} ${styles.page_active}` : styles.page;
      res.push(
        <button
          type="button"
          key={i}
          className={style}
          onClick={() => setCurrent(i)}
        >
          {i}
        </button>
      );
    }
    return res;
  }, [count, page]);
  return <div className={styles.container}>{pages}</div>;
}
