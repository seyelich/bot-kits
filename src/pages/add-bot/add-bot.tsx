import { useState } from 'react';
import styles from './add-bot.module.css';
import useForm from '../../hooks/useForm';
import TutorialButton from '../../components/tutorial-button/TutorialButton';
import Arrow24x24 from '../../components/icons/Arrow24x24/Arrow24x24';
import fakeData from '../../components/selected-pages/selected-pages.fakedata';
import icons from './icons';
import AddBotForm, {
  TMessenger,
} from '../../components/add-bot-form/add-bot-form';

export default function AddBot() {
  const [messenger, setMessenger] = useState<TMessenger | null>(null);
  const { setValues } = useForm({
    name: '',
    key: '',
    uri: '',
  });

  const [isActive, setIsActive] = useState(false);
  const [pages, setPages] = useState<typeof fakeData>([]);

  const handleIconClick = (el: TMessenger) => {
    setMessenger(el);
    setValues({ name: '', key: '', uri: '' });
    setPages([]);
  };

  return (
    <main className={styles.container}>
      <h2 className={styles.title}>Добавить бота</h2>
      <div className={styles.iconContainer}>
        {icons.map((el) => (
          <button
            type="button"
            className={styles.iconBtn}
            onClick={() => handleIconClick(el)}
            key={el.name}
          >
            {messenger
              ? el.name === messenger.name
                ? el.node(52, 52, 'common')
                : el.node(52, 52, 'disabled')
              : el.node(52, 52, 'blue')}
            {el.name}
          </button>
        ))}
      </div>
      {!messenger ? (
        <div className={styles.window}>
          <p className={styles.subTitle}>
            К какому мессенджеру подключим бота?
          </p>
          <p className={styles.par}>Выберите из предложенного списка</p>
        </div>
      ) : (
        <>
          <AddBotForm messenger={messenger} pages={pages} setPages={setPages} />
          <div className={styles.tutorContainer}>
            <p className={styles.tutorPar}>
              Как это работает?
              <button
                onClick={() => setIsActive(!isActive)}
                className={`${styles.arrowBtn} ${
                  isActive && styles.arrowBtn_active
                }`}
                type="button"
              >
                <Arrow24x24 />
              </button>
            </p>
            {isActive && (
              <>
                <TutorialButton type="instruction" />
                <TutorialButton type="video" />
              </>
            )}
          </div>
        </>
      )}
    </main>
  );
}
