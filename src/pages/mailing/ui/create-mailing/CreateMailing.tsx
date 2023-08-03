/* eslint-disable react/no-array-index-key */
import React, { FC, useEffect, useRef, useState } from 'react';

import styles from './index.module.css';
import Button from '../../../../components/Button/Button';
import TextInput from '../../../../components/input/input';
import CheckIcon from '../../../../icons/others/Check';
import BracketIcon from '../../../../icons/others/Bracket';
import EmojiIcon from '../../../../icons/others/Emoji';
import BoldIcon from '../../../../icons/others/Bold';
import DeleteIcon from '../../../../icons/others/Delete';
import ItalicIcon from '../../../../icons/others/Italic';
import CodeIcon from '../../../../icons/others/Code';
import SocialButton from '../social-button/SocialButton';
import ImageIcon from '../../../../icons/others/Image';
import VideoIcon from '../../../../icons/others/Video';
import MusicIcon from '../../../../icons/others/Music';
import ButtonIcon from '../../../../icons/others/Button';
import DownIcon from '../../../../icons/others/Down';

const funnels = ['Воронка 1', 'Воронка 2', 'Воронка 3'];

const CreateMailing: FC = () => {
  const wrapperRef = useRef(null);
  const [name, setName] = useState('Моя рассылка 1');
  const [text, setText] = useState(
    'Привет, {name}. Мы приготовили для тебя кое-что крутое 🔥'
  );
  const [activate, setActivate] = useState(false);
  const [notActivate, setNotActivate] = useState(false);
  const [showTextareaSettings, setShowTextareaSettings] = useState(false);
  const [photoActive, setPhotoActive] = useState(false);
  const [videoActive, setVideoActive] = useState(false);
  const [musicActive, setMusicActive] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);

  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowTextareaSettings(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(wrapperRef);
  return (
    <div className={styles.section}>
      <div className={styles.creation}>
        <div style={{ marginBottom: '2px' }}>
          <div className={styles.firstStep}>
            <p>{'1 Шаг >'}</p>
            <p>Создание рассылки</p>
          </div>
          <div>
            <TextInput
              name="mailing"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className={styles.list}>
              <p className={styles.list__text}>Список рассылки</p>
              <DownIcon width={16} height={16} />
            </div>
          </div>
        </div>
        <div className={styles.block}>
          <h5 className={styles.block__title}>Текст сообщения</h5>
          <div className={styles.textarea}>
            {showTextareaSettings && (
              <div className={styles.textarea__settings}>
                <BoldIcon />
                <ItalicIcon />
                <CodeIcon />
                <DeleteIcon color="#A6B3C9" />
              </div>
            )}
            <textarea
              ref={wrapperRef}
              name="12"
              id="12"
              placeholder="Введите текст"
              cols={30}
              rows={10}
              onClick={() => setShowTextareaSettings(true)}
              value={text}
              onChange={(e) => setText(e.target.value)}
              draggable={false}
              className={styles.textarea__input}
            />
            <div className={styles.textarea__footer}>
              <p style={{ margin: '0' }}>{text.length}/4096</p>
              <div className={styles.teaxtarea__icons}>
                <BracketIcon width={20} height={20} />
                <EmojiIcon width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.block}>
          <h5 className={styles.block__title}>Добавить</h5>
          <div className={styles.block__icons}>
            <SocialButton
              text="Фото"
              active={photoActive}
              onClick={() => setPhotoActive(true)}
              icon={<ImageIcon color="#fff" />}
            />
            <SocialButton
              text="Видео"
              active={videoActive}
              onClick={() => setVideoActive(true)}
              icon={<VideoIcon color="#fff" />}
            />
            <SocialButton
              text="Аудио"
              active={musicActive}
              onClick={() => setMusicActive(true)}
              icon={<MusicIcon color="#fff" />}
            />
            <SocialButton
              text="Кнопка"
              active={buttonActive}
              onClick={() => setButtonActive(true)}
              icon={<ButtonIcon color="#fff" />}
            />
          </div>
        </div>
        <div className={styles.block}>
          <h5 className={styles.block__title}>Активировать воронку</h5>
          <div className={styles.activation}>
            <div className={styles.activation__block}>
              <button
                className={
                  notActivate
                    ? `${styles.activation__button} ${styles.activation__button_disabled}`
                    : styles.activation__button
                }
                type="button"
                onClick={() => {
                  setActivate(!activate);
                  setNotActivate(false);
                }}
                disabled={notActivate}
              >
                <p style={{ margin: '0' }}>Активировать</p>
                {activate && (
                  <CheckIcon color="#243CBB" width={16} height={16} />
                )}
              </button>
              {activate && (
                <div className={styles.funnels}>
                  {funnels.map((el, i) => (
                    <button
                      type="button"
                      key={i}
                      className={styles.funnels__button}
                    >
                      {el}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              className={
                activate
                  ? `${styles.activation__button} ${styles.activation__button_disabled}`
                  : styles.activation__button
              }
              type="button"
              onClick={() => {
                setActivate(false);
                setNotActivate(!notActivate);
              }}
              disabled={activate}
            >
              <p style={{ margin: '0' }}> Не активировать</p>
              {notActivate && (
                <CheckIcon color="#243CBB" width={16} height={16} />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        <Button type="grey" text="ВЫЙТИ" disabled width={144} height={65} />
        <Button type="green" text="ДАЛЕЕ" disabled width={188} height={65} />
      </div>
    </div>
  );
};

export default CreateMailing;
