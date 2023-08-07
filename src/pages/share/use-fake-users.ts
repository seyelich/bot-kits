/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import users from './fake-users';
import { TUser } from '../../utils/types';

export default function useFakeUsers() {
  useEffect(() => {
    sessionStorage.setItem('users', JSON.stringify(users));
  }, []);

  function getUsers(limit: number, offset: number) {
    const userList = JSON.parse(sessionStorage.getItem('users') || '');
    return {
      users: userList.slice(offset, limit + offset),
      total: userList.length,
    };
  }

  function removeUsers(query: Array<string>) {
    const userList = JSON.parse(sessionStorage.getItem('users') || '');
    const res = userList.filter((user: TUser) => !query.includes(user._id));
    sessionStorage.setItem('users', JSON.stringify(res));
  }

  function addUser(user: Omit<TUser, '_id'>) {
    const userList = JSON.parse(sessionStorage.getItem('users') || '');
    userList.push({ ...user, _id: Math.random() });
    sessionStorage.setItem('users', JSON.stringify(userList));
  }

  return { getUsers, removeUsers, addUser };
}
