import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.css';

type TModalProps = {
  children?: JSX.Element;
  onClose: () => void;
};

export default function Modal({ children, onClose }: TModalProps) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsOpen(false);
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', onKey);
      return () => {
        document.removeEventListener('keydown', onKey);
      };
    }
    return () => {
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);
  return ReactDOM.createPortal(
    <section className={styles.popup}>
      <ModalOverlay onClick={onClose} />
      {children}
    </section>,
    document.getElementById('modals')!
  );
}
