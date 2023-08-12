import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.css';
import CloseIcon from '../../icons/others/close';
import IconButton from '../icon-button/icon-button';

type TModalProps = {
  children?: JSX.Element;
  onClose: () => void;
  needCloseBtn?: boolean;
};

export default function Modal({
  children,
  onClose,
  needCloseBtn = true,
}: TModalProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);
  return ReactDOM.createPortal(
    <section className={styles.popup}>
      <ModalOverlay onClick={onClose} />
      <div className={styles.container}>
        {needCloseBtn && (
          <div className={styles.button_close}>
            <IconButton
              width={24}
              height={24}
              icon={CloseIcon({ color: '#060C23' })}
              onClick={onClose}
            />
          </div>
        )}
        {children}
      </div>
      {/* {children} */}
    </section>,
    document.getElementById('modals')!
  );
}
