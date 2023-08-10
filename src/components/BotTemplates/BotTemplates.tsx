/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { FC, useState } from 'react';
import styles from './BotTemplates.module.css';
import BotTemplateElement from './BotTemplateElement/BotTemplateElement';
import AnsweringMachine from '../icons/bot-templates/AnsweringMachine/AnsweringMachine';
import FoodDelivery from '../icons/bot-templates/FoodDelivery/FoodDelivery';
import DemoBot from '../icons/bot-templates/DemoBot/DemoBot';
import Poll from '../icons/bot-templates/Poll/Poll';
import LeadGeneration from '../icons/bot-templates/LeadGeneration/LeadGeneration';
import PrivateClub from '../icons/bot-templates/PrivateClub/PrivateClub';
import RealEstate from '../icons/bot-templates/RealEstate/RealEstate';
import Entertainment from '../icons/bot-templates/Entertainment/Entertainment';
import Beauty from '../icons/bot-templates/Beauty/Beauty';
import ECommerce from '../icons/bot-templates/ECommerce/ECommerce';
import ELearning from '../icons/bot-templates/ELearning/ELearning';
import Questions from '../icons/bot-templates/Questions/Questions';
import Arrow24x24 from '../icons/Arrow24x24/Arrow24x24';
import useMediaQuery from '../../hooks/useMediaQuery';

const BotTemplates: FC = () => {
  const [isActive, setIsActive] = useState(false);
  const toggle = () => {
    setIsActive(!isActive);
  };
  const matches = useMediaQuery('(max-width: 768px)');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Шаблоны</h1>
        <div className={styles.container__dropdown}>
          <button className={styles.text} onClick={toggle} type="button">
            Все шаблоны
          </button>
          <span
            className={`${styles.button} ${
              !isActive ? styles.button_default : styles.button_active
            }`}
            onClick={toggle}
          >
            <Arrow24x24 />
          </span>
        </div>
      </div>
      <div
        className={`${styles.track} ${
          !isActive ? styles.track_default : styles.track_active
        }`}
      >
        <BotTemplateElement
          icon={<AnsweringMachine size={matches ? 'mobile' : 'desktop'} />}
          text="Бот автоответчик"
        />
        <BotTemplateElement
          icon={<FoodDelivery size={matches ? 'mobile' : 'desktop'} />}
          text="Доставка еды"
        />
        <BotTemplateElement
          icon={<DemoBot size={matches ? 'mobile' : 'desktop'} />}
          text="Демо бот"
        />
        <BotTemplateElement
          icon={<Poll size={matches ? 'mobile' : 'desktop'} />}
          text="Опрос"
        />
        <BotTemplateElement
          icon={<LeadGeneration size={matches ? 'mobile' : 'desktop'} />}
          text="Лидогенерация/HR ре..."
        />
        <BotTemplateElement
          icon={<ELearning size={matches ? 'mobile' : 'desktop'} />}
          text="Онлайн школа/Вебинар"
        />
        <BotTemplateElement
          icon={<PrivateClub size={matches ? 'mobile' : 'desktop'} />}
          text="Закрытый клуб по под..."
        />
        <BotTemplateElement
          icon={<RealEstate size={matches ? 'mobile' : 'desktop'} />}
          text="Агентство по недвиж..."
        />
        <BotTemplateElement
          icon={<Entertainment size={matches ? 'mobile' : 'desktop'} />}
          text="Развлечения"
        />
        <BotTemplateElement
          icon={<Beauty size={matches ? 'mobile' : 'desktop'} />}
          text="Салон красоты"
        />
        <BotTemplateElement
          icon={<ECommerce size={matches ? 'mobile' : 'desktop'} />}
          text="Онлайн-покупки"
        />
        <BotTemplateElement
          icon={<Questions size={matches ? 'mobile' : 'desktop'} />}
          text="Вопрос/ответ"
        />
      </div>
      <button className={styles.text_mobile} onClick={toggle} type="button">
        {!isActive ? 'Все' : 'Свернуть'}
      </button>
    </div>
  );
};

export default BotTemplates;
