import Button from '../button/button';
import styles from './popup-promocode.module.css';
import TextInput from '../input/input';
import useForm from '../../hooks/use-form';

type TPopupProps = {
  onClose: () => void;
};

export default function PopupPromocode({ onClose }: TPopupProps) {
  const { values, handleChange } = useForm({ promoInput: '' });
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Активация промокода</h3>
      <form className={styles.form} onSubmit={onSubmit}>
        <TextInput
          name="promoInput"
          placeholder="Введите промокод"
          onChange={handleChange}
          value={values.promoInput}
        />
        <Button
          type="blue"
          text="АКТИВИРОВАТЬ"
          width={320}
          height={46}
          buttonHtmlType="submit"
        />
      </form>
    </div>
  );
}
