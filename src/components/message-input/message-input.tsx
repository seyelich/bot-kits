import { useState, ChangeEventHandler } from 'react';
import Styles from './message-input.module.css';
import IconButton from '../icon-button/IconButton';
import EmojiIcon from '../../icons/others/Emoji';
import XCircleIcon from '../../icons/others/XCircle';
import FileIcon from '../../icons/others/File';
import SlashIcon from '../../icons/others/Slash';
import ZapIcon from '../../icons/others/Zap';

interface MessageInputProps {
  placeholder: string;
  width?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onFileClick: VoidFunction;
  onSlashClick: VoidFunction;
  onZapClick: VoidFunction;
}

function MessageInput({
  placeholder,
  width = '100%',
  onChange,
  onFileClick,
  onSlashClick,
  onZapClick,
}: MessageInputProps) {
  const [isShowSmiles, setShowSmiles] = useState(false);
  const [isShowOtherButtons, setShowOtherButtons] = useState(false);

  const smilesHandle = () => {
    setShowSmiles(!isShowSmiles);
  };

  const otherButtonsHandle = () => {
    setShowOtherButtons(!isShowOtherButtons);
  };

  const iconColor = '#A6B3C9';
  // TODO Пока что так. Размеры экрана считаются в JS так как их надо передать в стороний компонент
  // Но можно изменить стили IconButton
  const screenWidth = window.screen.width;
  const iconSize = screenWidth <= 320 ? 16 : 24;

  return (
    <div className={Styles.inputFrame} style={{ width: `${width}` }}>
      <input
        className={Styles.input}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
      <IconButton
        width={iconSize}
        height={iconSize}
        icon={FileIcon({ color: iconColor })}
        onClick={onFileClick}
      />
      <div className={isShowSmiles ? Styles.smilesButton : undefined}>
        <IconButton
          width={iconSize}
          height={iconSize}
          icon={EmojiIcon({ color: iconColor })}
          onClick={smilesHandle}
        />
      </div>
      {isShowOtherButtons && (
        <>
          <IconButton
            width={iconSize}
            height={iconSize}
            icon={SlashIcon({ color: iconColor })}
            onClick={onSlashClick}
          />
          <IconButton
            width={iconSize}
            height={iconSize}
            icon={ZapIcon({ color: iconColor })}
            onClick={onZapClick}
          />
        </>
      )}
      {/* TODO Иконка крестика сделана из компонента XCircle, что, может быть, не совсем правильно.
          Визуально разницы нет */}
      <div
        className={`
          ${Styles.xCircleCnt}
          ${isShowOtherButtons && Styles.xCircleCntOpened}`}
      >
        <IconButton
          width={iconSize}
          height={iconSize}
          icon={XCircleIcon({ color: iconColor })}
          onClick={otherButtonsHandle}
        />
      </div>
      {isShowSmiles && (
        <div className={Styles.smiles}>
          {/* TODO Смайлы пока сделаны так. В будущем надо доработать либо переделать */}
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
