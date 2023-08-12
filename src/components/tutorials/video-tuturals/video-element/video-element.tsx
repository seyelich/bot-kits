import { FC, useRef, useState } from 'react';

import Play from '../../../icons/play/play';
import styles from './video-element.module.css';

import VideoPopup from '../video-popup/video-popup';

const video = [
  {
    src: 'https://www.youtube.com/embed/FKOn5DfpJDA',
    title: 'Подключение чат бота и основные параметры | Bot Kits',
    text: 'Подключение и основные параметры',
  },

  {
    src: 'https://www.youtube.com/embed/pr-oEDI_Iu8',
    title: 'Настраиваем простую рассылку | Bot Kits',
    text: 'Настраиваем простую рассылку',
  },

  {
    src: 'https://www.youtube.com/embed/5Ga4CifgkK0',
    title: 'Начало работы с блок схемами | Bot Kits',
    text: 'Начало работы с блок-схемами',
  },
];

interface IVideoElement {
  text: string;
  preview: string;
}

const VideoElement: FC<IVideoElement> = ({ text, preview }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVideo1Running, setIsVideo1Running] = useState(false);
  const [isVideo2Running, setIsVideo2Running] = useState(false);
  const [isVideo3Running, setIsVideo3Running] = useState(false);

  const play = () => {
    if (ref.current?.innerText === video[0].text) {
      setIsVideo1Running(true);
    }
    if (ref.current?.innerText === video[1].text) {
      setIsVideo2Running(true);
    }
    if (ref.current?.innerText === video[2].text) {
      setIsVideo3Running(true);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={preview} className={styles.videothumb} alt="thumb" />
        <span onClick={play} className={styles.button}>
          <Play />
        </span>
      </div>
      <p className={styles.text} ref={ref}>
        {text}
      </p>
      <VideoPopup
        src={video[0].src}
        title={video[0].title}
        setIsBotDetailsPopupOpened={setIsVideo1Running}
        isOpen={isVideo1Running}
      />
      <VideoPopup
        src={video[1].src}
        title={video[1].title}
        setIsBotDetailsPopupOpened={setIsVideo2Running}
        isOpen={isVideo2Running}
      />
      <VideoPopup
        src={video[2].src}
        title={video[2].title}
        setIsBotDetailsPopupOpened={setIsVideo3Running}
        isOpen={isVideo3Running}
      />
    </div>
  );
};

export default VideoElement;
