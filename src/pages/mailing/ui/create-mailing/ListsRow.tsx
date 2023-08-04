import React, { FC, useState } from 'react';

import styles from './index.module.css';
import CheckIcon from '../../../../icons/others/Check';

interface IListsRow {
  el: string;
  key: number;
}

const ListsRow: FC<IListsRow> = ({ el, key }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={styles.select__listElement}
      key={key}
      onClick={() => setActive(!active)}
    >
      {el}
      {active && <CheckIcon width={20} height={20} color="#243CBB" />}
    </div>
  );
};

export default ListsRow;
