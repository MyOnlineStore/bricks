import { BadgeThemeType } from '../components/Badge';
import { ButtonThemeType } from '../components/Button/style';
import { CheckboxThemeType } from '../components/Checkbox/style';
import { ContrastThemeType } from '../components/Contrast/style';
import { HeadingThemeType } from '../components/Heading';
import { InlineNotificationThemeType } from '../components/InlineNotification/style';
import { LinkThemeType } from '../components/Link/style';
import { MessageStreamThemeType } from '../components/MessageStream/style';
import { ModalThemeType } from '../components/Modal/style';
import { NotificationThemeType } from '../components/Notification/style';
import { PopoverThemeType } from '../components/Popover/style';
import { PriceTagThemeType } from '../components/PriceTag/style';
import { RadioButtonThemeType } from '../components/RadioButton/style';
import { ScrollBoxThemeType } from '../components/ScrollBox/style';
import { TextThemeType } from '../components/Text/style';
import { TextFieldThemeType } from '../components/TextField/style';
import { ToggleThemeType } from '../components/Toggle/style';

type ThemeType = {
    Badge: BadgeThemeType;
    Button: ButtonThemeType;
    Checkbox: CheckboxThemeType;
    Contrast: ContrastThemeType;
    Heading: HeadingThemeType;
    MessageStream: MessageStreamThemeType;
    Modal: ModalThemeType;
    Notification: NotificationThemeType;
    InlineNotification: InlineNotificationThemeType;
    Link: LinkThemeType;
    Popover: PopoverThemeType;
    PriceTag: PriceTagThemeType;
    ScrollBox: ScrollBoxThemeType;
    Text: TextThemeType;
    TextField: TextFieldThemeType;
    RadioButton: RadioButtonThemeType;
    Toggle: ToggleThemeType;
};

export default ThemeType;
