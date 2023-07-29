import AlisaIcon from '../icons/social/alisa';
import FacebookIcon from '../icons/social/facebook';
import GoogleIcon from '../icons/social/google';
import InstagramIcon from '../icons/social/instagram';
import MailruIcon from '../icons/social/mailru';
import OdnoklassnikiIcon from '../icons/social/odnoklassniki';
import TelegramIcon from '../icons/social/telegram';
import TwitterIcon from '../icons/social/twitter';
import ViberIcon from '../icons/social/viber';
import VKIcon from '../icons/social/vk';
import WebIcon from '../icons/social/web';
import WhatsappIcon from '../icons/social/whatsapp';
import YandexIcon from '../icons/social/yandex';
import YoutubeIcon from '../icons/social/youtube';
import { AddBotButton } from '../components/AddBotButton/AddBotButton';
import { PlusButton } from '../components/PlusButton/PlusButton';

export default function AddBot() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: '10px',
        rowGap: '30px',
        marginTop: '50px',
      }}
    >
      <FacebookIcon
        type="blue"
        onClick={() => console.log('click')}
        width={60}
        height={60}
      />
      <FacebookIcon type="common" width={40} height={40} />
      <FacebookIcon type="disabled" width={20} height={20} />
      <TelegramIcon type="blue" onClick={() => console.log('click')} />
      <TelegramIcon type="common" />
      <TelegramIcon type="disabled" />
      <YoutubeIcon type="blue" onClick={() => console.log('click')} />
      <YoutubeIcon type="common" />
      <YoutubeIcon type="disabled" />
      <VKIcon type="blue" onClick={() => console.log('click')} />
      <VKIcon type="common" />
      <VKIcon type="disabled" />
      <TwitterIcon type="blue" onClick={() => console.log('click')} />
      <TwitterIcon type="common" />
      <TwitterIcon type="disabled" />
      <WebIcon type="blue" onClick={() => console.log('click')} />
      <WebIcon type="common" />
      <WebIcon type="disabled" />
      <OdnoklassnikiIcon type="blue" onClick={() => console.log('click')} />
      <OdnoklassnikiIcon type="common" />
      <OdnoklassnikiIcon type="disabled" />
      <MailruIcon type="blue" onClick={() => console.log('click')} />
      <MailruIcon type="common" />
      <MailruIcon type="disabled" />
      <YandexIcon type="blue" onClick={() => console.log('click')} />
      <YandexIcon type="common" />
      <YandexIcon type="disabled" />
      <ViberIcon type="blue" onClick={() => console.log('click')} />
      <ViberIcon type="common" />
      <ViberIcon type="disabled" />
      <WhatsappIcon type="blue" onClick={() => console.log('click')} />
      <WhatsappIcon type="common" />
      <WhatsappIcon type="disabled" />
      <InstagramIcon type="blue" onClick={() => console.log('click')} />
      <InstagramIcon type="common" />
      <InstagramIcon type="disabled" />
      <GoogleIcon type="blue" onClick={() => console.log('click')} />
      <GoogleIcon type="common" />
      <GoogleIcon type="disabled" />
      <AlisaIcon type="blue" onClick={() => console.log('click')} />
      <AlisaIcon type="common" />
      <AlisaIcon type="disabled" />

      <AddBotButton type="blue" onClick={() => console.log('click')} />
      <AddBotButton type="green" onClick={() => console.log('click')} />
      <PlusButton onClick={() => console.log('click')} />
      <PlusButton onClick={() => console.log('click')} />
      <AddBotButton type="blue" disabled onClick={() => console.log('click')} />
      <AddBotButton
        type="green"
        disabled
        onClick={() => console.log('click')}
      />
    </div>
  );
}
