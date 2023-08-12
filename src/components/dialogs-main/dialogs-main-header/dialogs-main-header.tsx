// TODO В компоненте много хардкода, нужно отрефакторить
import { memo, useState, Dispatch } from 'react';
import Styles from './dialogs-main-header.module.css';
import ChatAvatar from '../../chat-avatar/chat-avatar';
import IconButton from '../../icon-button/icon-button';
import SearchIcon from '../../../icons/others/search';
import CloseIcon from '../../../icons/others/close';
import PlayIcon from '../../../icons/others/play';
import TrashIcon from '../../../icons/others/trash';
import SearchInput from '../../search-input/search-input';
import { IFakeDialog } from '../../../pages/chat/fakeData/fakeDataTypes';
import ChevronBigIcon from '../../../icons/others/chevron-big';
import MoreButtonIcon from '../../../icons/others/more-button';
import useMediaQuery from '../../../hooks/use-media-query';
import DialogsSidebarToggle from '../../dialogs-sidebar/dialogs-sidebar-toggle/dialogs-sidebar-toggle';

interface DialogsMainHeaderProps {
  data: IFakeDialog;
  currentHandler?: Dispatch<React.SetStateAction<IFakeDialog | null>>;
}

const DialogsMainHeader = memo(
  ({ data, currentHandler }: DialogsMainHeaderProps) => {
    const [showSearchInput, setSearchInput] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 360px)');

    const { avatar, name, role, lastAction, firstAction, files, images } = data;
    const iconSize = 24;

    const mock = () => {};

    const searchInputHandle = () => {
      setSearchInput(!showSearchInput);
    };

    const chevronButtonHandler = () => {
      if (currentHandler) {
        currentHandler(null);
      }
    };

    const openHeaderHandler = () => {
      if (isMobile) {
        setOpen(!isOpen);
      }
    };

    return (
      <div className={`${Styles.header} ${isOpen && Styles.headerOpened}`}>
        {isOpen ? (
          <div className={`${Styles.sidebar} ${isOpen && Styles.sidebarO}`}>
            <ChatAvatar img={avatar} isOnline={false} size="large" />
            <p className={`${Styles.name} ${Styles.nameOpenedHeader}`}>
              {name}
            </p>
            <p className={Styles.role}>{role === 'user' && 'Пользователь'}</p>
            <DialogsSidebarToggle
              lastAction={lastAction}
              firstAction={firstAction}
              files={files}
              images={images}
            />
            <IconButton
              width={iconSize}
              height={iconSize}
              icon={ChevronBigIcon({})}
              onClick={openHeaderHandler}
              extraClass={`${Styles.chevronButton} ${Styles.chevronButtonOpenedHeader}`}
            />
            <IconButton
              width={iconSize}
              height={iconSize}
              icon={MoreButtonIcon({})}
              onClick={mock}
              extraClass={Styles.moreButtonOpenedHeader}
            />
          </div>
        ) : (
          <>
            <IconButton
              width={iconSize}
              height={iconSize}
              icon={ChevronBigIcon({})}
              onClick={chevronButtonHandler}
              extraClass={Styles.chevronButton}
            />
            <div className={Styles.userInfo} onClick={openHeaderHandler}>
              <ChatAvatar
                img={data.avatar}
                isOnline={data.isOnline}
                extraClass={Styles.avatar}
              />
              <p className={Styles.name}>{data.name}</p>
              <p className={Styles.status}>В работе</p>
            </div>
            <div className={Styles.actions}>
              {showSearchInput && (
                <SearchInput
                  placeholder="Поиск..."
                  onChange={mock}
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
                  extraClass={Styles.searchButton}
                />
                <IconButton
                  width={iconSize}
                  height={iconSize}
                  icon={PlayIcon({})}
                  onClick={mock}
                  extraClass={isOpen ? Styles.playButtonHide : undefined}
                />
                <IconButton
                  width={iconSize}
                  height={iconSize}
                  icon={MoreButtonIcon({})}
                  onClick={mock}
                  extraClass={Styles.moreButton}
                />
                <IconButton
                  width={iconSize}
                  height={iconSize}
                  icon={TrashIcon({})}
                  onClick={mock}
                  extraClass={Styles.trashButton}
                />
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
);

export default DialogsMainHeader;
