import { memo } from 'react';
import Styles from './file.module.css';
import DocCircleIcon from '../../icons/others/doc-circle';
import CheckIcon from '../../icons/others/Check';
import IconButton from '../icon-button/IconButton';
import CloseIcon from '../../icons/others/Close';

interface FileProps {
  name: string;
  status: string;
  isUploaded: boolean;
}

const File = memo(({ name, status, isUploaded }: FileProps) => {
  const iconSize = 18;

  return (
    <li className={Styles.file}>
      <div style={{ flexShrink: '0' }}>
        <DocCircleIcon />
      </div>
      <div className={Styles.info}>
        <p className={Styles.name}>{name}</p>
        <p className={Styles.status}>{status}</p>
      </div>
      {isUploaded ? (
        <CheckIcon width={iconSize} height={iconSize} color="#243cbb" />
      ) : (
        <IconButton
          width={iconSize}
          height={iconSize}
          icon={CloseIcon({ color: '#A6B3C9' })}
        />
      )}
    </li>
  );
});

export default File;
