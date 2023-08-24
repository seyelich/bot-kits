export interface IData {
  id: number;
  name: string;
  messenger:
    | 'Telegram'
    | 'VK'
    | 'Viber'
    | 'Whatsapp'
    | 'Alisa'
    | 'Google'
    | 'Facebook'
    | 'Youtube'
    | 'Instagram'
    | 'Twitter'
    | 'Web'
    | 'Odnoklassniki'
    | 'Mailru'
    | 'Yandex';
  messages: string;
  conversion: string;
  status: string;
}
