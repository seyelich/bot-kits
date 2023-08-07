import { memo } from 'react';
import Styles from './toggle-files.module.css';

const ToggleFiles = memo(() => (
  <div className={Styles.cnt}>
    <div className={Styles.filesBlock}>
      <div className={Styles.blockHeadingCnt}>
        <p className={Styles.blockHeading}>Загруженные файлы</p>
        <button
          className={`${Styles.blockHeading} ${Styles.blockButton}`}
          type="button"
        >
          Все
        </button>
      </div>
    </div>
    <div className={Styles.filesBlock}>
      <div className={Styles.blockHeadingCnt}>
        <p className={Styles.blockHeading}>Изображения</p>
        <button
          className={`${Styles.blockHeading} ${Styles.blockButton}`}
          type="button"
        >
          Все
        </button>
      </div>
    </div>
  </div>
));

export default ToggleFiles;
