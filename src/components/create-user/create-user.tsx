import { useRef, useState } from 'react';
import Button from '../Button/Button';
import styles from './create-user.module.css';
import CountrySelector from '../country-selector/country-selector';
import useForm from '../../hooks/useForm';
import { TUser } from '../../utils/types';
// import CloseIcon from '../../icons/others/Close';

type TCreateUserProps = {
  callback: (arg0: Omit<TUser, '_id'>) => void;
  onClose: () => void;
};

export default function CreateUser({ callback, onClose }: TCreateUserProps) {
  const initialValues = {
    name: '',
    surname: '',
    username: '',
    messengerId: '',
    phone: '',
  };
  const [country, setCountry] = useState<string>('');
  const { values, handleChange, setValues } = useForm(initialValues);
  const formRef = useRef<HTMLFormElement>(null);

  function handleAdd() {
    callback({
      name: values.name,
      surname: values.surname,
      username: values.username,
      messengerId: values.messengerId,
      phone: values.phone,
      country,
    });
    onClose();
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Добавить пользователя</h2>
      {/* <button
        type="button"
        className={styles['close-button']}
        onClick={onClose}
      >
        <CloseIcon />
      </button> */}
      <form className={styles.form} ref={formRef}>
        <label className={styles.label} htmlFor="name">
          <span className={styles.required}>Имя</span>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={styles.input}
            placeholder="Введите имя"
            value={values.name}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label} htmlFor="surname">
          <span className={styles.required}>Фамилия</span>
          <input
            type="text"
            id="surname"
            name="surname"
            required
            className={styles.input}
            placeholder="Введите фамилию"
            value={values.surname}
            onChange={handleChange}
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
            value={values.username}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label} htmlFor="messengerId">
          <span className={styles.required}>ID пользователя</span>
          <input
            type="text"
            id="messengerId"
            name="messengerId"
            required
            className={styles.input}
            placeholder="Введите ID пользователя"
            value={values.messengerId}
            onChange={handleChange}
          />
        </label>
        <CountrySelector value={country} setValue={setCountry} />
        <label className={styles.label} htmlFor="phone">
          Номер телефона
          <input
            type="text"
            id="phone"
            name="phone"
            className={styles.input}
            placeholder="Введите номер телефона"
            value={values.phone}
            onChange={handleChange}
          />
        </label>
        <div className={styles.buttons}>
          <Button
            type="grey"
            width={118}
            height={46}
            extraClass={styles['clear-button']}
            onClick={() => {
              setValues(initialValues);
              setCountry('');
            }}
          >
            СТЕРЕТЬ ВСЁ
          </Button>
          <Button
            type="blue"
            width={150}
            height={46}
            extraClass={styles['add-button']}
            // disabled={!formRef.current?.checkValidity()}
            disabled={!values.name || !values.surname || !values.messengerId}
            onClick={() => handleAdd()}
          >
            ДОБАВИТЬ
          </Button>
        </div>
      </form>
    </div>
  );
}
