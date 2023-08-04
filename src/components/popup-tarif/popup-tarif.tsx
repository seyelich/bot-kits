// import { Button } from '../Button/Button';
import { CheckIcon } from '../../icons/others/Check';
import { CloseIcon } from '../../icons/others/Close';
import { Button } from '../Button/Button';
import ButtonTarif from '../button-tarif/button-tarif';
import launch from '../../images/launch.svg';
import styles from './popup-tarif.module.css';

export default function PopupTarif() {
  return (
    <section className={styles.popup}>
      <div className={styles.container}>
        <div className={styles.launch_container}>
          <img src={launch} alt="launch" />
        </div>
        <button type="button" className={styles.button_close}>
          <CloseIcon />
        </button>
        <h2 className={styles.title}>ПОДПИСАТЬСЯ</h2>
        <div className={styles.menu_container}>
          <div className={styles.menu}>
            <h3 className={styles.menu_title}>
              Выбери тариф
              <span className={styles.check_container}>
                <CheckIcon color="#00E98F" />
              </span>
            </h3>
            <div className={styles.buttons_container}>
              <ButtonTarif tarif="Старт" price={390} />
              <ButtonTarif tarif="Стандарт" price={790} />
              <ButtonTarif tarif="Бизнес" price={1390} />
            </div>
            <p className={styles.text}>
              Цены на тарифы указаны за 1 месяц пользования.
            </p>
            <p className={styles.comment}>
              Оплата будет автоматически взиматься каждый месяц до тех пор, пока
              вы не отмените подписку.
            </p>
          </div>
        </div>
        <div className={styles.payment_container}>
          <div className={styles.payment_info}>
            <p className={styles.payment_text}>К оплате:</p>
            <p className={styles.payment_check}>
              <span className={styles.payment_value}>390</span> руб
            </p>
          </div>
          {/* <div className={styles.payment_detail}>{" "}</div> */}
          <div className={styles.payment_buttons}>
            <div>Кнопка юкассы</div>
            <Button text="ЗАПРОСИТЬ СЧЕТ" type="blue" width={201} height={64} />
          </div>
        </div>
      </div>
    </section>
  );
}
