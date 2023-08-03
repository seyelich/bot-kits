import React, { FC } from 'react';

import styles from './index.module.css';
import Button from '../../../../components/Button/Button';

const CreateMailing: FC = () => (
  <div className={styles.section}>
    <div className={styles.creation}>
      <div>2</div>
      <div>1</div>
    </div>
    <div className={styles.navigation}>
      <Button type="grey" text="ВЫЙТИ" disabled width={144} height={65} />
      <Button type="green" text="ДАЛЕЕ" disabled width={188} height={65} />
    </div>
  </div>
);

export default CreateMailing;
