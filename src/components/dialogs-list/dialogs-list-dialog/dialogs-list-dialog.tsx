import { memo, Dispatch } from 'react';
import Styles from './dialogs-list-dialog.module.css';
import ChatAvatar from '../../chat-avatar/chat-avatar';
import { IFakeDialog } from '../../../pages/chat/fakeData/fakeDataTypes';
import useMediaQuery from '../../../hooks/use-media-query';

interface DialogsListDialogProps {
  data: IFakeDialog;
  isChecked: boolean;
  currentHandler: Dispatch<React.SetStateAction<IFakeDialog | null>>;
}

const DialogsListDialog = memo(
  ({ data, isChecked, currentHandler }: DialogsListDialogProps) => {
    const isMobile = useMediaQuery('(max-width: 360px)');

    const onClickHandler = () => {
      currentHandler(data);
    };

    return (
      <li className={Styles.listItem}>
        <div className={Styles.dialog} onClick={onClickHandler}>
          <ChatAvatar img={data.avatar} isOnline={data.isOnline} />
          <div className={Styles.info}>
            <p className={Styles.name}>{data.name}</p>
            <p className={`${Styles.last} ${Styles.lastAction}`}>
              {data.lastAction}
            </p>
            <p className={Styles.last}>{data.messages[0].text}</p>
            {data.quantityNew && (
              <div className={Styles.quantityNew}>
                {String(data.quantityNew)}
              </div>
            )}
          </div>
          {isChecked && !isMobile && <div className={Styles.checkLine} />}
        </div>
      </li>
    );
  }
);

export default DialogsListDialog;
