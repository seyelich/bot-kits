import type { Meta, StoryObj } from '@storybook/react';

import IconButton from '../../ui/buttons/icon-button/icon-button';
import CloseIcon from '../../ui/icons/others/close';
import styles from './popup-promocode.stories.module.css';
import PopupPromocode from './popup-promocode';

const meta: Meta<typeof PopupPromocode> = {
  title: 'UI/Popups/PopupPromocode',
  component: PopupPromocode,
};

export default meta;

type Story = StoryObj<typeof PopupPromocode>;

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
      <PopupPromocode onClose={() => {}} />
    </div>
  ),
};
