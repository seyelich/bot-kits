import { FormEventHandler } from 'react';
import Styles from './dialogs-main-input.module.css';
import MessageInput from '../../message-input/message-input';

function DialogMainInput() {
  // TODO Заглушка. Потом убрать
  const mock = () => {};

  const submitForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log('Сообщение отправлено');
  };

  return (
    <form className={Styles.form} onSubmit={submitForm}>
      <MessageInput
        placeholder="Введите сообщение..."
        onChange={mock}
        onFileClick={mock}
        onSlashClick={mock}
        onZapClick={mock}
      />
      <button className={Styles.button} type="submit" aria-label="Отправить" />
    </form>
  );
}

export default DialogMainInput;
