import { Dispatch, SetStateAction } from 'react';
import { TUser } from '../../utils/types';
import styles from './user-row.module.css';
import UserCheckbox from '../user-checkbox/user-checkbox';

type TUserRowProps = TUser & {
  checking?: boolean;
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
  checking = true,
}: TUserRowProps) {
  return (
    <div className={`${styles.user} ${extraClass}`}>
      {checking && (
        <UserCheckbox
          check={checked}
          extraClass={styles.check}
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
      )}
      <p className={styles.name}>{name}</p>
      <p className={styles.surname}>{surname}</p>
      <p className={styles.username}>{username || '-'}</p>
      <p className={styles.messengerid}>{messengerId}</p>
      <p className={styles.phone}>{phone || '-'}</p>
    </div>
  );
}
