import styles from './add-bot.module.css';
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
import PlusButton from '../components/plus-button/PlusButton';
import Button from '../components/Button/Button';
import IconButton from '../components/icon-button/IconButton';
import PointingHandIcon from '../icons/others/PointingHand';
import DownIcon from '../icons/others/Down';
import UpIcon from '../icons/others/Up';
import DoneIcon from '../icons/others/Done';
import UpdateIcon from '../icons/others/Update';
import LinkSIcon from '../icons/others/LinkS';
import AddLInkLIcon from '../icons/others/AddLinkL';
import RadioButtonOnIcon from '../icons/others/RadioButtonOn';
import RadioButtonOffIcon from '../icons/others/RadioButtonOff';
import HelpIcon from '../icons/others/Help';
import CloseIcon from '../icons/others/Close';
import EllipsisIcon from '../icons/others/Ellipsis';
import ChevronBigIcon from '../icons/others/ChevronBig';
import UserIcon from '../icons/others/User';
import CheckIcon from '../icons/others/Check';
import CopyIcon from '../icons/others/Copy';
import SearchIcon from '../icons/others/Search';
import PlayIcon from '../icons/others/Play';
import PauseIcon from '../icons/others/Pause';
import SlashIcon from '../icons/others/Slash';
import ZapIcon from '../icons/others/Zap';
import XCircleIcon from '../icons/others/XCircle';
import DashBoardIcon from '../icons/others/DashBoard';
import ConstructorIcon from '../icons/others/Constructor';
import MailingIcon from '../icons/others/Mailing';
import ListsIcon from '../icons/others/Lists';
import ChartsIcon from '../icons/others/Charts';
import DialogueIcon from '../icons/others/Dialogue';
import AccessIcon from '../icons/others/Access';
import MinilandingIcon from '../icons/others/Minilanding';
import CrmIcon from '../icons/others/Crm';
import ExitIcon from '../icons/others/Exit';
import TrashIcon from '../icons/others/Trash';
import EditIcon from '../icons/others/Edit';
import ShareIcon from '../icons/others/Share';
import CopyBotIcon from '../icons/others/CopyBot';
import SettingsIcon from '../icons/others/Settings';
import PaymentIcon from '../icons/others/Payment';
import CloseSmallIcon from '../icons/others/CloseSmall';
import NotificationSettingsIcon from '../icons/others/NotificationSettings';
import InfoIcon from '../icons/others/Info';
import LinkIcon from '../icons/others/Link';
import CloudIcon from '../icons/others/Cloud';
import EqualIcon from '../icons/others/Equal';
import EqualNotIcon from '../icons/others/EqualNot';
import MoreIcon from '../icons/others/More';
import LessIcon from '../icons/others/Less';
import MoreOrEqualIcon from '../icons/others/MoreOrEqual';
import LessOrEqualIcon from '../icons/others/LessOrEqual';
import EqualWithoutCaseIcon from '../icons/others/EqualWithoutCase';
import InLineIcon from '../icons/others/InLine';
import InLineWithoutCaseIcon from '../icons/others/InLineWithoutCase';
import NotInLineIcon from '../icons/others/NotInLine';
import NotInLineWithoutCaseIcon from '../icons/others/NotInLineWithoutCase';
import MessageSquareIcon from '../icons/others/MessageSquare';
import SlidersIcon from '../icons/others/Sliders';
import DeepLinkIcon from '../icons/others/DeepLink';
import TableIcon from '../icons/others/Table';
import HeadPhonesIcon from '../icons/others/HeadPhones';
import ApiIcon from '../icons/others/Api';
import CreaditCardIcon from '../icons/others/CreditCard';
import MapPinIcon from '../icons/others/MapPin';
import GitBranchIcon from '../icons/others/GitBranch';
import TagIcon from '../icons/others/Tag';
import MenuIcon from '../icons/others/Menu';
import BracketIcon from '../icons/others/Bracket';
import EmojiIcon from '../icons/others/Emoji';
import VerticalIcon from '../icons/others/Vertical';
import HorizontalIcon from '../icons/others/Horizontal';
import AskPhoneIcon from '../icons/others/AskPhone';
import UrlIcon from '../icons/others/Url';
import PlusCircleIcon from '../icons/others/PlusCircle';
import ArrowUpCircleIcon from '../icons/others/ArrowUpCircle';
import DeleteIcon from '../icons/others/Delete';
import VideoIcon from '../icons/others/Video';
import ImageIcon from '../icons/others/Image';
import FileIcon from '../icons/others/File';
import MusicIcon from '../icons/others/Music';
import BoldIcon from '../icons/others/Bold';
import ItalicIcon from '../icons/others/Italic';
import CodeIcon from '../icons/others/Code';
import PlusIcon from '../icons/others/Plus';
import MinusIcon from '../icons/others/Minus';
import FitIcon from '../icons/others/Fit';
import FullScreenIcon from '../icons/others/FullScreen';
import PageIcon from '../icons/others/Page';
import ButtonIcon from '../icons/others/Button';
import UploadIcon from '../icons/others/Upload';
import NotificationsIcon from '../icons/others/Notifications/Notifications';
import TutorialButton from '../components/tutorial-button/TutorialButton';
import AddBotButton from '../components/add-bot-button/AddBotButton';
import AddBlockButton from '../components/add-block-button/AddBlockButton';
import CreditCardIcon from '../components/icons/add-block-button/CreditCard';

