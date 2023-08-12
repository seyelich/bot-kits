import { MouseEvent, useState } from 'react';
import CheckIcon from '../../icons/others/check';
import Button from '../button/button';
import ButtonTarif from '../button-tarif/button-tarif';
import launch from '../../images/launch.svg';
import styles from './popup-tarif.module.css';
import LogoUkassa from '../../icons/others/logo-ukassa';
import { tariffs } from '../../services/subcriription-fake-data';

export default function PopupTarif() {
  const [bill, setBill] = useState(0);
  const [chosenTarif, setChosenTarif] = useState<string | null>(null);

  function onClick(e: MouseEvent) {
    const currentButton = e.currentTarget;
    const { price, name } = (
      currentButton as EventTarget &
        Element & { dataset: { price: string; name: string } }
    ).dataset;
    setBill(+price);
    setChosenTarif(name);
  }
  return (
    <div className={styles.container}>
      <div className={styles.circle} />
      <div className={styles.launch_container}>
        <img src={launch} alt="launch" />
      </div>
      <h2 className={styles.title}>ПОДПИСАТЬСЯ</h2>
      <div className={styles.menu_container}>
        <div className={styles.menu}>
          <h4 className={styles.menu_title}>
            Выбери тариф
            <span className={styles.check_container}>
              <CheckIcon color="#00E98F" />
            </span>
          </h4>
          <div className={styles.buttons_container}>
            {tariffs.map((tarif) => (
              <ButtonTarif
                tarif={tarif.name}
                price={tarif.price}
                key={tarif.id}
                onClick={(e: MouseEvent) => onClick(e)}
                active={chosenTarif === tarif.name}
              />
            ))}
          </div>
          <p className={`${styles.text} ${styles.text_m_size}`}>
            Цены на тарифы указаны за 1 месяц пользования.
          </p>
          <p className={`${styles.comment} ${styles.text_m_size}`}>
            Оплата будет автоматически взиматься каждый месяц до тех пор, пока
            вы не отмените подписку.
          </p>
        </div>
      </div>
      <div className={styles.payment_container}>
        <div className={styles.payment_detail}>
          <div className={styles.payment_info}>
            <p className={styles.payment_text}>К оплате:</p>
            <p className={styles.payment_check}>
              <span className={styles.payment_value}>{bill}</span> руб
            </p>
          </div>
          <div className={styles.payment_buttons}>
            <Button type="blue" text="ОПЛАТИТЬ ЧЕРЕЗ" width={301} height={64}>
              <p className={styles.button_kassa_text}>
                ОПЛАТИТЬ ЧЕРЕЗ
                <span className={styles.logo_kassa}>
                  <LogoUkassa />
                </span>
              </p>
            </Button>
            <Button
              text="ЗАПРОСИТЬ СЧЕТ"
              type="grey"
              width={201}
              height={64}
              extraClass={styles.button_bill}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
