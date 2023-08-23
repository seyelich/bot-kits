import type { Meta, StoryObj } from '@storybook/react';

import PopupTarif from './popup-tarif';
import IconButton from '../../ui/buttons/icon-button/icon-button';
import CloseIcon from '../../ui/icons/others/close';
import styles from './popup-tarif.stories.module.css';

const meta: Meta<typeof PopupTarif> = {
  title: 'UI/Popups/PopupTarif',
  component: PopupTarif,
};

export default meta;

type Story = StoryObj<typeof PopupTarif>;

export const Primary: Story = {
  render: () => (
    <div className={styles.container}>
      <div className={styles.button_close}>
        <IconButton
          width={24}
          height={24}
          icon={CloseIcon({ color: '#060C23' })}
        />
      </div>
      <PopupTarif />
    </div>
  ),
};
