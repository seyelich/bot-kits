import { memo, Dispatch } from 'react';
import Styles from './dialogs-list.module.css';
import SearchInput from '../search-input/search-input';
import DialogsListDialog from './dialogs-list-dialog/dialogs-list-dialog';
import { IFakeDialog } from '../../pages/chat/fakeData/fakeDataTypes';

interface DialogsListProps {
  data: IFakeDialog[];
  current: IFakeDialog;
  currentHandler: Dispatch<React.SetStateAction<IFakeDialog | null>>;
}

const DialogsList = memo(
  ({ data, current, currentHandler }: DialogsListProps) => (
    <section className={Styles.section}>
      <h2 className={Styles.heading}>Диалоги</h2>
      <SearchInput placeholder="Поиск..." onChange={() => {}} hasFilter />
      <li className={Styles.list}>
        {data.map((item) => (
          <DialogsListDialog
            data={item}
            // id={item.id}
            // name={item.name}
            // avatar={item.avatar}
            // isOnline={item.isOnline}
            // lastAction={item.lastAction}
            // lastMessage={item.lastMessage}
            isChecked={item.id === current.id}
            // quantityNew={item.quantityNew}
            currentHandler={currentHandler}
            key={item.name}
          />
        ))}
      </li>
    </section>
  )
);

export default DialogsList;
