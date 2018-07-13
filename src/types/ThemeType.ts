import { BadgeThemeType } from '../components/Badge';
import { ButtonThemeType } from '../components/Button/style';
import { CheckboxThemeType } from '../components/Checkbox/style';
import { ContrastThemeType } from '../components/Contrast/style';
import { HeadingThemeType } from '../components/Heading';
import { IllustrationThemeType } from '../components/Illustration/style';
import { LinkThemeType } from '../components/Link/style';
import { MessageStreamThemeType } from '../components/MessageStream/style';
import { ModalThemeType } from '../components/Modal/style';
import { NotificationThemeType } from '../components/Notification/style';
import { PopoverThemeType } from '../components/Popover/style';
import { PriceTagThemeType } from '../components/PriceTag/style';
import { RadioButtonThemeType } from '../components/RadioButton/style';
import { ScrollBoxThemeType } from '../components/ScrollBox/style';
import { TableThemeType } from '../components/Table/style';
import { TableCellThemeType } from '../components/TableCell/style';
import { TableRowThemeType } from '../components/TableRow/style';
import { TextThemeType } from '../components/Text/style';
import { TextFieldThemeType } from '../components/TextField/style';
import { ToggleThemeType } from '../components/Toggle/style';
import { SelectThemeType } from '../components/Select/style';

type ThemeType = {
    Badge: BadgeThemeType;
    Button: ButtonThemeType;
    Checkbox: CheckboxThemeType;
    Contrast: ContrastThemeType;
    Heading: HeadingThemeType;
    MessageStream: MessageStreamThemeType;
    Modal: ModalThemeType;
    Notification: NotificationThemeType;
    Illustration: IllustrationThemeType;
    Link: LinkThemeType;
    Popover: PopoverThemeType;
    PriceTag: PriceTagThemeType;
    ScrollBox: ScrollBoxThemeType;
<<<<<<< HEAD
    Select: SelectThemeType;
=======
    Table: TableThemeType;
    TableCell: TableCellThemeType;
    TableRow: TableRowThemeType;
>>>>>>> 2fb90bf... first working prototype
    Text: TextThemeType;
    TextField: TextFieldThemeType;
    RadioButton: RadioButtonThemeType;
    Toggle: ToggleThemeType;
};

export default ThemeType;
