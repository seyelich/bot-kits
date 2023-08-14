import React, { FC } from 'react';

import styles from './index.module.css';

const FirstMailing: FC = () => (
  <div className={styles.content}>
    <h2 className={styles.content__title}>
      Давайте скорее запустим вашу первую рассылку!
    </h2>
    <p className={styles.content__subtitle}>
      Нажмите на кнопку “создать рассылку”
    </p>
  </div>
);

export default FirstMailing;
