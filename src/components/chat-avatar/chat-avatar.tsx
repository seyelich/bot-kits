import { memo, CSSProperties } from 'react';
import Styles from './chat-avatar.module.css';

interface ChatAvatarProps {
  img: string;
  // TODO role пока что так. Не знаю какими будут данные о пользователе
  isOnline: boolean;
  role?: boolean;
  size?: 'default' | 'large';
  extraClass?: string;
}

const ChatAvatar = memo(
  ({ img, isOnline, role = false, size, extraClass }: ChatAvatarProps) => {
    const style: CSSProperties = {
      width: '40px',
      height: '40px',
      backgroundImage: `url(${img})`,
      flex: `0 0 40px`,
    };

    switch (size) {
      case 'large': {
        style.width = '80px';
        style.height = '80px';
        style.flex = '0 0 80px';
        break;
      }
      default: {
        break;
      }
    }

    return (
      <div className={`${Styles.avatar} ${extraClass}`} style={style}>
        {role && <div className={Styles.role} />}
        {isOnline && <div className={Styles.online} />}
      </div>
    );
  }
);

export default ChatAvatar;
