/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { FC, useState } from 'react';
import styles from './bot-templates.module.css';
import BotTemplateElement from './bot-template-element/bot-template-element';
import AnsweringMachine from '../icons/bot-templates/answering-machine/answering-machine';
import FoodDelivery from '../icons/bot-templates/food-delivery/food-delivery';
import DemoBot from '../icons/bot-templates/demo-bot/demo-bot';
import Poll from '../icons/bot-templates/poll/poll';
import LeadGeneration from '../icons/bot-templates/lead-generation/lead-generation';
import PrivateClub from '../icons/bot-templates/private-club/private-club';
import RealEstate from '../icons/bot-templates/real-estate/real-estate';
import Entertainment from '../icons/bot-templates/entertainment/entertainment';
import Beauty from '../icons/bot-templates/beauty/beauty';
import ECommerce from '../icons/bot-templates/e-commerce/e-commerce';
import ELearning from '../icons/bot-templates/e-learning/e-learning';
import Questions from '../icons/bot-templates/questions/questions';
import Arrow24x24 from '../icons/arrow-24x24/arrow-24x24';
import useMediaQuery from '../../hooks/use-media-query';

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
