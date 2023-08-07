import { memo, Dispatch } from 'react';
import Styles from './dialogs-list-dialog.module.css';
import ChatAvatar from '../../chat-avatar/chat-avatar';
import { IFakeDialog } from '../../../pages/chat/fakeData/fakeDataTypes';

interface DialogsListDialogProps {
  data: IFakeDialog;
  isChecked: boolean;
  currentHandler: Dispatch<React.SetStateAction<IFakeDialog | null>>;
}

const DialogsListDialog = memo(
  ({ data, isChecked, currentHandler }: DialogsListDialogProps) => {
    const onClickHandler = () => {
      currentHandler(data);
    };

    return (
      <ul>
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
          {isChecked && <div className={Styles.checkLine} />}
        </div>
      </ul>
    );
  }
);

export default DialogsListDialog;
