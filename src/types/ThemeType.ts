import { ButtonThemeType } from '../components/Button';
import { HeadingThemeType } from '../components/Heading';
import { MessageStreamThemeType } from '../components/MessageStream';
import { NotificationThemeType } from '../components/Notification';
import { PriceTagThemeType } from '../components/PriceTag';
import { ScrollBoxThemeType } from '../components/ScrollBox';
import { SubHeadingThemeType } from '../components/SubHeading';
import { TextThemeType } from '../components/Text';

type ThemeType = {
    Button:ButtonThemeType;
    Heading:HeadingThemeType;
    MessageStream:MessageStreamThemeType;
    Notification:NotificationThemeType;
    PriceTag:PriceTagThemeType;
    ScrollBox:ScrollBoxThemeType;
    SubHeading:SubHeadingThemeType;
    Text:TextThemeType;
};

export default ThemeType;
