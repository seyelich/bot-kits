/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { FC, useEffect, useRef, useState } from 'react';

import { useNavigate } from 'react-router';

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
import DownloadButtons from '../../../../components/download-button/DownloadButtons';
import InlineButtons from '../inline-button/InlineButton';
import Widget from '../widget/widget';
import DownIcon from '../../../../icons/others/Down';
import ListsRow from './ListsRow';
import FunnelsRow from './FunnelsRow';

const funnels = ['Воронка 1', 'Воронка 2', 'Воронка 3'];
const list = ['Все пользователи', 'Список 1', 'Список 2', 'Список 3'];

const CreateMailing: FC = () => {
  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  const [name, setName] = useState('Моя рассылка 1');
  const [text, setText] = useState(
    'Привет, {name}. Мы приготовили для тебя кое-что крутое 🔥'
  );
  const [activate, setActivate] = useState(false);
  const [notActivate, setNotActivate] = useState(false);
  const [showTextareaSettings, setShowTextareaSettings] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const [hideSection, setHideSection] = useState(false);

  const [socialIconSelectedType, setSocialIconSelectedType] = useState<
    'Photo' | 'Video' | 'Music' | 'Button' | undefined
  >(undefined);

  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
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
    <div className={styles.layout}>
      {!hideSection && (
        <div className={styles.section}>
          <div className={styles.creation}>
            <div style={{ marginBottom: '2px' }}>
              <div className={styles.firstStep}>
                <p style={{ margin: '0' }}>{'1 Шаг >'}</p>
                <p style={{ margin: '0' }}>Создание рассылки</p>
              </div>
              <div className={styles.inputs}>
                <div className={styles.input__name}>
                  <TextInput
                    name="mailing"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={styles.select__block}>
                  <div className={styles.select}>
                    <p className={styles.select__text}>Список рассылки</p>
                    <div
                      className={`${styles.select__icon} ${
                        listOpen && styles.select__icon_rotated
                      }`}
                      onClick={() => setListOpen(!listOpen)}
                    >
                      <DownIcon width={16} height={16} />
                    </div>
                  </div>
                  {listOpen && (
                    <div className={styles.select__list}>
                      {list.map((el, i) => (
                        <ListsRow el={el} key={i} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.block}>
              <h5 className={styles.block__title}>Текст сообщения</h5>
              <div className={styles.textarea}>
                {showTextareaSettings && (
                  <div className={styles.textarea__settings}>
                    <BoldIcon width={24} height={24} />
                    <div className={styles.border}></div>
                    <ItalicIcon />
                    <div className={styles.border}></div>
                    <CodeIcon />
                    <div className={styles.border}></div>
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
                  active={socialIconSelectedType === 'Photo'}
                  onClick={() => setSocialIconSelectedType('Photo')}
                  icon={<ImageIcon color="#fff" />}
                />
                <SocialButton
                  text="Видео"
                  active={socialIconSelectedType === 'Video'}
                  onClick={() => setSocialIconSelectedType('Video')}
                  icon={<VideoIcon color="#fff" />}
                />
                <SocialButton
                  text="Аудио"
                  active={socialIconSelectedType === 'Music'}
                  onClick={() => setSocialIconSelectedType('Music')}
                  icon={<MusicIcon color="#fff" />}
                />
                <SocialButton
                  text="Кнопка"
                  active={socialIconSelectedType === 'Button'}
                  onClick={() => setSocialIconSelectedType('Button')}
                  icon={<ButtonIcon color="#fff" />}
                />
              </div>
              {socialIconSelectedType === 'Button' ? (
                <InlineButtons />
              ) : socialIconSelectedType !== undefined ? (
                <DownloadButtons size="large" />
              ) : null}
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
                        <FunnelsRow el={el} key={i} />
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
            <button
              type="button"
              className={styles.navigation__exit}
              onClick={() => window.history.back()}
            >
              ВЫЙТИ
            </button>
            <div className={styles.next}>
              <Button
                type="green"
                text="ДАЛЕЕ"
                width={188}
                height={65}
                onClick={() => navigate('/mailing/conditions')}
              />
            </div>
            <div className={styles.next__mobile}>
              <Button
                type="green"
                text="ДАЛЕЕ"
                width={130}
                height={48}
                onClick={() => navigate('/mailing/conditions')}
              />
            </div>
          </div>
        </div>
      )}
      <Widget
        name={name}
        text={text}
        hideSection={hideSection}
        setHideSection={setHideSection}
      />
    </div>
  );
};

export default CreateMailing;
