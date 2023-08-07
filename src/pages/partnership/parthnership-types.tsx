export interface IDataStatistics {
  id: number;
  visities: string;
  registrations: number;
  status: string;
  summ: number;
  commission: number;
  paid: number;
  withdrawal: number;
}

export interface IDataPayments {
  id: number;
  date_request: string;
  date_payment: string;
  act: string;
  status: string;
  summ: number;
}
