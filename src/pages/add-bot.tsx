import AlisaIcon from '../icons/alisa';
import FacebookIcon from '../icons/facebook';
import GoogleIcon from '../icons/google';
import InstagramIcon from '../icons/instagram';
import MailruIcon from '../icons/mailru';
import OdnoklassnikiIcon from '../icons/odnoklassniki';
import TelegramIcon from '../icons/telegram';
import TwitterIcon from '../icons/twitter';
import ViberIcon from '../icons/viber';
import VKIcon from '../icons/vk';
import WebIcon from '../icons/web';
import WhatsappIcon from '../icons/whatsapp';
import YandexIcon from '../icons/yandex';
import YoutubeIcon from '../icons/youtube';

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
    </div>
  );
}
