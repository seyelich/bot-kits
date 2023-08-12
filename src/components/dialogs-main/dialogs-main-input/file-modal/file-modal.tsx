/* eslint-disable jsx-a11y/label-has-associated-control */
import { memo } from 'react';
import Styles from './file-modal.module.css';
import IconButton from '../../../icon-button/icon-button';
import CloseIcon from '../../../../icons/others/close';
import LogOut from '../../../../icons/others/logout';
import File from '../../../file/file';

interface FileModalProps {
  modalHandler: VoidFunction;
}

const FileModal = memo(({ modalHandler }: FileModalProps) => (
  <div className={Styles.modalWindow}>
    <div className={Styles.closeIcon}>
      <IconButton
        width={24}
        height={24}
        icon={CloseIcon({ color: '#060C23' })}
        onClick={modalHandler}
      />
    </div>
    <div className={Styles.dropArea}>
      <label className={Styles.inputFileLabel}>
        <LogOut />
        <h4 className={Styles.dropHint}>
          Перетяните файл
          <br />
          или
        </h4>
        <p className={Styles.upload}>Загрузите</p>
        <input className={Styles.inputFile} type="file" multiple />
      </label>
    </div>
    <div className={Styles.uploadedFiles}>
      {/* TODO доделать!! */}
      <ul className={Styles.list}>
        <File name="Инфо.pdf" status="1.2 MB / 1.2 MB" isUploaded />
        <File name="Инфо.pdf" status="1.2 MB / 1.2 MB" isUploaded />
        <File name="Инфо.pdf" status="1.2 MB / 1.2 MB" isUploaded={false} />
        <File name="Инфо.pdf" status="1.2 MB / 1.2 MB" isUploaded={false} />
        <File name="Инфо.pdf" status="1.2 MB / 1.2 MB" isUploaded={false} />
        <File name="Инфо.pdf" status="1.2 MB / 1.2 MB" isUploaded={false} />
        <File name="Инфо.pdf" status="1.2 MB / 1.2 MB" isUploaded={false} />
        <File name="Инфо.pdf" status="1.2 MB / 1.2 MB" isUploaded={false} />
        <File name="Инфо.pdf" status="1.2 MB / 1.2 MB" isUploaded={false} />
      </ul>
    </div>
  </div>
));

export default FileModal;
