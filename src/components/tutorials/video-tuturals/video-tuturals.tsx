import { FC } from 'react';
import styles from './video-tuturals.module.css';
import preview1 from '../../../images/video1.svg';
import preview2 from '../../../images/video2.svg';
import preview3 from '../../../images/video3.svg';
import VideoElement from './video-element/video-element';

const VideoTutorials: FC = () => (
  <div className={styles.video}>
    <h4 className={styles.title}>С чего начать?</h4>
    <div className={styles.container}>
      <VideoElement
        text="Подключение и основные параметры"
        preview={preview1}
      />
      <VideoElement text="Настраиваем простую рассылку" preview={preview2} />
      <VideoElement text="Начало работы с блок-схемами" preview={preview3} />
    </div>
  </div>
);

export default VideoTutorials;
