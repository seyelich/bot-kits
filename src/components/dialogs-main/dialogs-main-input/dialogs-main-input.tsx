import { memo, useState, FormEventHandler } from 'react';
import Styles from './dialogs-main-input.module.css';
import MessageInput from '../../message-input/message-input';
import Modal from '../../modal/modal';
import FileModal from './file-modal/file-modal';

const DialogMainInput = memo(() => {
  const [isOpenFileModal, setFileModal] = useState(false);

  // TODO Заглушка. Потом убрать
  const mock = () => {};

  const fileModalHandler = () => {
    setFileModal(!isOpenFileModal);
  };

  const submitForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // console.log('Сообщение отправлено');
  };

  return (
    <form className={Styles.form} onSubmit={submitForm}>
      <MessageInput
        placeholder="Введите сообщение..."
        onChange={mock}
        onFileClick={fileModalHandler}
        onSlashClick={mock}
        onZapClick={mock}
      />
      <button className={Styles.button} type="submit" aria-label="Отправить" />

      {isOpenFileModal && (
        <Modal onClose={fileModalHandler} needCloseBtn={false}>
          <FileModal modalHandler={fileModalHandler} />
        </Modal>
      )}
    </form>
  );
});

export default DialogMainInput;
