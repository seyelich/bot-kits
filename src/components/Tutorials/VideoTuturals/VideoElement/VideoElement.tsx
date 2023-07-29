import { FC, useRef, useState } from 'react';

import { Play } from '../../../icons/Play/Play';
import styles from './VideoElement.module.css';

import video from '../../../../video/testVideo.mp4';
import { any } from 'prop-types';

interface IVideoElement {
  text: string;
  preview: any
}

export const VideoElement: FC<IVideoElement> = ({ text, preview }) => {
  const [isVideoRunning, setIsVideoRunning] = useState(false);
  const vidRef = useRef<any>(null);
  const play = () => {
    setIsVideoRunning(true);
    vidRef?.current?.play()
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <img
            src={preview}
            className={styles.videothumb}
            alt="thumb"
            style={{
              opacity: isVideoRunning ? 0 : 1,
              zIndex: isVideoRunning ? -1 : 1,
            }}
          />
          <span
            onClick={play}
            className={styles.button}
            style={{ zIndex: isVideoRunning ? -1 : 2 }}
          >
            <Play />
          </span>
          <video
            className={styles.video}
            style={{ opacity: isVideoRunning ? 1 : 0 }}
            src={video}
            controls
            ref={vidRef}
          ></video>
        </div>
        <p className={styles.text}>{text}</p>
      </div>
    </>
  );
};
