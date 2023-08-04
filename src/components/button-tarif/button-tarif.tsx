import styles from './button-tarif.module.css';

interface IButton {
  // type?: 'blue' | 'green' | 'grey';
  onClick?: VoidFunction;
  disabled?: boolean;
  tarif: string;
  price: number;
}

export default function ButtonTarif({
  // type,
  onClick,
  disabled,
  tarif,
  price,
}: IButton) {
  return (
    <button
      type="button"
      className={styles.button}
      // className={`${styles.button} ${
      //   type === 'blue'
      //     ? `${styles.button_blue} ${disabled ? styles.button_blue_disabled : ''}`
      //     : type === 'grey'
      //     ? `${styles.button_grey} ${disabled ? styles.button_grey_disabled : ''}`
      //     : `${styles.button_green} ${disabled ? styles.button_green_disabled : ''}`
      // }  `}
      onClick={onClick}
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      disabled={disabled}
    >
      {/* <p style={{ opacity: disabled && type === 'green' ? '.4' : undefined, margin: "0" }}>
        {tarif}
      </p> */}
      <p className={styles.tarif_name}>{tarif}</p>
      <div className={styles.price_container}>
        <p className={styles.tarif_price}>{price}</p>
        <p className={styles.tarif_currency}>руб</p>
      </div>
    </button>
  );
}
