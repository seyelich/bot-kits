import React, { FC, useRef, useState } from 'react';

import styles from './index.module.css';
import UploadIcon from '../../icons/others/upload';

interface IDownloadButtons {
  size: 'large' | 'medium' | 'small';
}

const DownloadButtons: FC<IDownloadButtons> = ({ size }) => {
  const fileInputRef = useRef();
  const [error, setError] = useState(false);

  const handleChange = (e: any) => {
    if (e.target.files.length > 0) {
      if (e.target.files[0].size > 20 * 1024 * 1024) {
        setError(true);
      }
    }
  };

  return (
    <div className={styles.block}>
      <button
        type="button"
        // @ts-expect-error
        onClick={() => fileInputRef.current?.click()}
        className={`${styles.button} ${
          size === 'large'
            ? styles.button_large
            : size === 'medium'
            ? styles.button_medium
            : styles.button_small
        } ${error ? styles.button_error : ''}`}
      >
        <UploadIcon />
        <p>Загрузить файл</p>
      </button>
      <input
        onChange={handleChange}
        multiple={false}
        // @ts-expect-error
        ref={fileInputRef}
        type="file"
        hidden
      />
      {error && (
        <p className={styles.error__message}>
          Размер файла не должен превышать 20 Мб
        </p>
      )}
    </div>
  );
};

export default DownloadButtons;
