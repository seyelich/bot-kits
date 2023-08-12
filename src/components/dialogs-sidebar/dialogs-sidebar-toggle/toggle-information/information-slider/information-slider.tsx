import { memo, useState, ReactNode } from 'react';
import Styles from './information-slider.module.css';
import ChevronBigIcon from '../../../../../icons/others/chevron-big';

interface ToggleSliderProps {
  heading: string;
  children: ReactNode;
}

const ToggleSlider = memo(({ heading, children }: ToggleSliderProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const sliderHandler = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={Styles.slider}>
      <button
        className={Styles.sliderButton}
        type="button"
        onClick={sliderHandler}
      >
        <p className={Styles.sliderButtonName}>{heading}</p>
        <div className={`${Styles.arrow} ${isOpened && Styles.arrowOpened}`}>
          <ChevronBigIcon width={16} height={16} color="#060C23" />
        </div>
      </button>
      {isOpened && <div className={Styles.children}>{children}</div>}
    </div>
  );
});

export default ToggleSlider;
