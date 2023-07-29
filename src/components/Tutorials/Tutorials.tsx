import { FC } from 'react';
import styles from './Tutorials.module.css';
import { VideoTutorials } from './VideoTuturals/VideoTuturals';
import { ServiceBasics } from './ServiceBasics/ServiceBasics';



export const Tutorials: FC = () => {

  return (
    <div className={styles.wrapper}>
      <VideoTutorials/>
      <ServiceBasics />
    </div>

  );
};
