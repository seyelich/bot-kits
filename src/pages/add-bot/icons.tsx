import AlisaIcon from '../../ui/icons/social/alisa';
import FacebookIcon from '../../ui/icons/social/facebook';
import InstagramIcon from '../../ui/icons/social/instagram';
import OdnoklassnikiIcon from '../../ui/icons/social/odnoklassniki';
import TelegramIcon from '../../ui/icons/social/telegram';
import ViberIcon from '../../ui/icons/social/viber';
import VKIcon from '../../ui/icons/social/vk';
import WebIcon from '../../ui/icons/social/web';
import WhatsappIcon from '../../ui/icons/social/whatsapp';

const icons = [
  {
    node: (
      width: number,
      height: number,
      type: 'blue' | 'common' | 'disabled'
    ) => <FacebookIcon type={type} width={width} height={height} />,
    name: 'Facebook',
  },
  {
    node: (
      width: number,
      height: number,
      type: 'blue' | 'common' | 'disabled'
    ) => <VKIcon type={type} width={width} height={height} />,
    name: 'VK',
  },
  {
    node: (
      width: number,
      height: number,
      type: 'blue' | 'common' | 'disabled'
    ) => <OdnoklassnikiIcon type={type} width={width} height={height} />,
    name: 'Odnoklassniki',
  },
  {
    node: (
      width: number,
      height: number,
      type: 'blue' | 'common' | 'disabled'
    ) => <TelegramIcon type={type} width={width} height={height} />,
    name: 'Telegram',
  },
  {
    node: (
      width: number,
      height: number,
      type: 'blue' | 'common' | 'disabled'
    ) => <ViberIcon type={type} width={width} height={height} />,
    name: 'Viber',
  },
  {
    node: (
      width: number,
      height: number,
      type: 'blue' | 'common' | 'disabled'
    ) => <AlisaIcon type={type} width={width} height={height} />,
    name: 'Алиса',
  },
  {
    node: (
      width: number,
      height: number,
      type: 'blue' | 'common' | 'disabled'
    ) => <WhatsappIcon type={type} width={width} height={height} />,
    name: 'WhatsApp',
  },
  {
    node: (
      width: number,
      height: number,
      type: 'blue' | 'common' | 'disabled'
    ) => <InstagramIcon type={type} width={width} height={height} />,
    name: 'Instagram',
  },
  {
    node: (
      width: number,
      height: number,
      type: 'blue' | 'common' | 'disabled'
    ) => <WebIcon type={type} width={width} height={height} />,
    name: 'Веб-сайт',
  },
];

export default icons;