export default function AddBot() {
  return (
    <div>
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
        <Button
          type="blue"
          onClick={() => console.log('click')}
          text="СИНЯЯ КНОПКА1"
          width={180}
          height={46}
          extraClass={styles.button}
        />
        <Button
          type="blue"
          disabled
          onClick={() => console.log('click')}
          text="СИНЯЯ КНОПКА1"
          width={180}
          height={46}
          extraClass={styles.button}
        />
        <PlusButton type="blue" onClick={() => console.log('click')} />
        <PlusButton type="blue" onClick={() => console.log('click')} disabled />
        <PlusButton type="green" onClick={() => console.log('click')} />
        <PlusButton
          type="green"
          onClick={() => console.log('click')}
          disabled
        />
        <Button
          type="green"
          onClick={() => console.log('click')}
          text="ДОБАВИТЬ БОТА"
          width={180}
          height={46}
        />
        <Button
          type="green"
          disabled
          onClick={() => console.log('click')}
          text="ЗЕЛЁНАЯ КНОПКА"
          width={180}
          height={46}
        />
        <Button
          type="grey"
          onClick={() => console.log('click')}
          text="СЕРАЯ КНОПКА"
          width={180}
          height={46}
        />
        <Button
          type="grey"
          onClick={() => console.log('click')}
          disabled
          text="СЕРАЯ КНОПКА"
          width={180}
          height={46}
        />
        <IconButton
          onClick={() => console.log('click')}
          width={40}
          height={40}
          icon={<CopyIcon width={24} height={24} />}
        />
        <IconButton
          onClick={() => console.log('click')}
          disabled
          width={40}
          height={40}
          icon={<CopyIcon width={24} height={24} />}
        />
        <TutorialButton type="instruction" />
        <TutorialButton type="instruction" disabled />
        <TutorialButton type="video" />
        <TutorialButton type="video" disabled />
        <AddBotButton />
        <AddBotButton disabled />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          rowGap: '20px',
          marginTop: '50px',
        }}
      >
        <AddBlockButton text="Блок сообщений" icon={<ApiIcon />} />
        <AddBlockButton text="Блок сообщений" icon={<ApiIcon />} disabled />
        <AddBlockButton text="Условный блок" icon={<GitBranchIcon />} />
        <AddBlockButton text="Управление переменными" icon={<SlidersIcon />} />
        <AddBlockButton text="Сохранение данных в CRM" icon={<TableIcon />} />
        <AddBlockButton text="Перевод на оператора" icon={<HeadPhonesIcon />} />
        <AddBlockButton text="API" icon={<ApiIcon />} />
        <AddBlockButton text="DeepLink" icon={<DeepLinkIcon />} />
        <AddBlockButton text="Оплата" icon={<CreditCardIcon />} />
        <AddBlockButton text="Координаты" icon={<MapPinIcon />} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          columnGap: '10px',
          rowGap: '30px',
          marginTop: '50px',
        }}
      >
        <PointingHandIcon color="blue" width={50} height={50} />
        <DownIcon color="blue" width={50} height={50} />
        <UpIcon color="blue" width={50} height={50} />
        <DoneIcon color="blue" width={50} height={50} />
        <UpdateIcon color="blue" width={50} height={50} />
        <LinkSIcon color="blue" width={50} height={50} />
        <AddLInkLIcon color="blue" width={50} height={50} />
        <RadioButtonOnIcon
          color="blue"
          circleColor="red"
          width={50}
          height={50}
        />
        <RadioButtonOffIcon color="blue" width={50} height={50} />
        <HelpIcon color="blue" width={50} height={50} />
        <CloseIcon color="blue" width={50} height={50} />
        <EllipsisIcon color="blue" width={50} height={50} />
        <ChevronBigIcon color="blue" width={50} height={50} />
        <UserIcon color="blue" width={50} height={50} />
        <CheckIcon color="blue" width={50} height={50} />
        <CopyIcon color="blue" width={50} height={50} />
        <SearchIcon color="blue" width={50} height={50} />
        <PlayIcon color="blue" width={50} height={50} />
        <PauseIcon color="blue" width={50} height={50} />
        <SlashIcon color="blue" width={50} height={50} />
        <ZapIcon color="blue" width={50} height={50} />
        <XCircleIcon color="blue" width={50} height={50} />
        <DashBoardIcon color="blue" width={50} height={50} />
        <ConstructorIcon color="blue" width={50} height={50} />
        <MailingIcon color="blue" width={50} height={50} />
        <ListsIcon color="blue" width={50} height={50} />
        <ChartsIcon color="blue" width={50} height={50} />
        <DialogueIcon color="blue" width={50} height={50} />
        <AccessIcon color="blue" width={50} height={50} />
        <MinilandingIcon color="blue" width={50} height={50} />
        <CrmIcon color="blue" width={50} height={50} />
        <ExitIcon color="blue" width={50} height={50} />
        <TrashIcon color="blue" width={50} height={50} />
        <EditIcon color="blue" width={50} height={50} />
        <ShareIcon color="blue" width={50} height={50} />
        <CopyBotIcon color="blue" width={50} height={50} />
        <SettingsIcon color="blue" width={100} height={100} />
        <PaymentIcon color="blue" width={100} height={100} />
        <CloseSmallIcon color="blue" width={100} height={100} />
        <NotificationSettingsIcon color="blue" width={100} height={100} />
        <InfoIcon color="blue" width={100} height={100} />
        <LinkIcon color="blue" width={100} height={100} />
        <CloudIcon color="blue" width={100} height={100} />
        <EqualIcon color="blue" width={100} height={100} />
        <EqualNotIcon color="blue" width={100} height={100} />
        <MoreIcon color="blue" width={100} height={100} />
        <LessIcon color="blue" width={100} height={100} />
        <MoreOrEqualIcon color="blue" width={100} height={100} />
        <LessOrEqualIcon color="blue" width={100} height={100} />
        <EqualWithoutCaseIcon color="blue" width={100} height={100} />
        <InLineIcon color="blue" width={100} height={100} />
        <InLineWithoutCaseIcon color="blue" width={100} height={100} />
        <NotInLineIcon color="blue" width={100} height={100} />
        <NotInLineWithoutCaseIcon color="blue" width={100} height={100} />
        <MessageSquareIcon color="blue" width={100} height={100} />
        <SlidersIcon color="blue" width={100} height={100} />
        <DeepLinkIcon color="blue" width={100} height={100} />
        <TableIcon color="blue" width={100} height={100} />
        <HeadPhonesIcon color="blue" width={100} height={100} />
        <ApiIcon color="blue" width={100} height={100} />
        <CreaditCardIcon color="blue" width={100} height={100} />
        <MapPinIcon color="blue" width={100} height={100} />
        <GitBranchIcon color="blue" width={100} height={100} />
        <TagIcon color="blue" width={100} height={100} />
        <MenuIcon color="blue" width={100} height={100} />
        <BracketIcon color="blue" width={100} height={100} />
        <EmojiIcon color="blue" width={100} height={100} />
        <VerticalIcon color="blue" width={100} height={100} />
        <HorizontalIcon color="blue" width={100} height={100} />
        <AskPhoneIcon color="blue" width={100} height={100} />
        <UrlIcon color="blue" width={100} height={100} />
        <PlusCircleIcon color="blue" width={100} height={100} />
        <div style={{ color: 'red' }}>
          <ArrowUpCircleIcon width={30} height={30} />
          <DeleteIcon width={30} height={30} />
          <VideoIcon width={30} height={30} />
          <ImageIcon width={30} height={30} />
          <FileIcon width={30} height={30} />
          <MusicIcon width={30} height={30} />
          <BoldIcon width={30} height={30} />
          <ItalicIcon width={30} height={30} />
          <CodeIcon width={30} height={30} />
          <PlusIcon width={30} height={30} />
          <MinusIcon width={30} height={30} />
          <FitIcon width={30} height={30} />
          <FullScreenIcon width={30} height={30} />
          <PageIcon width={30} height={30} />
          <ButtonIcon width={30} height={30} />
          <UploadIcon width={30} height={30} />
          <NotificationsIcon counter={72} width={30} height={30} />
        </div>
      </div>
    </div>
  );
}
