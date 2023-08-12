import { FC } from 'react';
import styles from './tutorials.module.css';
import VideoTutorials from './video-tuturals/video-tuturals';
import ServiceBasics from './service-basics/service-basics';

const Tutorials: FC = () => (
  <div className={styles.wrapper}>
    <VideoTutorials />
    <ServiceBasics />
  </div>
);

export default Tutorials;
