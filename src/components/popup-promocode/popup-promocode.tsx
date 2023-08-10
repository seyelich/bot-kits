import Button from '../Button/Button';
import styles from './popup-promocode.module.css';
import CloseIcon from '../../icons/others/Close';
import TextInput from '../input/input';
import useForm from '../../hooks/useForm';

type TPopupProps = {
  onClose: () => void;
};

export default function PopupPromocode({ onClose }: TPopupProps) {
  const { values, handleChange } = useForm({ promoInput: '' });

  return (
    <div className={styles.container}>
      <button type="button" className={styles.button_close} onClick={onClose}>
        <CloseIcon />
      </button>
      <h3 className={styles.title}>Активация промокода</h3>
      <form className={styles.form}>
        <TextInput
          name="promoInput"
          placeholder="Введите промокод"
          onChange={handleChange}
          value={values.promoInput}
        />
        <Button
          type="blue"
          buttonHtmlType='button'
          text="АКТИВИРОВАТЬ"
          width={320}
          height={46}
          onClick={onClose}
        />
      </form>
    </div>
  );
}
