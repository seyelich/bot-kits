/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import { Dispatch, SetStateAction } from 'react';
import { TUser } from '../../utils/types';
import UserRow from '../user-row/user-row';

type TMyUsersProps = {
  users: Array<TUser>;
  checked: Set<string>;
  setChecked: Dispatch<SetStateAction<Set<string>>>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function MyUsers({ users, checked, setChecked }: TMyUsersProps) {
  const elements = users.map((user) => (
    <UserRow
      {...user}
      checked={checked.has(user._id)}
      setChecked={setChecked}
      key={user._id}
    />
  ));
  return (
    <div>
      <h2>Мои пользователи</h2>
      {elements}
    </div>
  );
}
