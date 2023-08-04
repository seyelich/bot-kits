import React, { FC, useState } from 'react';

import styles from './index.module.css';

import CheckIcon from '../../../../icons/others/Check';

interface IFunnelsRow {
  el: string;
  key: number;
}
const FunnelsRow: FC<IFunnelsRow> = ({ el, key }) => {
  const [active, setActive] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setActive(!active)}
      key={key}
      className={styles.funnels__button}
    >
      {el}
      {active && <CheckIcon width={20} height={20} color="#243CBB" />}
    </button>
  );
};

export default FunnelsRow;
