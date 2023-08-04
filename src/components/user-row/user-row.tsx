import { Dispatch, SetStateAction } from 'react';
import { TUser } from '../../utils/types';
import styles from './user-row.module.css';
import UserCheckbox from '../user-checkbox/user-checkbox';

type TUserRowProps = TUser & {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<Set<string>>>;
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
}: TUserRowProps) {
  return (
    <div className={styles.user}>
      <UserCheckbox
        check={checked}
        onClick={() =>
          setChecked((set) => {
            if (set.has(_id)) {
              set.delete(_id);
            } else {
              set.add(_id);
            }
            return set;
          })
        }
      />
      <p>{name}</p>
      <p>{surname}</p>
      <p>{username}</p>
      <p>{messengerId}</p>
      <p>{phone}</p>
    </div>
  );
}
