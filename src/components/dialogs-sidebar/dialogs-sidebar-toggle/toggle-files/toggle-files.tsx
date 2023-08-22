import { memo } from 'react';
import Styles from './toggle-files.module.css';
import DocCircleIcon from '../../../../ui/icons/others/doc-circle';

interface ToggleFilesProps {
  files: string[];
  images: string[];
}

const ToggleFiles = memo(({ files, images }: ToggleFilesProps) => (
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
      <ul className={Styles.filesList}>
        {files.map((item, i) => {
          if (i < 2) {
            return (
              <li key={item}>
                <div className={Styles.file}>
                  <DocCircleIcon />
                  <p className={Styles.fileName}>{item}</p>
                </div>
              </li>
            );
          }
          return <div />;
        })}
      </ul>
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
      <ul className={`${Styles.filesList} ${Styles.imagesList}`}>
        {images.map((item, i) => {
          if (i < 3) {
            return (
              <li key={item}>
                <div
                  className={Styles.image}
                  style={{ backgroundImage: `url(${item})` }}
                />
              </li>
            );
          }
          return <div />;
        })}
      </ul>
    </div>
  </div>
));

export default ToggleFiles;
