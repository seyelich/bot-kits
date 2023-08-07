import { MouseEventHandler } from 'react';
import styles from './button-tarif.module.css';

interface IButton {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  tarif: string;
  price: number;
}

export default function ButtonTarif({ onClick, tarif, price }: IButton) {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
      data-name={tarif}
      data-price={price}
    >
      <h4 className={styles.tarif_name}>{tarif}</h4>
      <div className={styles.price_container}>
        <p className={styles.tarif_price}>{price}</p>
        <p className={styles.tarif_currency}>руб</p>
      </div>
    </button>
  );
}
