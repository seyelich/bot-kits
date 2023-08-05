import Button from '../Button/Button';
import styles from './popup-promocode.module.css';
import CloseIcon from '../../icons/others/Close';

type TPopupProps = {
  onClose: () => void;
};

export default function PopupPromocode({ onClose }: TPopupProps) {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.button_close} onClick={onClose}>
        <CloseIcon />
      </button>
      <h2 className={styles.title}>Активация промокода</h2>
      <form className={styles.form}>
        <input />
        <Button type="blue" text="АКТИВИРОВАТЬ" width={320} height={46} />
      </form>
    </div>
  );
}
