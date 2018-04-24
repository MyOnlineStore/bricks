import { ButtonThemeType } from '../components/Button';
import { FlatButtonThemeType } from '../components/FlatButton';
import { HeadingThemeType } from '../components/Heading';
import { NotificationThemeType } from '../components/Notification';
import { PriceTagThemeType } from '../components/PriceTag';
import { SubHeadingThemeType } from '../components/SubHeading';
import { TextThemeType } from '../components/Text';

type ThemeType = {
    Notification:NotificationThemeType;
    PriceTag:PriceTagThemeType;
    SubHeading:SubHeadingThemeType;
    Text:TextThemeType;
    Heading:HeadingThemeType;
    FlatButton:FlatButtonThemeType;
    Button:ButtonThemeType;
};

export default ThemeType;
