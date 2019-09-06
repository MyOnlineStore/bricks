import { BadgeThemeType } from '../../components/Badge';
import { ButtonThemeType } from '../../components/Button';
import { CheckboxThemeType } from '../../components/Checkbox/style';
import { ContrastThemeType } from '../../components/Contrast/style';
import { HeadingThemeType } from '../../components/Heading';
import { IllustrationThemeType } from '../../components/Illustration/style';
import { LinkThemeType } from '../../components/Link/style';
import { MessageStreamThemeType } from '../../components/MessageStream/style';
import { ModalThemeType } from '../../components/Modal/style';
import { MultiButtonThemeType } from '../../components/MultiButton/style';
import { NativeSelectThemeType } from '../../components/NativeSelect/style';
import { NotificationThemeType } from '../../components/Notification/style';
import { PopoverThemeType } from '../../components/Popover/style';
import { PriceTagThemeType } from '../../components/PriceTag/style';
import { RadioButtonThemeType } from '../../components/RadioButton/style';
import { RaisedThemeType } from '../../components/Raised';
import { RangeThemeType } from '../../components/Range/style';
import { SliderThemeType } from '../../components/Slider/style';
import { ScrollBoxThemeType } from '../../components/ScrollBox/style';
import { TableThemeType } from '../../components/Table/style';
import { TextThemeType } from '../../components/Text';
import { TextAreaThemeType } from '../../components/TextArea/style';
import { TextFieldThemeType } from '../../components/TextField/style';
import { TileThemeType } from '../../components/Tile';
import { ToastThemeType } from '../../components/Toast/style';
import { ToggleThemeType } from '../../components/Toggle/style';
import { SelectThemeType } from '../../components/Select/style';
import { SkeletonThemeType } from '../../components/Skeleton/style';
import { BreadcrumbsThemeType } from '../../components/Breadcrumbs/style';
import { IconButtonThemeType } from '../../components/IconButton';
import { TextualButtonThemeType } from '../../components/TextualButton';
import { ProgressThemeType } from '../../components/Progress/style';

type ThemeType = {
    Badge: BadgeThemeType;
    Breadcrumbs: BreadcrumbsThemeType;
    Button: ButtonThemeType;
    Checkbox: CheckboxThemeType;
    Contrast: ContrastThemeType;
    Heading: HeadingThemeType;
    MessageStream: MessageStreamThemeType;
    Modal: ModalThemeType;
    MultiButton: MultiButtonThemeType;
    NativeSelect: NativeSelectThemeType;
    Notification: NotificationThemeType;
    IconButton: IconButtonThemeType;
    Illustration: IllustrationThemeType;
    Link: LinkThemeType;
    Popover: PopoverThemeType;
    PriceTag: PriceTagThemeType;
    Raised: RaisedThemeType;
    Range: RangeThemeType;
    ScrollBox: ScrollBoxThemeType;
    Select: SelectThemeType;
    Skeleton: SkeletonThemeType;
    Slider: SliderThemeType;
    Table: TableThemeType;
    Text: TextThemeType;
    TextArea: TextAreaThemeType;
    TextField: TextFieldThemeType;
    TextualButton: TextualButtonThemeType;
    Tile: TileThemeType;
    Toast: ToastThemeType;
    RadioButton: RadioButtonThemeType;
    Toggle: ToggleThemeType;
    Progress: ProgressThemeType;
};

export default ThemeType;
