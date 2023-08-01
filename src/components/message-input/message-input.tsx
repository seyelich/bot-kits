import { useState } from 'react';
import Styles from './message-input.module.css';
import IconButton from '../icon-button/IconButton';
import EmojiIcon from '../../icons/others/Emoji';
import PlusIcon from '../../icons/others/Plus';
import { TagIcon } from '../../icons/others/Tag';

interface MessageInputProps {
  placeholder: string;
  onChange: () => void;
}

function MessageInput({ placeholder, onChange }: MessageInputProps) {
  const [smilesView, setSmilesView] = useState(false);

  const smilesHandle = () => {
    setSmilesView(!smilesView);
  };

  const iconColor = '#A6B3C9';
  // TODO Пока что так. Размеры экрана считаются в JS так как их надо передать в стороний компонент
  // Но можно изменить стили IconButton
  const screenWidth = window.screen.width;
  const iconSize = screenWidth <= 320 ? 16 : 24;

  return (
    <div className={Styles.inputFrame}>
      <input
        className={Styles.input}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
      <IconButton
        width={iconSize}
        height={iconSize}
        icon={TagIcon({ color: iconColor })}
      />
      <IconButton
        width={iconSize}
        height={iconSize}
        icon={EmojiIcon({ color: iconColor })}
        onClick={smilesHandle}
      />
      <IconButton
        width={iconSize}
        height={iconSize}
        icon={PlusIcon({ color: iconColor })}
      />
      {smilesView && (
        <div className={Styles.smiles}>
          <span className={Styles.smile}>&#128524;</span>
          <span className={Styles.smile}>&#128077;</span>
          <span className={Styles.smile}>&#128516;</span>
          <span className={Styles.smile}>&#128525;</span>
          <span className={Styles.smile}>&#129505;</span>

          <div className={Styles.square} />
        </div>
      )}
    </div>
  );
}

export default MessageInput;
