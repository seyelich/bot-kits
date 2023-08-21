import React, { FC, useState } from 'react';

import styles from './index.module.css';
import CheckIcon from '../../ui/icons/others/check';

interface IListsRow {
  el: string;
}

const ListsRow: FC<IListsRow> = ({ el }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={styles.select__listElement}
      onClick={() => setActive(!active)}
    >
      {el}
      {active && <CheckIcon width={20} height={20} color="#243CBB" />}
    </div>
  );
};

export default ListsRow;
