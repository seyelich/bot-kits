import React, { FC } from 'react';

import styles from './index.module.css';

import TelegramIcon from '../../ui/icons/social/telegram';
import VKIcon from '../../ui/icons/social/vk';
import ViberIcon from '../../ui/icons/social/viber';
import WhatsappIcon from '../../ui/icons/social/whatsapp';
import AlisaIcon from '../../ui/icons/social/alisa';
import GoogleIcon from '../../ui/icons/social/google';
import FacebookIcon from '../../ui/icons/social/facebook';
import YoutubeIcon from '../../ui/icons/social/youtube';
import InstagramIcon from '../../ui/icons/social/instagram';
import TwitterIcon from '../../ui/icons/social/twitter';
import WebIcon from '../../ui/icons/social/web';
import OdnoklassnikiIcon from '../../ui/icons/social/odnoklassniki';
import MailruIcon from '../../ui/icons/social/mailru';
import YandexIcon from '../../ui/icons/social/yandex';

interface IIcon {
  messenger: string;
}

const Icon: FC<IIcon> = ({ messenger }) => {
  switch (messenger) {
    case 'Telegram':
      return <TelegramIcon type="common" width={32} height={32} />;
    case 'VK':
      return <VKIcon type="common" width={32} height={32} />;
    case 'Viber':
      return <ViberIcon type="common" width={32} height={32} />;
    case 'Whatsapp':
      return <WhatsappIcon type="common" width={32} height={32} />;
    case 'Alisa':
      return <AlisaIcon type="common" width={32} height={32} />;
    case 'Google':
      return <GoogleIcon type="common" width={32} height={32} />;
    case 'Facebook':
      return <FacebookIcon type="common" width={32} height={32} />;
    case 'Youtube':
      return <YoutubeIcon type="common" width={32} height={32} />;
    case 'Instagram':
      return <InstagramIcon type="common" width={32} height={32} />;
    case 'Twitter':
      return <TwitterIcon type="common" width={32} height={32} />;
    case 'Web':
      return <WebIcon type="common" width={32} height={32} />;
    case 'Odnoklassniki':
      return <OdnoklassnikiIcon type="common" width={32} height={32} />;
    case 'Mailru':
      return <MailruIcon type="common" width={32} height={32} />;
    case 'Yandex':
      return <YandexIcon type="common" width={32} height={32} />;
    default:
      return null;
  }
};

interface IIconWithPercents {
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
  conversion: string;
}

const IconWithPercents: FC<IIconWithPercents> = ({ messenger, conversion }) => (
  <div className={styles.icon}>
    <p className={styles.icon__conversion}>{conversion}</p>
    <Icon messenger={messenger} />
  </div>
);

export default IconWithPercents;
