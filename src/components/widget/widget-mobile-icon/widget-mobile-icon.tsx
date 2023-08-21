import React, { FC } from 'react';

import styles from './index.module.css';

import BotLogoIcon from '../../../ui/icons/others/bot-logo';

interface IWidgetMobileIcon {
  setHideSection: (arg: boolean) => void;
  bottom: string;
}

const WidgetMobileIcon: FC<IWidgetMobileIcon> = ({
  setHideSection,
  bottom,
}) => (
  <div
    className={styles.icon}
    onClick={() => setHideSection(false)}
    style={{ bottom }}
  >
    <BotLogoIcon width={35} height={35} />
  </div>
);

export default WidgetMobileIcon;
