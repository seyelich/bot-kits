import { memo, useState } from 'react';
import Styles from './dialogs-sidebar.module.css';
import ChatAvatar from '../chat-avatar/chat-avatar';
import { IFakeDialog } from '../../services/types/chat-types';
import DialogsSidebarToggle from './dialogs-sidebar-toggle/dialogs-sidebar-toggle';

interface DialogsSidebarProps {
  currentDialog: IFakeDialog;
}

const DialogsSidebar = memo(({ currentDialog }: DialogsSidebarProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const { name, role, avatar, lastAction, firstAction, files, images } =
    currentDialog;

  return (
    <div className={`${Styles.cnt} ${isOpen && Styles.cntO}`}>
      {currentDialog && (
        <div className={`${Styles.sidebar} ${isOpen && Styles.sidebarO}`}>
          <ChatAvatar img={avatar} isOnline={false} size="large" />
          <p className={Styles.name}>{name}</p>
          <p className={Styles.role}>{role === 'user' && 'Пользователь'}</p>
          <DialogsSidebarToggle
            lastAction={lastAction}
            firstAction={firstAction}
            files={files}
            images={images}
          />
        </div>
      )}
      <button
        className={Styles.button}
        type="submit"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        aria-label="Открыть боковую панель"
      >
        <div className={`${Styles.arrow} ${isOpen && Styles.arrowOpened}`} />
      </button>
    </div>
  );
});

export default DialogsSidebar;
