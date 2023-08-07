import { memo } from 'react';
import Styles from './toggle-information.module.css';
import ToggleSlider from './information-slider/information-slider';

interface ToggleInformationProps {
  lastAction: string;
  firstAction: string;
}

const ToggleInformation = memo(
  ({ lastAction, firstAction }: ToggleInformationProps) => (
    <div className={Styles.cnt}>
      <ToggleSlider heading="Информация о пользователе">
        <div />
      </ToggleSlider>
      <ToggleSlider heading="История действий">
        <p>
          Последнее действие:{' '}
          <span className={Styles.greyText}>{lastAction}</span>
        </p>
        <p>
          Первое действие:{' '}
          <span className={Styles.greyText}>{firstAction}</span>
        </p>
      </ToggleSlider>
    </div>
  )
);

export default ToggleInformation;
