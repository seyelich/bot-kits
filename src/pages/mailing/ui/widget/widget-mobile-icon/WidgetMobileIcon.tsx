import React, { FC } from 'react';

import styles from './index.module.css';

import BotLogoIcon from '../../../../../icons/others/BotLogo';

interface IWidgetMobileIcon {
  setHideSection: (arg: boolean) => void;
}

const WidgetMobileIcon: FC<IWidgetMobileIcon> = ({ setHideSection }) => (
  <div className={styles.icon} onClick={() => setHideSection(false)}>
    <BotLogoIcon width={35} height={35} />
  </div>
);

export default WidgetMobileIcon;
