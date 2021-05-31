import ThemeType from '../../types/ThemeType';
import deepmerge from 'deepmerge';
import * as ThemeTypes from './CustomThemeTypes';
import RecursivePartialType from '../../types/RecursivePartialType';
import ThemeTools from './ThemeTools';
import { composeBadgeTheme } from '../../components/Badge';
import { composeBreadcrumbsTheme } from '../../components/Breadcrumbs/style';
import { composeButtonTheme } from '../../components/Button';
import { composeCheckboxTheme } from '../../components/Checkbox/style';
import { composeContrastTheme } from '../../components/Contrast/style';
import { composeCounterTheme } from '../../components/Counter';
import { composeHeadingTheme } from '../../components/Heading';
import { composeIconButtonTheme } from '../../components/IconButton';
import { composeLinkTheme } from '../../components/Link/style';
import { composeMessageStreamTheme } from '../../components/MessageStream/style';
import { composeModalTheme } from '../../components/Modal/style';
import { composeNotificationTheme } from '../../components/Notification/style';
import { composePromotionBadgeTheme } from '../../components/PromotionBadge';
import { composeRadioButtonTheme } from '../../components/RadioButton/style';
import { composeRangeTheme } from '../../components/Range/style';
import { composeSliderTheme } from '../../components/Slider/style';
import { composeRaisedTheme } from '../../components/Raised';
import { composeSelectTheme } from '../../components/Select/style';
import { composeNativeSelectTheme } from '../../components/NativeSelect/style';
import { composeToggleTheme } from '../../components/Toggle/style';
import { composeTableTheme } from '../../components/Table/style';
import { composeTextTheme } from '../../components/Text';
import { composeTextAreaTheme } from '../../components/TextArea/style';
import { composeTextFieldTheme } from '../../components/TextField/style';
import { composeSkeletonTheme } from '../../components/Skeleton/style';
import { composeToastTheme } from '../../components/Toast/style';
import { composeTileTheme } from '../../components/Tile';
import { composePopoverTheme } from '../../components/Popover/style';
import { composeTooltipTheme } from '../../components/Tooltip/style';
import { composeScrollBoxTheme } from '../../components/ScrollBox/style';
import { composeIllustrationTheme } from '../../components/Illustration/style';
import { composeTextualButton } from '../../components/TextualButton';
import { composeProgressTheme } from '../../components/Progress/style';
import { composeFormRowTheme } from '../../components/FormRow/style';
import { composeAccordionTheme } from '../../components/Accordion/style';
import { composeCardTheme } from '../../components/Card/style';
import { composePaginationTheme } from '../../components/Pagination/style';
import { composeFileInputTheme } from '../../components/FileInput/style';
import { composeColorDropTheme } from '../../components/ColorDrop/style';

const generateThemeObject = (
    providedOptions: ThemeTypes.ProvidedThemeOptionsType,
    themeOverrides?: RecursivePartialType<ThemeType>,
): [ThemeType, ThemeTypes.ThemeSettingsType] => {
    const themeTools = new ThemeTools(
        deepmerge<ThemeTypes.ThemeOptionsType>(
            {
                colors: {
                    background: '#FFFFFF',
                    backgroundContrast: '#EEEEEE',
                    primary: '#CC9933',
                    secondary: '#F00',
                    tertiary: '#0F0',
                    textLight: '#FFFFFF',
                    textDark: '#000000',
                    severity: {
                        error: '#CC0000',
                        success: '#31953d',
                        info: '#4e82bb',
                        warning: '#fcc200',
                    },
                },
                text: {
                    primaryFont: 'sans-serif',
                    secondaryFont: 'serif',
                    baseFontSize: 15,
                },
                roundness: 0,
                buttonStyle: 'deep',
                formColorScheme: 'auto',
            },
            providedOptions as ThemeTypes.ThemeOptionsType,
        ),
    );

    const ThemeObject: ThemeType = {
        Accordion: composeAccordionTheme(themeTools),
        Badge: composeBadgeTheme(themeTools),
        Breadcrumbs: composeBreadcrumbsTheme(themeTools),
        Button: composeButtonTheme(themeTools),
        Card: composeCardTheme(themeTools),
        Checkbox: composeCheckboxTheme(themeTools),
        ColorDrop: composeColorDropTheme(),
        Contrast: composeContrastTheme(themeTools),
        FileInput: composeFileInputTheme(themeTools),
        FormRow: composeFormRowTheme(themeTools),
        Counter: composeCounterTheme(themeTools),
        Heading: composeHeadingTheme(themeTools),
        IconButton: composeIconButtonTheme(themeTools),
        Illustration: composeIllustrationTheme(),
        Link: composeLinkTheme(themeTools),
        MessageStream: composeMessageStreamTheme(themeTools),
        Modal: composeModalTheme(themeTools),
        NativeSelect: composeNativeSelectTheme(themeTools),
        Notification: composeNotificationTheme(themeTools),
        Pagination: composePaginationTheme(themeTools),
        Popover: composePopoverTheme(themeTools),
        Progress: composeProgressTheme(themeTools),
        PromotionBadge: composePromotionBadgeTheme(themeTools),
        RadioButton: composeRadioButtonTheme(themeTools),
        Raised: composeRaisedTheme(themeTools),
        Range: composeRangeTheme(themeTools),
        ScrollBox: composeScrollBoxTheme(themeTools),
        Select: composeSelectTheme(themeTools),
        Skeleton: composeSkeletonTheme(themeTools),
        Slider: composeSliderTheme(themeTools),
        Table: composeTableTheme(themeTools),
        Text: composeTextTheme(themeTools),
        TextArea: composeTextAreaTheme(themeTools),
        TextField: composeTextFieldTheme(themeTools),
        TextualButton: composeTextualButton(themeTools),
        Tile: composeTileTheme(themeTools),
        Toast: composeToastTheme(themeTools),
        Toggle: composeToggleTheme(themeTools),
        Tooltip: composeTooltipTheme(themeTools),
    };

    if (themeOverrides) {
        return [deepmerge(ThemeObject, themeOverrides) as ThemeType, themeTools.themeSettings];
    }

    return [ThemeObject, themeTools.themeSettings];
};

export default generateThemeObject;
