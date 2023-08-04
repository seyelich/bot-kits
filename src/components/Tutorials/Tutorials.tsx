import { FC } from 'react';
import styles from './Tutorials.module.css';
import VideoTutorials from './VideoTuturals/VideoTuturals';
import ServiceBasics from './ServiceBasics/ServiceBasics';

const Tutorials: FC = () => (
  <div className={styles.wrapper}>
    <VideoTutorials />
    <ServiceBasics />
  </div>
);

export default Tutorials;
