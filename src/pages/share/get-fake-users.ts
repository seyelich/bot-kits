import users from './fake-users';

export default function getFakeUsers(limit: number, offset: number) {
  return {
    users: users.slice(offset, limit + offset),
    total: users.length,
  };
}
