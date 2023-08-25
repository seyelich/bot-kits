import { v4 as uuidv4 } from 'uuid';
import AccessIcon from './others/access';
import AddLInkLIcon from './others/add-link';
import ApiIcon from './others/api';
import Arrow from './others/arrow';
import ArrowRegister from './others/arrow-register';
import ArrowSmall from './others/arrow-small';
import ArrowUpCircleIcon from './others/arrow-up-circle';
import AskPhoneIcon from './others/ask-phone';
import styles from './icon-list.module.css';
import BoldIcon from './others/bold';
import BotLogoIcon from './others/bot-logo';
import BracketIcon from './others/bracket';
import ButtonIcon from './others/button';
import CalendarIcon from './others/calendar-icon';
import ChartsIcon from './others/charts';
import ChatAvatarReceived from './others/chat-avatar-received';
import ChatAvatarSent from './others/chat-avatar-sent';
import CheckIcon from './others/check';
import ChevronBigIcon from './others/chevron-big';
import Clock from './others/clock';
import CloseSmallIcon from './others/close-small';
import CloseIcon from './others/close';
import CloudIcon from './others/cloud';
import CodeIcon from './others/code';
import ConstructorIcon from './others/constructor';
import CopyBotIcon from './others/copy-bot';
import CopyIcon from './others/copy';
import CreaditCardIcon from './others/credit-card';
import CrmIcon from './others/crm';
import DashBoardIcon from './others/dash-board';
import DeepLinkIcon from './others/deep-link';
import DialogueIcon from './others/dialogue';
import DocCircleIcon from './others/doc-circle';
import DoneIcon from './others/done';
import DownIcon from './others/down';
import DownloadIcon from './others/download';
import EditIcon from './others/edit';
import EllipsisIcon from './others/ellipsis';
import EmojiIcon from './others/emoji';
import EqualNotIcon from './others/equal-not';
import EqualWithoutCaseIcon from './others/equal-without-case';
import EqualIcon from './others/equal';
import ExitIcon from './others/exit';
import FileIcon from './others/file';
import FilterIcon from './others/filter';
import FitIcon from './others/fit';
import FullScreenIcon from './others/full-screen';
import GitBranchIcon from './others/git-branch';
import HeadPhonesIcon from './others/head-phones';
import HelpIcon from './others/help';
import HidePasswordIcon from './others/hide-password';
import HorizontalIcon from './others/horizontal';
import ImageIcon from './others/image';
import InfoIcon from './others/info';
import InLineIcon from './others/inline';
import InLineWithoutCaseIcon from './others/inline-without-case';
import ItalicIcon from './others/italic';
import LessOrEqualIcon from './others/less-or-equal';
import LessIcon from './others/less';
import LinkIcon from './others/link';
import LinkSIcon from './others/links';
import ListsIcon from './others/lists';
import LogoUkassa from './others/logo-ukassa';
import LogOut from './others/logout';
import MailingIcon from './others/mailing';
import MapPinIcon from './others/map-pin';
import MenuIcon from './others/menu';
import MessageSquareIcon from './others/message-square';
import MinilandingIcon from './others/minilanding';
import MinusIcon from './others/minus';
import MoreIcon from './others/more';
import MoreButtonIcon from './others/more-button';
import MoreOrEqualIcon from './others/more-or-equal';
import MusicIcon from './others/music';
import NotInLineIcon from './others/not-inline';
import NotInLineWithoutCaseIcon from './others/not-inline-without-case';
import NotificationSettingsIcon from './others/notification-settings';
import PageIcon from './others/page';
import PauseIcon from './others/pause';
import PaymentIcon from './others/payment';
import PlayIcon from './others/play';
import PlayCircle from './others/play-circle';
import PlusIcon from './others/plus';
import PlusCircleIcon from './others/plus-circle';
import PointingHandIcon from './others/pointing-hand';
import RadioButtonOffIcon from './others/radio-button-off';
import RadioButtonOnIcon from './others/radio-button-on';
import RobotIcon from './others/robot';
import SearchIcon from './others/search';
import SettingsIcon from './others/settings';
import ShareIcon from './others/share';
import SlashIcon from './others/slash';
import SlidersIcon from './others/sliders';
import TableIcon from './others/table';
import TagIcon from './others/tag';
import TrashIcon from './others/trash';
import UpIcon from './others/up';
import UpdateIcon from './others/update';
import UploadIcon from './others/upload';
import UrlIcon from './others/url';
import UserIcon from './others/user';
import VerticalIcon from './others/vertical';
import VideoIcon from './others/video';
import WidgetIcon from './others/widge-icont';
import ZapIcon from './others/zap';
import XCircleIcon from './others/x-circle';
import AlisaIcon from './social/alisa';
import FacebookIcon from './social/facebook';
import GoogleIcon from './social/google';
import InstagramIcon from './social/instagram';
import MailruIcon from './social/mailru';
import OdnoklassnikiIcon from './social/odnoklassniki';
import TelegramIcon from './social/telegram';
import TwitterIcon from './social/twitter';
import ViberIcon from './social/viber';
import VKIcon from './social/vk';
import WebIcon from './social/web';
import WhatsappIcon from './social/whatsapp';
import YandexIcon from './social/yandex';
import YoutubeIcon from './social/youtube';

