import { FC, useRef, useState } from 'react';
import styles from './bot-template-element.module.css';
import Plus from '../../icons/Plus/Plus';
import PopupBotDetails from '../../dashboard-popups/bot-details-popup/popup-bot-details';
import useModal from '../../../hooks/useModal';

interface IBotTemplate {
  icon: JSX.Element;
  text: string;
}

const BotTemplateElement: FC<IBotTemplate> = ({ icon, text }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const { isModalOpen, openModal, closeModal } = useModal();
  const MouseOver = () => setIsMouseOver(true);
  const MouseOut = () => setIsMouseOver(false);
  const ref = useRef<HTMLDivElement>(null);
  const title = ref.current?.childNodes[1].textContent;
  return (
    <div className={styles.container} ref={ref}>
      <div
        className={styles.button}
        onMouseEnter={MouseOver}
        onMouseLeave={MouseOut}
        onClick={openModal}
      >
        {icon}
        <span className={styles.button_add}>
          <Plus color={isMouseOver ? '#243cbb' : '#CCD4E0'} />
        </span>
      </div>
      <p
        className={styles.button_text}
        style={{ color: isMouseOver ? '#243cbb' : '#060c23' }}
      >
        {text}
      </p>
      <PopupBotDetails
        icon={icon}
        title={title}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default BotTemplateElement;
