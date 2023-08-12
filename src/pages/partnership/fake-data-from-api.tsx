import { IDataPayments, IDataStatistics } from './parthnership-types';

export const fakeDataStats: IDataStatistics[] = [
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

export const fakeDataPayments: IDataPayments[] = [
  {
    id: 1,
    date_request: '05.07.22',
    date_payment: '07.07.22',
    // Временное решение, пока нет бекенда
    act: 'Док.pdf',
    status: 'Выплачено',
    summ: 1500,
  },
  {
    id: 2,
    date_request: '02.07.22',
    date_payment: '-',
    // Временное решение, пока нет бекенда
    act: 'Фото.png',
    status: 'В обработке',
    summ: 4500,
  },
  {
    id: 3,
    date_request: '27.06.22',
    date_payment: '28.06.22',
    // Временное решение, пока нет бекенда
    act: 'Data.pdf',
    status: 'Выплачено',
    summ: 1000,
  },
];
