import React, { FC } from 'react';

import styles from './index.module.css';

import TelegramIcon from '../../../../icons/social/telegram';
import VKIcon from '../../../../icons/social/vk';
import ViberIcon from '../../../../icons/social/viber';
import WhatsappIcon from '../../../../icons/social/whatsapp';
import AlisaIcon from '../../../../icons/social/alisa';
import GoogleIcon from '../../../../icons/social/google';
import FacebookIcon from '../../../../icons/social/facebook';
import YoutubeIcon from '../../../../icons/social/youtube';
import InstagramIcon from '../../../../icons/social/instagram';
import TwitterIcon from '../../../../icons/social/twitter';
import WebIcon from '../../../../icons/social/web';
import OdnoklassnikiIcon from '../../../../icons/social/odnoklassniki';
import MailruIcon from '../../../../icons/social/mailru';
import YandexIcon from '../../../../icons/social/yandex';

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
