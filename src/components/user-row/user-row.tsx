import { Dispatch, SetStateAction } from 'react';
import { TUser } from '../../utils/types';
import styles from './user-row.module.css';
import UserCheckbox from '../user-checkbox/user-checkbox';

type TUserRowProps = TUser & {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<Set<string>>>;
  extraClass?: string;
};

export default function UserRow({
  _id,
  name,
  surname,
  username = '-',
  messengerId,
  phone = '-',
  checked = false,
  setChecked,
  extraClass = '',
}: TUserRowProps) {
  return (
    <div className={`${styles.user} ${extraClass}`}>
      <UserCheckbox
        check={checked}
        onClick={() =>
          setChecked((set) => {
            const newSet: Set<string> = new Set(set.values());
            if (newSet.has(_id)) {
              newSet.delete(_id);
            } else {
              newSet.add(_id);
            }
            return newSet;
          })
        }
      />
      <p>{name}</p>
      <p>{surname}</p>
      <p>{username}</p>
      <p>{messengerId}</p>
      <p className={styles['last-column']}>{phone}</p>
    </div>
  );
}
