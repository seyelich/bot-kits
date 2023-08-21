/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { FC, useState } from 'react';
import styles from './bot-templates.module.css';
import BotTemplateElement from './bot-template-element/bot-template-element';
import AnsweringMachine from '../../ui/icons/others/bot-templates/answering-machine';
import FoodDelivery from '../../ui/icons/others/bot-templates/food-delivery';
import DemoBot from '../../ui/icons/others/bot-templates/demo-bot';
import Poll from '../../ui/icons/others/bot-templates/poll';
import LeadGeneration from '../../ui/icons/others/bot-templates/lead-generation';
import PrivateClub from '../../ui/icons/others/bot-templates/private-club';
import RealEstate from '../../ui/icons/others/bot-templates/real-estate';
import Entertainment from '../../ui/icons/others/bot-templates/entertainment';
import Beauty from '../../ui/icons/others/bot-templates/beauty';
import ECommerce from '../../ui/icons/others/bot-templates/e-commerce';
import ELearning from '../../ui/icons/others/bot-templates/e-learning';
import Questions from '../../ui/icons/others/bot-templates/questions';
import Arrow from '../../ui/icons/others/arrow';
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
            <Arrow type="common" color="lightGrey" width={24} height={24} />
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
