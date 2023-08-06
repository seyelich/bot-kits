import Button from '../Button/Button';
import styles from './create-user.module.css';

export default function CreateUser() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Добавить пользователя</h2>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="name">
          <span className={styles.required}>Имя</span>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            placeholder="Введите имя"
          />
        </label>
        <label className={styles.label} htmlFor="surname">
          <span className={styles.required}>Фамилия</span>
          <input
            required
            type="text"
            id="surname"
            name="surname"
            className={styles.input}
            placeholder="Введите фамилию"
          />
        </label>
        <label className={styles.label} htmlFor="username">
          Юзернейм
          <input
            type="text"
            id="username"
            name="username"
            className={styles.input}
            placeholder="Введите юзернейм"
          />
        </label>
        <label className={styles.label} htmlFor="messengerId">
          <span className={styles.required}>ID пользователя</span>
          <input
            type="text"
            id="messengerId"
            name="messengerId"
            className={styles.input}
            placeholder="Введите ID пользователя"
          />
        </label>
        <div />
        <label className={styles.label} htmlFor="phone">
          Номер телефона
          <input
            type="text"
            id="phone"
            name="phone"
            className={styles.input}
            placeholder="Введите номер телефона"
          />
        </label>
        <div className={styles.buttons}>
          <Button type="grey" width={150} height={30}>
            СТЕРЕТЬ
          </Button>
          <Button type="blue" width={150} height={30}>
            ДОБАВИТЬ
          </Button>
        </div>
      </form>
    </div>
  );
}
