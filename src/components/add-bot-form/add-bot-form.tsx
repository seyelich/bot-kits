import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '../../ui/buttons/button/button';
import TextInput from '../../ui/inputs/input/input';
import SelectedPages from '../selected-pages/selected-pages';
import styles from './add-bot-form.module.css';
import useForm from '../../hooks/use-form';
import fakeData from '../../services/selected-pages-fake-data';
import pageStyles from '../../pages/add-bot/add-bot.module.css';
import AddBotTutorials from '../add-bot-tutorials/add-bot-tutorials';

export type TMessenger = {
  node: (
    width: number,
    height: number,
    type: 'blue' | 'common' | 'disabled'
  ) => JSX.Element;
  name: string;
};

type TAddBotForm = {
  messenger: TMessenger;
  // @todo replace fake data
  pages: typeof fakeData;
  setPages: Dispatch<SetStateAction<typeof fakeData>>;
};

export default function AddBotForm({
  messenger,
  pages,
  setPages,
}: TAddBotForm) {
  const { values, handleChange, setValues } = useForm({
    name: '',
    key: '',
    uri: '',
  });

  const navigate = useNavigate();

  const [count, setCount] = useState(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setValues({ name: '', key: '', uri: '' });
    setPages([]);
    setCount(0);
    navigate('/bot-builder');
    // eslint-disable-next-line no-console
    console.log('Bot has been added');
  };

  return (
    <div className={styles.windowContainer}>
      <div className={`${styles.botName} ${styles.botName_type_mobile}`}>
        Бот будет создан на основе
        <span className={styles.botNameSpan}> BotName</span>
      </div>
      <div className={`${pageStyles.window} ${styles.window_color_white}`}>
        <div className={styles.nameContainer}>
          {messenger.node(25, 25, 'common')}
          <p className={styles.subTitle}>{messenger.name}</p>
          <div className={styles.botName}>
            Бот будет создан на основе
            <span className={styles.botNameSpan}> BotName</span>
          </div>
        </div>
        <form
          className={`${styles.form} ${
            messenger.name === 'Viber' && styles.form_type_viber
          }`}
          onSubmit={handleSubmit}
        >
          {messenger.name === 'Viber' ? (
            <>
              <div className={styles.step}>
                <p className={styles.stepText}>
                  <span className={styles.span}>1 Шаг &gt;</span>
                  Ключ доступа
                </p>
                <TextInput
                  placeholder="Введите ключ доступа"
                  name="key"
                  onChange={handleChange}
                  value={values.key}
                />
              </div>
              <div className={styles.step}>
                <p className={styles.stepText}>
                  <span className={styles.span}>2 Шаг &gt;</span>
                  URI бота
                </p>
                <TextInput
                  placeholder="Введите URI"
                  name="uri"
                  onChange={handleChange}
                  value={values.uri}
                />
              </div>
              <div className={styles.step}>
                <p className={styles.stepText}>
                  <span className={styles.span}>3 Шаг &gt;</span>
                  Название бота
                </p>
                <TextInput
                  placeholder="Введите название"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                />
              </div>
            </>
          ) : (
            <>
              {messenger.name === 'Telegram' ? (
                <div className={`${styles.step} ${styles.step_type_upload}`}>
                  <p className={styles.stepText}>
                    <span className={styles.span}>1 Шаг &gt;</span>
                    Ключ доступа
                  </p>
                  <TextInput
                    placeholder="Введите ключ доступа"
                    name="key"
                    onChange={handleChange}
                    value={values.key}
                  />
                </div>
              ) : (
                <div className={`${styles.step} ${styles.step_type_upload}`}>
                  <p className={styles.stepText}>
                    <span className={styles.span}>1 Шаг &gt;</span>
                    Загрузить страницу
                  </p>
                  <SelectedPages
                    pages={pages}
                    setPages={setPages}
                    count={count}
                    setCount={setCount}
                  />
                </div>
              )}
              <div className={styles.step}>
                <p className={styles.stepText}>
                  <span className={styles.span}>2 Шаг &gt;</span>
                  Название бота
                </p>
                <TextInput
                  placeholder="Введите название"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                />
              </div>
            </>
          )}
          {window.innerWidth >= 768 ? (
            <Button
              buttonHtmlType="submit"
              type="green"
              width={272}
              height={65}
              extraClass={`${styles.btn} ${
                messenger.name === 'Viber' && styles.btn_type_viber
              }`}
              disabled={
                (values.name.length ||
                  values.name.length ||
                  values.name.length) === 0
              }
            >
              <p className={styles.btnText}>СОЗДАТЬ БОТА</p>
            </Button>
          ) : (
            <Button
              buttonHtmlType="submit"
              type="green"
              width={256}
              height={65}
              extraClass={`${styles.btn} ${
                messenger.name === 'Viber' && styles.btn_type_viber
              }`}
              disabled={
                (values.name.length ||
                  values.name.length ||
                  values.name.length) === 0
              }
            >
              <p className={styles.btnText}>СОЗДАТЬ БОТА</p>
            </Button>
          )}
        </form>
      </div>
      <AddBotTutorials />
    </div>
  );
}
