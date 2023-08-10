import { Dispatch, FC, SetStateAction, useRef } from 'react';
import styles from './video-popup.module.css';

interface IVideoPopup {
  src: string;
  title: string;
  isOpen: boolean;
  setIsBotDetailsPopupOpened: Dispatch<SetStateAction<boolean>>;
}

const VideoPopup: FC<IVideoPopup> = ({
  src,
  title,
  isOpen,
  setIsBotDetailsPopupOpened,
}) => {
  const ref = useRef<HTMLIFrameElement>(null);
  return (
    <div
      className={isOpen ? styles.popup : styles.popup_hidden}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsBotDetailsPopupOpened(false);
        }
      }}
    >
      <iframe
        ref={ref}
        className={styles.container}
        src={isOpen ? src : ''}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  );
};

export default VideoPopup;
