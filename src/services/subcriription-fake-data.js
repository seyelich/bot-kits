export const tariffs = [
  {
    id: 1,
    name: 'Старт',
    price: 390,
  },
  {
    id: 2,
    name: 'Стандарт',
    price: 790,
  },
  {
    id: 3,
    name: 'Бизнес',
    price: 1390,
  },
];

export const subscribeActive = {
  tarif: 'Бизнес',
  status: 'active',
  next_payment: '20.09.2023',
  payment_source: '*** 1119',
};

export const subscribeNotActive = {
  tarif: 'Бизнес',
  status: 'notActive',
  next_payment: '20.09.2023',
  reason: 'Недостаточно средств',
};

export const notSubscribe = {
  status: 'notSubscribe',
};
