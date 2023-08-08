import { memo, useState } from 'react';
import Styles from './dialogs-main-header.module.css';
import ChatAvatar from '../../chat-avatar/chat-avatar';
import IconButton from '../../icon-button/IconButton';
import SearchIcon from '../../../icons/others/Search';
import CloseIcon from '../../../icons/others/Close';
import PlayIcon from '../../../icons/others/Play';
import TrashIcon from '../../../icons/others/Trash';
import SearchInput from '../../search-input/search-input';
import { IFakeDialog } from '../../../pages/chat/fakeData/fakeDataTypes';

interface DialogsMainHeaderProps {
  data: IFakeDialog;
}

const DialogsMainHeader = memo(({ data }: DialogsMainHeaderProps) => {
  const [showSearchInput, setSearchInput] = useState(false);

  const iconSize = 24;

  const searchInputHandle = () => {
    setSearchInput(!showSearchInput);
  };

  return (
    <div className={Styles.header}>
      <div className={Styles.userInfo}>
        <ChatAvatar img={data.avatar} isOnline={data.isOnline} />
        <p className={Styles.name}>{data.name}</p>
      </div>
      <div className={Styles.actions}>
        {showSearchInput && (
          <SearchInput
            placeholder="Поиск..."
            onChange={() => {}}
            size="small"
            width="183px"
          />
        )}
        <div className={Styles.buttons}>
          <IconButton
            width={iconSize}
            height={iconSize}
            icon={showSearchInput ? CloseIcon({}) : SearchIcon({})}
            onClick={searchInputHandle}
          />
          <IconButton
            width={iconSize}
            height={iconSize}
            icon={PlayIcon({})}
            onClick={() => {}}
          />
          <IconButton
            width={iconSize}
            height={iconSize}
            icon={TrashIcon({})}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
});

export default DialogsMainHeader;
