import ThemeType from '../../types/ThemeType';
import rgba from '../../utility/rgba';
import colors from './colors';

const bodyFont = 'Source Sans Pro,sans-serif';
const headingFont = 'Melbourne,sans-serif';

const fontSize = {
    smaller1: '12px',
    base: '15px',
    larger1: '18px',
    larger2: '21px',
    larger3: '24px',
    larger4: '27px',
    larger5: '30px',
    larger6: '36px',
};

const fontWeight = {
    light: '300',
    regular: '400',
    bold: '600',
};

const roundness = {
    base: '3px',
};

const theme: ThemeType = {
    FileInput: {
        common: {
            borderRadius: roundness.base,
            fontSize: fontSize.base,
            fontFamily: bodyFont,
            iconColor: colors.green500,
        },
        input: {
            idle: {
                background: colors.white,
                borderColor: colors.grey300,
                color: colors.grey600,
            },
            hover: {
                borderColor: colors.grey300,
                background: rgba(0, 0, 0, 0.03),
                boxShadow: 'none',
                color: colors.green600,
            },
            focus: {
                borderColor: colors.green600,
                background: `${rgba(colors.green100, 0.1)}`,
                boxShadow: `0 0 0 4px ${rgba(colors.green100, 0.875)}`,
            },
            error: {
                background: `${rgba(colors.red100, 0.1)}`,
                borderColor: colors.red600,
                boxShadow: `0 0 0 4px ${rgba(colors.red100, 0.875)}`,
            },
            disabled: {
                color: colors.grey300,
                background: colors.grey100,
                borderColor: colors.grey200,
            },
        },
    },
    Accordion: {
        iconColor: colors.grey500,
    },
    Badge: {
        primary: {
            backgroundColor: colors.green100,
            color: colors.green800,
            fontFamily: bodyFont,
        },
        secondary: {
            backgroundColor: colors.grey200,
            color: colors.grey700,
            fontFamily: bodyFont,
        },
        warning: {
            backgroundColor: colors.yellow100,
            color: colors.yellow800,
            fontFamily: bodyFont,
        },
        error: {
            backgroundColor: colors.red100,
            color: colors.red700,
            fontFamily: bodyFont,
        },
        info: {
            backgroundColor: colors.blue100,
            color: colors.blue700,
            fontFamily: bodyFont,
        },
    },
    Breadcrumbs: {
        default: {
            color: colors.grey800,
        },
        link: {
            color: colors.grey500,
        },
    },
    Button: {
        common: {
            borderRadius: roundness.base,
            borderWidth: '0',
            fontWeight: '400',
            fontFamily: bodyFont,
            fontSize: fontSize.base,
            textDecoration: 'none',
        },
        primary: {
            idle: {
                backgroundColor: colors.green400,
                color: colors.green900,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            hover: {
                backgroundColor: colors.green500,
                color: colors.green900,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            focus: {
                backgroundColor: colors.green400,
                color: colors.green900,
                boxShadow: `0 -2px 0 rgba(0,0,0,0.2) inset,0 0 0 4px ${rgba(colors.green100, 0.875)}`,
            },
            active: {
                backgroundColor: colors.green500,
                color: colors.green900,
                boxShadow: 'none',
            },
        },
        secondary: {
            idle: {
                backgroundColor: colors.grey200,
                color: colors.grey700,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            hover: {
                backgroundColor: colors.grey300,
                color: colors.grey700,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            focus: {
                backgroundColor: colors.grey200,
                color: colors.grey700,
                boxShadow: `0 -2px 0 rgba(0,0,0,0.2) inset,0 0 0 4px ${rgba(colors.grey200, 0.875)}`,
            },
            active: {
                backgroundColor: colors.grey300,
                color: colors.grey700,
                boxShadow: 'none',
            },
        },
        info: {
            idle: {
                backgroundColor: colors.blue400,
                color: colors.blue900,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            hover: {
                backgroundColor: colors.blue500,
                color: colors.blue900,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            focus: {
                backgroundColor: colors.blue400,
                color: colors.blue900,
                boxShadow: `0 -2px 0 rgba(0,0,0,0.2) inset,0 0 0 4px ${rgba(colors.blue100, 0.875)}`,
            },
            active: {
                backgroundColor: colors.blue500,
                color: colors.blue900,
                boxShadow: 'none',
            },
        },
        warning: {
            idle: {
                backgroundColor: colors.yellow400,
                color: colors.yellow900,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            hover: {
                backgroundColor: colors.yellow500,
                color: colors.yellow900,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            focus: {
                backgroundColor: colors.yellow400,
                color: colors.yellow900,
                boxShadow: `0 -2px 0 rgba(0,0,0,0.1) inset, 0 0 0 4px ${rgba(colors.yellow100, 0.875)}`,
            },
            active: {
                backgroundColor: colors.yellow500,
                color: colors.yellow900,
                boxShadow: 'none',
            },
        },
        destructive: {
            idle: {
                backgroundColor: colors.red400,
                color: colors.red900,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            hover: {
                backgroundColor: colors.red500,
                color: colors.red900,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            focus: {
                backgroundColor: colors.red400,
                color: colors.red900,
                boxShadow: `0 -2px 0 rgba(0,0,0,0.1) inset,0 0 0 4px ${rgba(colors.red100, 0.875)}`,
            },
            active: {
                backgroundColor: colors.red500,
                color: colors.red900,
                boxShadow: 'none',
            },
        },
        plain: {
            idle: {
                backgroundColor: 'transparent',
                color: colors.grey500,
                boxShadow: 'none',
                border: `1px solid ${colors.grey300}`,
            },
            hover: {
                backgroundColor: rgba(0, 0, 0, 0.03),
                color: colors.grey600,
                boxShadow: 'none',
            },
            focus: {
                backgroundColor: 'transparent',
                color: colors.grey500,
                boxShadow: `0 0 0 4px ${rgba(colors.grey200, 0.875)}`,
            },
            active: {
                backgroundColor: colors.grey100,
                color: colors.grey500,
                boxShadow: 'none',
            },
        },
        disabled: {
            primary: {
                color: colors.grey400,
                backgroundColor: colors.grey300,
                boxShadow: `0 -2px 0 rgba(0,0,0,0.1) inset`,
            },
            secondary: {
                color: colors.grey300,
                backgroundColor: colors.grey100,
                boxShadow: `0 -2px 0 rgba(0,0,0,0.1) inset`,
            },
            plain: {
                color: colors.grey300,
                backgroundColor: 'transparent',
                boxShadow: `0 -2px 0 rgba(0,0,0,0.1) inset`,
                border: `1px solid ${colors.grey200}`,
            },
        },
    },
    Card: {
        background: colors.white,
        borderColor: colors.grey300,
        borderRadius: roundness.base,
    },
    Checkbox: {
        idle: {
            borderColor: colors.grey300,
            backgroundColor: colors.white,
            borderRadius: roundness.base,
            boxShadow: `0 0 0 4px ${rgba(colors.grey200, 0.6)}`,
        },
        checked: {
            checkmarkColor: colors.white,
            borderColor: colors.green400,
            backgroundColor: colors.green300,
            boxShadow: `0 0 0 4px ${rgba(colors.green100, 0.875)}`,
        },
        idleDisabled: {
            backgroundColor: colors.grey100,
            borderColor: colors.grey200,
        },
        checkedDisabled: {
            backgroundColor: colors.grey200,
        },
        checkedError: {
            backgroundColor: colors.red400,
        },
        error: {
            backgroundColor: rgba(colors.red100, 0.1),
            borderColor: colors.red600,
            boxShadow: `0 0 0 4px ${rgba(colors.red100, 0.875)}`,
        },
    },
    Contrast: {
        default: {
            background: colors.grey100,
        },
        overides: {},
    },
    Counter: {
        severity: {
            success: {
                backgroundColor: colors.green400,
                color: colors.white,
                fontFamily: bodyFont,
            },
            warning: {
                backgroundColor: colors.yellow500,
                color: colors.white,
                fontFamily: bodyFont,
            },
            error: {
                backgroundColor: colors.red500,
                color: colors.white,
                fontFamily: bodyFont,
            },
            info: {
                backgroundColor: colors.grey500,
                color: colors.white,
                fontFamily: bodyFont,
            },
        },
    },
    FormRow: {
        disabled: {
            color: colors.grey400,
        },
    },
    Heading: {
        1: {
            fontFamily: headingFont,
            fontSize: fontSize.larger6,
            fontWeight: fontWeight.regular,
            lineHeight: '48px',
            color: colors.grey800,
        },
        2: {
            fontFamily: headingFont,
            fontSize: fontSize.larger5,
            fontWeight: fontWeight.regular,
            lineHeight: '39px',
            color: colors.grey800,
        },
        3: {
            fontFamily: headingFont,
            fontSize: fontSize.larger4,
            fontWeight: fontWeight.regular,
            color: colors.grey800,
            lineHeight: '36px',
        },
        4: {
            fontFamily: headingFont,
            fontSize: fontSize.larger3,
            fontWeight: fontWeight.regular,
            lineHeight: '33px',
            color: colors.grey800,
        },
        5: {
            fontFamily: headingFont,
            fontSize: fontSize.larger2,
            fontWeight: fontWeight.regular,
            lineHeight: '27px',
            color: colors.grey800,
        },
    },
    IconButton: {
        primary: {
            idle: {
                color: colors.grey600,
            },
            hover: {
                color: colors.grey800,
            },
        },
        subdued: {
            idle: {
                color: colors.grey400,
            },
            hover: {
                color: colors.grey600,
            },
        },
        destructive: {
            idle: {
                color: colors.grey600,
            },
            hover: {
                color: colors.red500,
            },
        },
    },
    Illustration: {
        size: '186px',
    },
    Link: {
        common: {
            textDecoration: 'underline',
        },
        default: {
            idle: {
                color: 'inherit',
            },
            hover: {
                color: colors.green400,
            },
        },
        success: {
            idle: {
                color: 'inherit',
            },
            hover: {
                color: colors.green900,
            },
        },
        info: {
            idle: {
                color: 'inherit',
            },
            hover: {
                color: colors.blue800,
            },
        },
        warning: {
            idle: {
                color: 'inherit',
            },
            hover: {
                color: colors.yellow900,
            },
        },
        error: {
            idle: {
                color: 'inherit',
            },
            hover: {
                color: colors.red800,
            },
        },
    },
    MessageStream: {
        common: {
            backgroundColor: colors.white,
            borderColor: colors.grey300,
        },
        read: {
            backgroundColor: colors.grey100,
        },
        success: {
            borderColor: colors.green400,
        },
        info: {
            borderColor: colors.grey300,
        },
        warning: {
            borderColor: colors.yellow500,
        },
        error: {
            borderColor: colors.red500,
        },
    },
    Modal: {
        backgroundColor: colors.white,
        backdropColor: 'rgba(0,0,0,0.3)',
        borderRadius: roundness.base,
    },
    NativeSelect: {
        common: {
            borderRadius: roundness.base,
            fontFamily: bodyFont,
            fontSize: fontSize.base,
        },
        idle: {
            background: colors.white,
            borderColor: colors.grey300,
            color: colors.grey600,
            caretColor: colors.grey800,
        },
        focus: {
            borderColor: colors.green600,
            boxShadow: `0 0 0 4px ${rgba(colors.green100, 0.875)}`,
        },
        disabled: {
            background: colors.grey100,
            borderColor: colors.grey200,
            color: colors.grey300,
            caretColor: colors.grey300,
        },
    },
    Notification: {
        common: {
            fontFamily: bodyFont,
            fontSize: fontSize.base,
            borderRadius: '3px',
        },
        error: {
            color: colors.red700,
            backgroundColor: colors.red100,
        },
        warning: {
            color: colors.yellow800,
            backgroundColor: colors.yellow100,
        },
        success: {
            color: colors.green800,
            backgroundColor: colors.green100,
        },
        info: {
            color: colors.blue700,
            backgroundColor: colors.blue100,
        },
    },
    Pagination: {
        common: {
            borderRadius: '3px',
        },
        idle: {
            backgroundColor: 'transparent',
            borderColor: colors.grey300,
            boxShadow: 'none',
            color: colors.grey500,
        },
        hover: {
            backgroundColor: rgba(0, 0, 0, 0.03),
            borderColor: colors.grey300,
            boxShadow: 'none',
            color: colors.grey600,
        },
        focus: {
            backgroundColor: 'transparent',
            borderColor: colors.grey300,
            boxShadow: `0 0 0 3px ${rgba(colors.grey200, 0.875)}`,
            color: colors.grey500,
        },
        active: {
            backgroundColor: colors.grey100,
            boxShadow: 'none',
            borderColor: colors.grey300,
            color: colors.grey500,
        },
        current: {
            backgroundColor: colors.green400,
            borderColor: colors.green600,
            boxShadow: 'none',
            color: colors.green900,
        },
    },
    PromotionBadge: {
        pro: {
            color: colors.green500,
            fontFamily: bodyFont,
        },
        premium: {
            color: colors.grey500,
            fontFamily: bodyFont,
        },
        grow: {
            color: colors.yellow500,
            fontFamily: bodyFont,
        },
        new: {
            color: colors.blue500,
            fontFamily: bodyFont,
        },
    },
    RadioButton: {
        idle: {
            backgroundColor: colors.white,
            borderColor: colors.grey300,
            boxShadow: `0px 0px 0px 4px ${rgba(colors.grey200, 0.6)}`,
            checkmarkColor: colors.white,
        },
        idleDisabled: {
            backgroundColor: colors.grey100,
            borderColor: colors.grey200,
        },
        active: {
            boxShadow: `0px 0px 0px 4px ${rgba(colors.green100, 0.875)}`,
            borderColor: colors.green400,
            backgroundColor: colors.green300,
        },
        activeDisabled: {
            boxShadow: `0px 0px 0px 4px ${rgba(colors.green300, 0.5)}`,
            backgroundColor: colors.grey200,
        },
        error: {
            borderColor: colors.red600,
            backgroundColor: rgba(colors.red100, 0.1),
            boxShadow: `0 0 0 4px ${rgba(colors.red100, 0.875)}`,
        },
    },
    Raised: {
        level0: {
            boxShadow: 'none',
        },
        level1: {
            boxShadow: `0 2px 10px 0 ${rgba(colors.grey900, 0.15)}`,
        },
        level2: {
            boxShadow: `0 6px 48px 0 ${rgba(colors.grey900, 0.3)}`,
        },
    },
    Range: {
        default: {
            track: {
                background: colors.white,
                border: `1px solid ${colors.grey300}`,
            },
            active: {
                background: colors.green300,
                border: `1px solid ${colors.green400}`,
                boxShadow: `0 0 0 rgba(0, 0, 0, 0) inset, 0 0 0 4px ${rgba(colors.green100, 0.875)}`,
            },
            slider: {
                background: colors.white,
                border: `1px solid ${colors.green500}`,
            },
        },
        disabled: {
            track: {
                background: colors.grey100,
                border: `1px solid ${colors.grey200}`,
            },
            active: {
                background: colors.grey200,
                border: `1px solid ${colors.grey300}`,
            },
            slider: {
                background: colors.grey100,
                border: `1px solid ${colors.grey300}`,
            },
        },
    },
    Popover: {
        background: colors.white,
        borderRadius: roundness.base,
    },
    Select: {
        common: {
            fontFamily: bodyFont,
            fontSize: fontSize.base,
            background: colors.white,
            borderColor: colors.grey300,
            borderRadius: roundness.base,
        },
        select: {
            idle: {
                color: colors.grey600,
                caretColor: colors.grey800,
                placeholderColor: colors.grey400,
            },
            focus: {
                borderColor: colors.green600,
                boxShadow: `0 0 0 4px ${rgba(colors.green100, 0.875)}`,
                placeholderColor: colors.grey300,
            },
            disabled: {
                background: colors.grey100,
                borderColor: colors.grey200,
                color: colors.grey300,
                caretColor: colors.grey300,
                placeholderColor: colors.grey300,
            },
        },
        option: {
            hover: {
                background: colors.grey100,
            },
        },
        searchWrapper: {
            background: colors.grey100,
        },
    },
    Skeleton: {
        common: {
            backgroundColor: colors.grey100,
            borderRadius: roundness.base,
        },
        Text: {
            fontSize: fontSize.base,
        },
    },
    Slider: {
        default: {
            track: {
                background: colors.white,
                border: `1px solid ${colors.grey300}`,
            },
            active: {
                background: colors.green300,
                border: `1px solid ${colors.green400}`,
                boxShadow: `0 0 0 rgba(0, 0, 0, 0) inset, 0 0 0 4px ${rgba(colors.green100, 0.875)}`,
            },
            slider: {
                background: colors.white,
                border: `1px solid ${colors.green500}`,
            },
        },
        disabled: {
            track: {
                background: colors.grey100,
                border: `1px solid ${colors.grey200}`,
            },
            active: {
                background: colors.grey200,
                border: `1px solid ${colors.grey300}`,
            },
            slider: {
                background: colors.grey100,
                border: `1px solid ${colors.grey300}`,
            },
        },
    },
    ScrollBox: {
        scrollbar: {
            background: colors.grey800,
        },
    },
    Table: {
        default: {
            backgroundColor: colors.white,
        },
        card: {
            boxShadow: '0 2px 10px 0 rgba(33, 37, 43, .15)',
            backgroundColor: colors.white,
            borderRadius: roundness.base,
            spacing: '24px',
        },
        cell: {
            default: {
                backgroundColor: colors.white,
                borderColor: colors.grey300,
            },
            header: {
                backgroundColor: colors.grey200,
            },
        },
        row: {
            default: {
                backgroundColor: colors.white,
                borderColor: `${rgba(colors.green300, 0)}`,
            },
            error: {
                backgroundColor: `${rgba(colors.red100, 0.25)}`,
            },
            hover: {
                backgroundColor: colors.grey100,
            },
            focus: {
                borderColor: `${rgba(colors.green300, 0.4)}`,
            },
            dragging: {
                boxShadow: `0 6px 48px 0 ${rgba(colors.grey900, 0.3)}`,
            },
        },
    },
    Text: {
        default: {
            color: colors.grey600,
        },
        size: {
            small: {
                fontFamily: bodyFont,
                fontSize: fontSize.smaller1,
                fontWeight: fontWeight.regular,
                lineHeight: {
                    default: '18px',
                    compact: '15px',
                },
            },
            regular: {
                fontFamily: bodyFont,
                fontSize: fontSize.base,
                fontWeight: fontWeight.regular,
                lineHeight: {
                    default: '24px',
                    compact: '18px',
                },
            },
            large: {
                fontFamily: bodyFont,
                fontSize: fontSize.larger1,
                fontWeight: fontWeight.regular,
                lineHeight: {
                    default: '27px',
                    compact: '21px',
                },
            },
            extraLarge: {
                fontFamily: bodyFont,
                fontSize: fontSize.larger2,
                fontWeight: fontWeight.regular,
                lineHeight: {
                    default: '33px',
                    compact: '27px',
                },
            },
            display: {
                fontFamily: headingFont,
                fontSize: '60px',
                fontWeight: fontWeight.regular,
                lineHeight: {
                    default: '78px',
                    compact: '75px',
                },
            },
        },
        strong: {
            fontWeight: fontWeight.bold,
        },
        variant: {
            error: colors.red600,
            success: colors.green700,
            info: colors.grey500,
            warning: colors.yellow700,
            descriptive: colors.grey600,
        },
    },
    TextArea: {
        common: {
            borderRadius: roundness.base,
            fontSize: fontSize.base,
            fontFamily: bodyFont,
        },
        idle: {
            borderColor: colors.grey300,
            background: colors.white,
            color: colors.grey600,
            placeholderColor: colors.grey400,
        },
        focus: {
            borderColor: colors.green600,
            boxShadow: `0 0 0 4px ${rgba(colors.green100, 0.875)}`,
            placeholderColor: colors.grey300,
        },
        error: {
            background: `${rgba(colors.red100, 0.1)}`,
            borderColor: colors.red600,
            boxShadow: `0 0 0 4px ${rgba(colors.red100, 0.875)}`,
        },
        disabled: {
            color: colors.grey300,
            background: colors.grey100,
            borderColor: colors.grey200,
            placeholderColor: colors.grey300,
        },
    },
    TextField: {
        common: {
            borderRadius: roundness.base,
            fontSize: fontSize.base,
            fontFamily: bodyFont,
        },
        affix: {
            color: colors.grey600,
            background: colors.grey100,
        },
        icon: {
            color: colors.grey600,
        },
        input: {
            idle: {
                background: colors.white,
                borderColor: colors.grey300,
                color: colors.grey600,
                placeholderColor: colors.grey400,
            },
            focus: {
                borderColor: colors.green600,
                boxShadow: `0 0 0 4px ${rgba(colors.green100, 0.875)}`,
                placeholderColor: colors.grey300,
            },
            error: {
                background: `${rgba(colors.red100, 0.1)}`,
                borderColor: colors.red600,
                boxShadow: `0 0 0 4px ${rgba(colors.red100, 0.875)}`,
            },
            disabled: {
                color: colors.grey300,
                background: colors.grey100,
                borderColor: colors.grey200,
                placeholderColor: colors.grey300,
            },
        },
    },
    TextualButton: {
        primary: {
            color: colors.green500,
            fontWeight: 400,
        },
        secondary: {
            color: colors.grey800,
            fontWeight: 400,
        },
    },
    Tile: {
        borderColor: colors.grey300,
    },
    Toast: {
        borderRadius: roundness.base,
        backgroundColor: colors.white,
        severity: {
            error: colors.red700,
            success: colors.green500,
            info: colors.grey400,
            warning: colors.yellow600,
        },
    },
    Toggle: {
        general: {
            backgroundColor: colors.white,
        },
        idle: {
            borderColor: colors.grey300,
            backgroundColor: colors.white,
            boxShadow: `0 0 0 4px ${rgba(colors.grey200, 0.6)}`,
        },
        checked: {
            borderColor: colors.green400,
            backgroundColor: colors.green300,
            boxShadow: `0 0 0 4px ${rgba(colors.green100, 0.875)}`,
        },
        idleDisabled: {
            backgroundColor: colors.grey100,
            borderColor: colors.grey200,
        },
        checkedDisabled: {
            backgroundColor: colors.grey200,
        },
        error: {
            borderColor: colors.red600,
            boxShadow: `0 0 0 4px ${rgba(colors.red100, 0.875)}`,
        },
    },
    Progress: {
        common: {
            dotSize: 9,
        },
        active: {
            backgroundColor: colors.green400,
        },
        idle: {
            backgroundColor: colors.grey300,
        },
    },
    Tooltip: {
        background: colors.grey900,
        borderRadius: roundness.base,
        color: colors.white,
    },
};

export default theme;
export { bodyFont, headingFont, fontSize, roundness };
