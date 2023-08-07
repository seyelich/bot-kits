export interface IFakeMessage {
  text: string;
  sendTime: string;
  status: {
    time: string;
    delivered: boolean;
  };
  isOwnMe: boolean;
}

export interface IFakeDialog {
  id: string;
  name: string;
  role: 'user';
  avatar: string;
  isOnline: boolean;
  lastAction: string;
  firstAction: string;
  quantityNew: number;
  messages: IFakeMessage[];
}
