import React, { FC, useState } from 'react';

import styles from './index.module.css';

import HorizontalIcon from '../../../../icons/others/Horizontal';
import VerticalIcon from '../../../../icons/others/Vertical';

const InlineButtons: FC = () => {
  const [horizontal, setHorizontal] = useState(false);
  const [vertical, setVertical] = useState(false);
  return (
    <div className={styles.block}>
      <p className={styles.block__title}>Инлайн кнопка</p>
      <div
        onClick={() => {
          setHorizontal(true);
          setVertical(false);
        }}
        className={`${styles.block__button} ${
          horizontal && styles.block__button_active
        }`}
      >
        <HorizontalIcon />
        <p>Горизонтальный инлайн</p>
      </div>
      <div
        onClick={() => {
          setHorizontal(false);
          setVertical(true);
        }}
        className={`${styles.block__button} ${
          vertical && styles.block__button_active
        }`}
      >
        <VerticalIcon />
        <p>Вертикальный инлайн</p>
      </div>
    </div>
  );
};

export default InlineButtons;
