import Button from '../../components/Button/Button';
import DoneIcon from '../../icons/others/Done';
import FitIcon from '../../icons/others/Fit';
import MinusIcon from '../../icons/others/Minus';
import PageIcon from '../../icons/others/Page';
import PlusIcon from '../../icons/others/Plus';
import TagIcon from '../../icons/others/Tag';
import FacebookIcon from '../../icons/social/facebook';
import styles from './bot-builder.module.css';

export default function BotBuilder() {
  return (
    <div className={styles.main}>
      <Button
        type="green"
        width={60}
        height={60}
        extraClass={styles.plusButton}
      >
        <PlusIcon />
      </Button>
      <div className={styles.header}>
        <div className={styles.header__title}>
          <FacebookIcon type="common" width={24} height={24} />
          <h4 className={styles.header__titleText}>Название бота</h4>
          <DoneIcon width={20} height={20} color="#A6B3C9" />
        </div>
        <div className={styles.header__panel}>
          <div className={styles.header__buttons}>
            <Button
              text="ОСТАНОВИТЬ"
              type="grey"
              width={151}
              height={48}
            />
            <Button
              text="ТЕСТИРОВАТЬ"
              type="green"
              width={151}
              height={48}
            />
          </div>
          <div className={styles.header__icon}>
            <TagIcon />
          </div>
        </div>
      </div>
      <div className={styles.buttons__mobile}>
        <Button
          text="ОСТАНОВИТЬ"
          type="grey"
          width={155}
          height={48}
        />
        <Button
          text="ТЕСТИРОВАТЬ"
          type="green"
          width={155}
          height={48}
        />
      </div>

      <div className={styles.scaleControlPanel}>
        <p className={styles.scaleControlPanel_text}>100%</p>
        <Button
          width={24}
          height={24}
          type="grey"
          extraClass={styles.scaleControlPanel_button}
        >
          <PlusIcon />
        </Button>
        <Button
          width={24}
          height={24}
          type="grey"
          extraClass={styles.scaleControlPanel_button}
        >
          <MinusIcon />
        </Button>

        <Button
          width={24}
          height={24}
          type="grey"
          extraClass={styles.scaleControlPanel_button}
        >
          <FitIcon />
        </Button>

        <Button
          width={24}
          height={24}
          type="grey"
          extraClass={styles.scaleControlPanel_button}
        >
          <PageIcon />
        </Button>
      </div>
    </div>
  );
}
