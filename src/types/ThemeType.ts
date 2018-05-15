import { ButtonThemeType } from '../components/Button';
import { FlatButtonThemeType } from '../components/FlatButton';
import { HeadingThemeType } from '../components/Heading';
import { MessageThemeType } from '../components/Message';
import { NotificationThemeType } from '../components/Notification';
import { PriceTagThemeType } from '../components/PriceTag';
import { ScrollBoxThemeType } from '../components/ScrollBox';
import { SubHeadingThemeType } from '../components/SubHeading';
import { TextThemeType } from '../components/Text';

type ThemeType = {
    Button:ButtonThemeType;
    FlatButton:FlatButtonThemeType;
    Heading:HeadingThemeType;
    Message:MessageThemeType;
    Notification:NotificationThemeType;
    PriceTag:PriceTagThemeType;
    ScrollBox:ScrollBoxThemeType;
    SubHeading:SubHeadingThemeType;
    Text:TextThemeType;
};

export default ThemeType;