const IconList = () => {
  return (
    <div className={styles.iconList}>
      {[
        <AccessIcon />,
        <AddLInkLIcon />,
        <ApiIcon />,
        <ArrowRegister />,
        <ArrowSmall />,
        <ArrowUpCircleIcon />,
        <Arrow color="darkGrey" type="blue" />,
        <AskPhoneIcon />,
        <BoldIcon />,
        <BotLogoIcon width={24} height={24} />,
        <BracketIcon />,
        <ButtonIcon />,
        <CalendarIcon />,
        <ChartsIcon />,
        <ChatAvatarReceived />,
        <ChatAvatarSent />,
        <CheckIcon />,
        <ChevronBigIcon />,
        <Clock />,
        <CloseSmallIcon />,
        <CloseIcon />,
        <CloudIcon />,
        <CodeIcon />,
        <ConstructorIcon />,
        <CopyBotIcon />,
        <CopyIcon />,
        <CreaditCardIcon />,
        <CrmIcon />,
        <DashBoardIcon />,
        <DeepLinkIcon />,
        <DialogueIcon />,
        <DocCircleIcon />,
        <DoneIcon />,
        <DownIcon />,
        <DownloadIcon />,
        <EditIcon />,
        <EllipsisIcon />,
        <EmojiIcon />,
        <EqualNotIcon />,
        <EqualWithoutCaseIcon />,
        <EqualIcon />,
        <ExitIcon />,
        <FileIcon />,
        <FilterIcon />,
        <FitIcon />,
        <FullScreenIcon />,
        <GitBranchIcon />,
        <HeadPhonesIcon />,
        <HelpIcon />,
        <HidePasswordIcon />,
        <HorizontalIcon />,
        <ImageIcon />,
        <InfoIcon />,
        <InLineWithoutCaseIcon />,
        <InLineIcon />,
        <ItalicIcon />,
        <LessOrEqualIcon />,
        <LessIcon />,
        <LinkIcon />,
        <LinkSIcon />,
        <ListsIcon />,
        <LogoUkassa />,
        <LogOut />,
        <MailingIcon />,
        <MapPinIcon />,
        <MenuIcon />,
        <MessageSquareIcon />,
        <MinilandingIcon />,
        <MinusIcon />,
        <MoreButtonIcon />,
        <MoreOrEqualIcon />,
        <MoreIcon />,
        <MusicIcon />,
        <NotInLineWithoutCaseIcon />,
        <NotInLineIcon />,
        <NotificationSettingsIcon />,
        <PageIcon />,
        <PauseIcon />,
        <PaymentIcon />,
        <PlayCircle />,
        <PlayIcon />,
        <PlusCircleIcon />,
        <PlusIcon />,
        <PointingHandIcon />,
        <RadioButtonOffIcon />,
        <RadioButtonOnIcon />,
        <RobotIcon />,
        <SearchIcon />,
        <SettingsIcon />,
        <ShareIcon />,
        <SlashIcon />,
        <SlidersIcon />,
        <TableIcon />,
        <TagIcon />,
        <TrashIcon />,
        <UpIcon />,
        <UpdateIcon />,
        <UploadIcon />,
        <UrlIcon />,
        <UserIcon />,
        <VerticalIcon />,
        <VideoIcon />,
        <WidgetIcon />,
        <XCircleIcon />,
        <ZapIcon />,
        <AlisaIcon type="blue" />,
        <AlisaIcon type="common" />,
        <AlisaIcon type="disabled" />,
        <FacebookIcon type="blue" />,
        <FacebookIcon type="common" />,
        <FacebookIcon type="disabled" />,
        <GoogleIcon type="blue" />,
        <GoogleIcon type="common" />,
        <GoogleIcon type="disabled" />,
        <InstagramIcon type="blue" />,
        <InstagramIcon type="common" />,
        <InstagramIcon type="disabled" />,
        <MailruIcon type="blue" />,
        <MailruIcon type="common" />,
        <MailruIcon type="disabled" />,
        <OdnoklassnikiIcon type="blue" />,
        <OdnoklassnikiIcon type="common" />,
        <OdnoklassnikiIcon type="disabled" />,
        <TelegramIcon type="blue" />,
        <TelegramIcon type="common" />,
        <TelegramIcon type="disabled" />,
        <TwitterIcon type="blue" />,
        <TwitterIcon type="common" />,
        <TwitterIcon type="disabled" />,
        <ViberIcon type="blue" />,
        <ViberIcon type="common" />,
        <ViberIcon type="disabled" />,
        <VKIcon type="blue" />,
        <VKIcon type="common" />,
        <VKIcon type="disabled" />,
        <WebIcon type="blue" />,
        <WebIcon type="common" />,
        <WebIcon type="disabled" />,
        <WhatsappIcon type="blue" />,
        <WhatsappIcon type="common" />,
        <WhatsappIcon type="disabled" />,
        <YandexIcon type="blue" />,
        <YandexIcon type="common" />,
        <YandexIcon type="disabled" />,
        <YoutubeIcon type="blue" />,
        <YoutubeIcon type="common" />,
        <YoutubeIcon type="disabled" />,
      ].map((icon) => (
        <div className={styles.iconCard} key={uuidv4()}>
          <div className={styles.iconContainer}>{icon}</div>

          <p>{`<${icon.type.name} />`}</p>
        </div>
      ))}
    </div>
  );
};

export default IconList;
