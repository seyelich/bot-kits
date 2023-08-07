import { IDataStatistics } from './parthnership-types';

const fakeData: IDataStatistics[] = [
  {
    id: 1,
    visities: '28 человек',
    registrations: 15,
    status: 'Оплачено',
    summ: 5000,
    commission: 1500,
    paid: 4500,
    withdrawal: 1500,
  },
  {
    id: 2,
    visities: '17 человек',
    registrations: 8,
    status: 'Не оплачено',
    summ: 15000,
    commission: 4500,
    paid: 8200,
    withdrawal: 4500,
  },
  {
    id: 3,
    visities: '10 человек',
    registrations: 10,
    status: 'В обработке',
    summ: 5000,
    commission: 1500,
    paid: 10000,
    withdrawal: 1500,
  },
];

export default fakeData;
