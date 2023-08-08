import { memo, Dispatch, useState } from 'react';
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
  ({ data, current, currentHandler }: DialogsListProps) => {
    const [currentFilter, setFilter] = useState('firstNew');

    // FIXME Временное решение, чтобы линтер не ругался на неиспользуемую переменную
    // console.log можно удалить
    // console.log(currentFilter);

    return (
      <section className={Styles.section}>
        <h2 className={Styles.heading}>Диалоги</h2>
        <SearchInput
          placeholder="Поиск..."
          onChange={() => {}}
          hasFilter
          filterHandler={setFilter}
        />
        <ul className={Styles.list}>
          {data.map((item) => (
            <DialogsListDialog
              data={item}
              isChecked={item.id === current.id}
              currentHandler={currentHandler}
              key={item.name}
            />
          ))}
        </ul>
      </section>
    );
  }
);

export default DialogsList;
