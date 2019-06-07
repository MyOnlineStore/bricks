import ThemeType from '../../types/ThemeType';
import deepmerge from 'deepmerge';
import * as ThemeTypes from './MerchantThemeTypes';
import RecursivePartialType from '../../types/RecursivePartialType';
import ThemeTools from './ThemeTools';
import { composeBadgeTheme } from '../../components/Badge';
import { composeBreadcrumbsTheme } from '../../components/Breadcrumbs/style';
import { composeButtonTheme } from '../../components/Button';
import { composeCheckboxTheme } from '../../components/Checkbox/style';
import { composeContrastTheme } from '../../components/Contrast/style';
import { composeHeadingTheme } from '../../components/Heading';
import { composeIconButtonTheme } from '../../components/IconButton';
import { composeLinkTheme } from '../../components/Link/style';
import { composeMessageStreamTheme } from '../../components/MessageStream/style';
import { composeModalTheme } from '../../components/Modal/style';
import { composeMultiButtonTheme } from '../../components/MultiButton/style';
import { composeNotificationTheme } from '../../components/Notification/style';
import { composeRadioButtonTheme } from '../../components/RadioButton/style';
import { composeRangeTheme } from '../../components/Range/style';
import { composeRaisedTheme } from '../../components/Raised';
import { composeSelectTheme } from '../../components/Select/style';
import { composeToggleTheme } from '../../components/Toggle/style';
import { composeTableTheme } from '../../components/Table/style';
import { composeTextTheme } from '../../components/Text';
import { composeTextAreaTheme } from '../../components/TextArea/style';
import { composeTextFieldTheme } from '../../components/TextField/style';
import { composeSkeletonTheme } from '../../components/Skeleton/style';
import { composeToastTheme } from '../../components/Toast/style';
import { composeTileTheme } from '../../components/Tile';
import { composePopoverTheme } from '../../components/Popover/style';
import { composeScrollBoxTheme } from '../../components/ScrollBox/style';
import { composePriceTagTheme } from '../../components/PriceTag/style';
import { composeIllustrationTheme } from '../../components/Illustration/style';

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
        Badge: composeBadgeTheme(themeTools),
        Breadcrumbs: composeBreadcrumbsTheme(themeTools),
        Button: composeButtonTheme(themeTools),
        Checkbox: composeCheckboxTheme(themeTools),
        Contrast: composeContrastTheme(themeTools),
        Heading: composeHeadingTheme(themeTools),
        IconButton: composeIconButtonTheme(themeTools),
        Illustration: composeIllustrationTheme(),
        Link: composeLinkTheme(themeTools),
        MessageStream: composeMessageStreamTheme(themeTools),
        Modal: composeModalTheme(themeTools),
        MultiButton: composeMultiButtonTheme(themeTools),
        Notification: composeNotificationTheme(themeTools),
        RadioButton: composeRadioButtonTheme(themeTools),
        Raised: composeRaisedTheme(themeTools),
        Range: composeRangeTheme(themeTools),
        Popover: composePopoverTheme(themeTools),
        PriceTag: composePriceTagTheme(themeTools),
        Select: composeSelectTheme(themeTools),
        Skeleton: composeSkeletonTheme(themeTools),
        ScrollBox: composeScrollBoxTheme(themeTools),
        Table: composeTableTheme(themeTools),
        Text: composeTextTheme(themeTools),
        TextArea: composeTextAreaTheme(themeTools),
        TextField: composeTextFieldTheme(themeTools),
        Tile: composeTileTheme(themeTools),
        Toast: composeToastTheme(themeTools),
        Toggle: composeToggleTheme(themeTools),
    };

    if (themeOverrides) {
        return [deepmerge(ThemeObject, themeOverrides) as ThemeType, themeTools.themeSettings];
    }

    return [ThemeObject, themeTools.themeSettings];
};

export default generateThemeObject;