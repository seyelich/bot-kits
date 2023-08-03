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
import InputSelect from '../../../../components/input-select/input-select';
import RobotIcon from '../../../../icons/others/Robot';
import BotLogoIcon from '../../../../icons/others/BotLogo';
import ChevronBigIcon from '../../../../icons/others/ChevronBig';

const funnels = ['Воронка 1', 'Воронка 2', 'Воронка 3'];
const list = ['Список 1', 'Список 2', 'Список 3'];

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
  const [showWidget, setShowWidget] = useState(false);

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
      <div className={styles.section}>
        <div className={styles.creation}>
          <div style={{ marginBottom: '2px' }}>
            <div className={styles.firstStep}>
              <p>{'1 Шаг >'}</p>
              <p>Создание рассылки</p>
            </div>
            <div className={styles.inputs}>
              <TextInput
                name="mailing"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <InputSelect
                placeholder="Список рассылки"
                width="264"
                disabled
                options={list}
                dropDownHeight="164"
                setSelectedValue={() => {}}
              />
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
                onClick={(arg: boolean) => {
                  setPhotoActive(arg);
                  setVideoActive(false);
                  setMusicActive(false);
                  setButtonActive(false);
                }}
                icon={<ImageIcon color="#fff" />}
              />
              <SocialButton
                text="Видео"
                active={videoActive}
                onClick={(arg: boolean) => {
                  setPhotoActive(false);
                  setVideoActive(arg);
                  setMusicActive(false);
                  setButtonActive(false);
                }}
                icon={<VideoIcon color="#fff" />}
              />
              <SocialButton
                text="Аудио"
                active={musicActive}
                onClick={(arg: boolean) => {
                  setPhotoActive(false);
                  setVideoActive(false);
                  setMusicActive(arg);
                  setButtonActive(false);
                }}
                icon={<MusicIcon color="#fff" />}
              />
              <SocialButton
                text="Кнопка"
                active={buttonActive}
                onClick={(arg: boolean) => {
                  setPhotoActive(false);
                  setVideoActive(false);
                  setMusicActive(false);
                  setButtonActive(arg);
                }}
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
      <div className={styles.widget}>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => setShowWidget(!showWidget)}
        >
          <div
            className={
              showWidget
                ? `${styles.arrow__rotate} ${styles.arrow__rotate_rotated}`
                : styles.arrow__rotate
            }
          >
            <ChevronBigIcon width={16} height={16} />
          </div>
        </button>
        {showWidget ? (
          <div className={styles.widget__block}>
            <div className={styles.widget__header}>
              <p className={styles.widget__type}>Тестовый виджет</p>
              <p className={styles.widget__name}>{name}</p>
            </div>
            <div className={styles.widget__chat}>
              <RobotIcon width={32} height={32} />
              <p
                className={
                  text.length > 0
                    ? styles.widget__chatText
                    : `${styles.widget__chatText} ${styles.widget__chatText_short}`
                }
              >
                {text.length > 0 ? text : '...'}
              </p>
            </div>
            <div className={styles.widget__footer}>
              <p className={styles.widget__footerText}>Powered by</p>
              <BotLogoIcon color="#243CBB" />
              <p className={styles.widget__footerText}>BotKits</p>
            </div>
          </div>
        ) : (
          <div className={styles.widget__bot}>
            <BotLogoIcon color="#fff" width={44} height={40} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateMailing;
