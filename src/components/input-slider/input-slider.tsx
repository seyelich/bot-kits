import { Dispatch, FC, SetStateAction, useState } from 'react';
import styles from './input-sider.module.css';
import Arrow from '../../icons/others/arrow';

interface IInputSlider {
  options: string[];
  setSelected: Dispatch<SetStateAction<string | undefined>>;
  width: string;
  slideWidth: string;
}

const InputSlider: FC<IInputSlider> = ({
  options,
  setSelected,
  width,
  slideWidth,
}) => {
  const [slide, setSlide] = useState(0);
  const changeSlide = (direction = 1) => {
    let slideNumber = 0;
    if (slide + direction < 0) {
      slideNumber = options.length - 1;
    } else {
      slideNumber = (slide + direction) % options.length;
    }
    setSlide(slideNumber);
    setSelected(options[slideNumber]);
  };

  return (
    <div className={styles.container} style={{ width }}>
      <div
        className={styles.track}
        style={{ transform: `translateX(-${slide * 100}%)` }}
      >
        {options.map((option) => (
          <p key={option} className={styles.text} style={{ width: slideWidth }}>
            {option}
          </p>
        ))}
      </div>
      <span className={styles.btn_prev}>
        {slide !== 0 ? (
          <Arrow
            type="common"
            color="darkGrey"
            width={16}
            height={16}
            onClick={() => changeSlide(-1)}
          />
        ) : (
          slide === 0 && (
            <Arrow type="common" color="lightGrey" width={16} height={16} />
          )
        )}
      </span>
      <span className={styles.btn_next}>
        {slide !== options.length - 1 ? (
          <Arrow
            type="common"
            color="darkGrey"
            width={16}
            height={16}
            onClick={() => changeSlide(1)}
          />
        ) : (
          slide === options.length - 1 && (
            <Arrow type="common" color="lightGrey" width={16} height={16} />
          )
        )}
      </span>
    </div>
  );
};

export default InputSlider;
