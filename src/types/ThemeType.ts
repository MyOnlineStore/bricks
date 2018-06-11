import { ButtonThemeType } from '../components/Button/style';
import { ContrastThemeType } from '../components/Contrast/style';
import { HeadingThemeType } from '../components/Heading';
import { InlineNotificationThemeType } from '../components/InlineNotification/style';
import { MessageStreamThemeType } from '../components/MessageStream/style';
import { NotificationThemeType } from '../components/Notification/style';
import { PopoverThemeType } from '../components/Popover/style';
import { PriceTagThemeType } from '../components/PriceTag/style';
import { ScrollBoxThemeType } from '../components/ScrollBox/style';
import { SubHeadingThemeType } from '../components/SubHeading';
import { TextThemeType } from '../components/Text/style';
import { TextFieldThemeType } from '../components/TextField/style';

type ThemeType = {
    Button: ButtonThemeType;
    Contrast: ContrastThemeType;
    Heading: HeadingThemeType;
    MessageStream: MessageStreamThemeType;
    Notification: NotificationThemeType;
    InlineNotification: InlineNotificationThemeType;
    Popover: PopoverThemeType;
    PriceTag: PriceTagThemeType;
    ScrollBox: ScrollBoxThemeType;
    SubHeading: SubHeadingThemeType;
    Text: TextThemeType;
    TextField: TextFieldThemeType;
};

export default ThemeType;
