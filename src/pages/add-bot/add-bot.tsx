import { useRef, useState } from 'react';
import styles from './add-bot.module.css';
import useForm from '../../hooks/use-form';
import fakeData from '../../components/selected-pages/selected-pages.fakedata';
import icons from './icons';
import AddBotForm, {
  TMessenger,
} from '../../components/add-bot-form/add-bot-form';
import AddBotDraggable from '../../components/add-bot-draggable/add-bot-draggable';

export default function AddBot() {
  const [messenger, setMessenger] = useState<TMessenger | null>(null);
  const { setValues } = useForm({
    name: '',
    key: '',
    uri: '',
  });
  const [pages, setPages] = useState<typeof fakeData>([]);

  const handleIconClick = (el: TMessenger) => {
    setMessenger(el);
    setValues({ name: '', key: '', uri: '' });
    setPages([]);
  };

  const ref = useRef<HTMLDivElement>(null);

  return (
    <main className={styles.container}>
      <h2 className={styles.title}>Добавить бота</h2>
      <AddBotDraggable childRef={ref}>
        <div className={styles.iconContainer} ref={ref}>
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
      </AddBotDraggable>
      {!messenger ? (
        <div className={styles.window}>
          <p className={styles.subTitle}>
            К какому мессенджеру подключим бота?
          </p>
          <p className={styles.par}>Выберите из предложенного списка</p>
        </div>
      ) : (
        <AddBotForm messenger={messenger} pages={pages} setPages={setPages} />
      )}
    </main>
  );
}
