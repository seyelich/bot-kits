import Styles from './page-option.module.css';
import checkImg from '../../images/check.svg';
import plusImg from '../../images/plus.svg';

interface PageOptionProps {
  id: string;
  onClick: () => void;
  isUploader?: boolean;
  isSelected?: boolean;
  isDisabled?: boolean;
  label?: string;
  avatar?: string;
}

// TODO Внимание!!! Данный компонент необходимо помещать во flex-контейнер

function PageOption({
  id,
  onClick,
  isUploader = true,
  isSelected = false,
  isDisabled = false,
  label = 'Загрузить',
  avatar = plusImg,
}: PageOptionProps) {
  const { button, buttonSelected, buttonUploader } = Styles;
  const classNames = [button];
  if (isSelected) {
    classNames.push(buttonSelected);
  }
  if (isUploader) {
    classNames.push(buttonUploader);
  }

  return (
    <button
      className={classNames.join(' ')}
      type="button"
      id={id}
      onClick={onClick}
      disabled={isDisabled}
    >
      <div className={Styles.avatarCnt}>
        <img className={Styles.avatar} src={avatar} alt="Аватар страницы" />
        {isSelected && (
          <div
            className={Styles.check}
            style={{ backgroundImage: `url(${checkImg})` }}
          />
        )}
      </div>
      <div>{label}</div>
    </button>
  );
}

export default PageOption;
