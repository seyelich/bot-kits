import { FC, useState } from 'react';
import styles from './BotTemplateElement.module.css';
import { Plus } from '../../icons/Plus/Plus';

interface IBotTemplate {
  icon: JSX.Element;
  text: string;
}

export const BotTemplateElement: FC<IBotTemplate> = ({ icon, text }) => {

  const [isActive, setIsActive] = useState(false);
  const MouseOver = () => setIsActive(true);
  const MouseOut = () => setIsActive(false);

  return (
    <div className={styles.container}>
      <div className={styles.button} onMouseEnter={MouseOver} onMouseLeave={MouseOut}>
        {icon}
        <span className={styles.button_add}>
          <Plus color={isActive ? '#243cbb' : '#CCD4E0'} />
        </span>
      </div>
      <p className={styles.button_text} style={{ color: isActive ? '#243cbb' : '#060c23' }}>{text}</p>
    </div>
  );
};
