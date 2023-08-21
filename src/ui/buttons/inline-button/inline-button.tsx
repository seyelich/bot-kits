import React, { FC, useState } from 'react';

import styles from './index.module.css';

import HorizontalIcon from '../../icons/others/horizontal';
import VerticalIcon from '../../icons/others/vertical';
import CheckIcon from '../../icons/others/check';

const InlineButtons: FC = () => {
  const [horizontal, setHorizontal] = useState(false);
  const [vertical, setVertical] = useState(false);
  const [horizontalValue, setHorizontalValue] = useState('');
  const [verticalValue, setVerticalValue] = useState('');
  return (
    <div className={styles.block}>
      <p className={styles.block__title}>Инлайн кнопка</p>
      <div
        onClick={() => {
          setHorizontal(!horizontal);
          setVertical(false);
        }}
        className={`${styles.block__button} ${
          horizontal && styles.block__button_active
        }`}
      >
        <div className={styles.block__text}>
          <HorizontalIcon />
          <p>Горизонтальный инлайн</p>
        </div>
        {horizontal && (
          <div className={styles.block__icon}>
            <CheckIcon color="#243CBB" width={16} height={16} />
          </div>
        )}
      </div>
      {horizontal && (
        <input
          type="text"
          placeholder="Введите название"
          value={horizontalValue}
          onChange={(e) => setHorizontalValue(e.target.value)}
          className={styles.block__input}
        />
      )}
      <div
        onClick={() => {
          setHorizontal(false);
          setVertical(!vertical);
        }}
        className={`${styles.block__button} ${
          vertical && styles.block__button_active
        }`}
      >
        <div className={styles.block__text}>
          <VerticalIcon />
          <p>Вертикальный инлайн</p>
        </div>
        {vertical && (
          <div className={styles.block__icon}>
            <CheckIcon color="#243CBB" width={16} height={16} />
          </div>
        )}
      </div>
      {vertical && (
        <input
          type="text"
          placeholder="Введите название"
          value={verticalValue}
          onChange={(e) => setVerticalValue(e.target.value)}
          className={styles.block__input}
        />
      )}
    </div>
  );
};

export default InlineButtons;
