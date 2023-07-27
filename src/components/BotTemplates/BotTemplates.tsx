import { FC, useState } from 'react';
import styles from './BotTemplates.module.css';
import { BotTemplateElement } from './BotTemplateElement/BotTemplateElement';
import { AnsweringMachine } from '../icons/bot-templates/AnsweringMachine/AnsweringMachine';
import { FoodDelivery } from '../icons/bot-templates/FoodDelivery/FoodDelivery';
import { DemoBot } from '../icons/bot-templates/DemoBot/DemoBot';
import { Poll } from '../icons/bot-templates/Poll/Poll';
import { LeadGeneration } from '../icons/bot-templates/LeadGeneration/LeadGeneration';
import { PrivateClub } from '../icons/bot-templates/PrivateClub/PrivateClub';
import { RealEstate } from '../icons/bot-templates/RealEstate/RealEstate';
import { Entertainment } from '../icons/bot-templates/Entertainment/Entertainment';
import { Beauty } from '../icons/bot-templates/Beauty/Beauty';
import { ECommerce } from '../icons/bot-templates/ECommerce/ECommerce';
import { ELearning } from '../icons/bot-templates/ELearning/ELearning';
import { Questions } from '../icons/bot-templates/Questions/Questions';
import { Arrow24x24 } from '../icons/Arrow24x24/Arrow24x24';


export const BotTemplates: FC = () => {
  const [isActive, setIsActive] = useState(false);
  const toggle = () => {
    setIsActive(isActive => !isActive);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Шаблоны</h1>
        <div className={styles.container__dropdown}>
          <p className={styles.text}>Все шаблоны</p>
          <span className={`${styles.button} ${!isActive ? styles.button_default : styles.button_active}`} onClick={toggle}><Arrow24x24 /></span>
        </div>
      </div>
      <div className={`${styles.templates} ${!isActive ? styles.templates_default : styles.templates_active}`}>
        <BotTemplateElement
          icon={<AnsweringMachine />}
          text={'Бот автоответчик'}
        />
        <BotTemplateElement icon={<FoodDelivery />} text={'Доставка еды'} />
        <BotTemplateElement icon={<DemoBot />} text={'Демо бот'} />
        <BotTemplateElement icon={<Poll />} text={'Опрос'} />
        <BotTemplateElement
          icon={<LeadGeneration />}
          text={'Лидогенерация/HR ре...'}
        />
        <BotTemplateElement
          icon={<ELearning />}
          text={'Онлайн школа/Вебинар'}
        />
        <BotTemplateElement
          icon={<PrivateClub />}
          text={'Закрытый клуб по под...'}
        />
        <BotTemplateElement
          icon={<RealEstate />}
          text={'Агентство по недвиж...'}
        />
        <BotTemplateElement icon={<Entertainment />} text={'Развлечения'} />
        <BotTemplateElement icon={<Beauty />} text={'Салон красоты'} />
        <BotTemplateElement icon={<ECommerce />} text={'Онлайн-покупки'} />
        <BotTemplateElement icon={<Questions />} text={'Вопрос/ответ'} />
      </div>
    </div>

  );
};
