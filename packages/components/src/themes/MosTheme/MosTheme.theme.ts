import ThemeType from '../../types/ThemeType';
import rgba from '../../utility/rgba';
import { colors } from './colors';

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
    bold: '700',
};

const roundness = {
    base: '3px',
};

const severity = {
    error: colors.red700,
    success: colors.green500,
    info: colors.grey400,
    warning: colors.yellow600,
};

const theme: ThemeType = {
    Badge: {
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
                backgroundColor: colors.grey100,
                color: colors.grey500,
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
    Checkbox: {
        idle: {
            borderColor: colors.grey300,
            backgroundColor: colors.grey100,
            borderRadius: roundness.base,
        },
        focus: {
            boxShadow: `0 0 0 4px ${rgba(colors.green300, 0.4)}`,
        },
        checked: {
            checkmarkColor: colors.white,
            borderColor: colors.green500,
            backgroundColor: colors.green300,
        },
        idleDisabled: {
            background: `repeating-linear-gradient( -45deg,#FAFBFD,#FAFBFD 5px,${colors.grey200} 5px,${colors.grey200} 10px )`,
        },
        checkedDisabled: {
            background: `repeating-linear-gradient( -45deg,${rgba(colors.green500, 0.6)},${rgba(
                colors.green500,
                0.6,
            )} 5px,${rgba(colors.green300, 0.5)} 5px,${rgba(colors.green300, 0.5)} 10px )`,
        },
        error: {
            borderColor: colors.red500,
        },
    },
    Contrast: {
        default: {
            background: colors.grey100,
        },
        overides: {},
    },
    Heading: {
        1: {
            fontFamily: headingFont,
            fontSize: fontSize.larger6,
            fontWeight: fontWeight.regular,
            lineHeight: '45px',
            color: colors.grey800,
        },
        2: {
            fontFamily: headingFont,
            fontSize: fontSize.larger5,
            fontWeight: fontWeight.regular,
            lineHeight: '36px',
            color: colors.grey800,
        },
        3: {
            fontFamily: headingFont,
            fontSize: fontSize.larger4,
            fontWeight: fontWeight.regular,
            color: colors.grey800,
            lineHeight: '33px',
        },
        4: {
            fontFamily: headingFont,
            fontSize: fontSize.larger3,
            fontWeight: fontWeight.regular,
            lineHeight: '30px',
            color: colors.grey800,
        },
        5: {
            fontFamily: headingFont,
            fontSize: fontSize.larger2,
            fontWeight: fontWeight.regular,
            lineHeight: '27px',
            color: colors.grey800,
        },
        6: {
            fontFamily: headingFont,
            fontSize: fontSize.larger1,
            fontWeight: fontWeight.regular,
            lineHeight: '21px',
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
        default: {
            color: colors.grey800,
            textDecoration: 'underline',
            fontSize: fontSize.base,
        },
        hover: {
            color: colors.green400,
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
        input: {
            borderRadius: roundness.base,
            background: colors.white,
            borderColor: colors.grey300,
            color: colors.grey800,
            fontFamily: bodyFont,
            fontSize: fontSize.base,
            fontWeight: '400',
            focus: {
                borderColor: colors.green500,
                boxShadow: `0 0 0 4px ${rgba(colors.green300, 0.4)}`,
            },
        },
        disabled: {
            chevron: colors.grey500,
            color: colors.grey500,
            background:
                '#f5f6f7 repeating-linear-gradient( -45deg, #f0f1f2, #f0f1f2 10px, transparent 10px, transparent 20px )',
        },
    },
    Notification: {
        common: {
            fontFamily: bodyFont,
            fontSize: fontSize.base,
        },
        error: {
            color: colors.red700,
            backgroundColor: colors.red100,
            borderColor: colors.red600,
        },
        warning: {
            color: colors.yellow800,
            backgroundColor: colors.yellow100,
            borderColor: colors.yellow700,
        },
        success: {
            color: colors.green800,
            backgroundColor: colors.green100,
            borderColor: colors.green600,
        },
        info: {
            color: colors.blue700,
            backgroundColor: colors.blue100,
            borderColor: colors.blue500,
        },
    },
    RadioButton: {
        idle: {
            backgroundColor: colors.grey100,
            borderColor: colors.grey300,
            boxShadow: '0px 0px 0px 5.5px transparent',
            checkmarkColor: colors.grey100,
        },
        idleDisabled: {
            background: `repeating-linear-gradient( -45deg,${colors.grey200},${colors.grey200} 5px,${colors.grey100} 5px,${colors.grey100} 10px )`,
        },
        focus: {
            boxShadow: `0 0 0 4px ${rgba(colors.green300, 0.4)}`,
        },
        active: {
            boxShadow: `0px 0px 0px 5.5px ${colors.green300}`,
            borderColor: colors.green500,
            background: colors.green300,
        },
        activeDisabled: {
            boxShadow: `0px 0px 0px 5.5px ${rgba(colors.green300, 0.5)}`,
            background: `repeating-linear-gradient( -45deg,${rgba(colors.green500, 0.6)},${rgba(
                colors.green500,
                0.6,
            )} 5px,${rgba(colors.green300, 0.5)} 5px,${rgba(colors.green300, 0.5)} 10px )`,
        },
        error: {
            borderColor: colors.red500,
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
                background: colors.grey100,
                border: `solid 1px ${colors.grey300}`,
            },
            active: {
                background: colors.green300,
                border: `solid 1px ${colors.green500}`,
                boxShadow: `0 0 0 rgba(0, 0, 0, 0) inset, 0 0 0 4px ${rgba(colors.green300, 0.4)}`,
            },
            slider: {
                background: colors.white,
                border: `solid 1px ${colors.green500}`,
            },
        },
        disabled: {
            track: {
                background: colors.grey100,
                border: `solid 1px ${colors.grey300}`,
            },
            slider: {
                background: colors.white,
                border: `solid 1px ${colors.grey300}`,
            },
        },
    },
    Popover: {
        background: colors.white,
        borderRadius: roundness.base,
    },
    Select: {
        common: {
            backgroundColor: colors.white,
            secondaryColor: colors.grey100,
            borderRadius: roundness.base,
        },
        wrapper: {
            common: {
                borderColor: colors.grey300,
            },
            focus: {
                borderColor: colors.green500,
                boxShadow: `0 0 0 4px ${rgba(colors.green300, 0.4)}`,
            },
        },
        input: {
            background: colors.white,
            borderColor: colors.grey300,
            color: colors.grey800,
            fontFamily: bodyFont,
            fontSize: fontSize.base,
            fontWeight: '400',
        },
        placeholder: {
            color: colors.grey300,
        },
        disabled: {
            chevron: colors.grey500,
            color: colors.grey500,
            background:
                '#f5f6f7 repeating-linear-gradient( -45deg, #f0f1f2, #f0f1f2 10px, transparent 10px, transparent 20px )',
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
                background: colors.grey100,
                border: `solid 1px ${colors.grey300}`,
            },
            active: {
                background: colors.green300,
                border: `solid 1px ${colors.green500}`,
                boxShadow: `0 0 0 rgba(0, 0, 0, 0) inset, 0 0 0 4px ${rgba(colors.green300, 0.4)}`,
            },
            slider: {
                background: colors.white,
                border: `solid 1px ${colors.green500}`,
            },
        },
        disabled: {
            track: {
                background: colors.grey100,
                border: `solid 1px ${colors.grey300}`,
            },
            slider: {
                background: colors.white,
                border: `solid 1px ${colors.grey300}`,
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
            backgroundColor: colors.grey200,
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
            color: colors.grey800,
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
                    default: '21px',
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
                    default: '30px',
                    compact: '27px',
                },
            },
            display: {
                fontFamily: headingFont,
                fontSize: '60px',
                fontWeight: fontWeight.regular,
                lineHeight: {
                    default: '75px',
                    compact: '75px',
                },
            },
        },
        strong: {
            fontWeight: fontWeight.bold,
        },
        variant: {
            error: colors.red500,
            success: colors.green400,
            info: colors.grey500,
            warning: colors.yellow500,
            descriptive: colors.grey500,
        },
    },
    TextArea: {
        idle: {
            common: {
                borderRadius: roundness.base,
                borderColor: colors.grey300,
                fontSize: fontSize.base,
                fontFamily: bodyFont,
                color: colors.grey800,
                background: colors.white,
            },
        },
        focus: {
            borderColor: colors.green500,
            boxShadow: `0 0 0 4px ${rgba(colors.green300, 0.4)}`,
        },
        severity: {
            error: {
                borderColor: severity.error,
                boxShadow: `0 0 0 4px ${rgba(colors.red600, 0.4)}`,
            },
            success: {
                borderColor: severity.success,
                boxShadow: `0 0 0 4px ${rgba(colors.green300, 0.4)}`,
            },
            info: {
                borderColor: colors.green300,
                boxShadow: `0 0 0 4px ${rgba(colors.green300, 0.4)}`,
            },
            warning: {
                borderColor: severity.warning,
                boxShadow: `0 0 0 4px ${rgba(colors.yellow600, 0.4)}`,
            },
        },

        disabled: {
            color: colors.grey500,
            background: 'repeating-linear-gradient( -45deg,#FAFBFD,#FAFBFD 10px,#F5F6F7 10px,#F5F6F7 20px )',
        },
    },
    TextField: {
        idle: {
            common: {
                borderRadius: roundness.base,
                borderColor: colors.grey300,
                fontSize: fontSize.base,
                fontFamily: bodyFont,
                color: colors.grey800,
                background: colors.white,
            },
            placeholder: {
                color: colors.grey500,
            },
            affix: {
                color: colors.grey600,
                background: colors.grey100,
            },
        },
        focus: {
            borderColor: colors.green500,
            boxShadow: `0 0 0 4px ${rgba(colors.green300, 0.4)}`,
        },

        severity: {
            error: {
                borderColor: severity.error,
                boxShadow: `0 0 0 4px ${rgba(colors.red600, 0.4)}`,
            },
            success: {
                borderColor: severity.success,
                boxShadow: `0 0 0 4px ${rgba(colors.green300, 0.4)}`,
            },
            info: {
                borderColor: colors.green300,
                boxShadow: `0 0 0 4px ${rgba(colors.green300, 0.4)}`,
            },
            warning: {
                borderColor: severity.warning,
                boxShadow: `0 0 0 4px ${rgba(colors.yellow600, 0.4)}`,
            },
        },
        disabled: {
            color: colors.grey500,
            background: 'repeating-linear-gradient( -45deg,#FAFBFD,#FAFBFD 10px,#F5F6F7 10px,#F5F6F7 20px )',
        },
    },
    TextualButton: {
        primary: {
            color: colors.green500,
            fontWeight: 600,
        },
        secondary: {
            color: colors.grey800,
            fontWeight: 600,
        },
    },
    Tile: {
        borderColor: colors.grey300,
    },
    Toast: {
        borderRadius: roundness.base,
        backgroundColor: colors.white,
        severity: {
            error: severity.error,
            success: severity.success,
            info: severity.info,
            warning: severity.warning,
        },
    },
    Toggle: {
        general: {
            background: colors.white,
        },
        idle: {
            border: `1px solid ${colors.grey300}`,
            background: colors.grey100,
        },
        focus: {
            boxShadow: `0 0 0 4px ${rgba(colors.green300, 0.4)}`,
        },
        checked: {
            border: `1px solid ${colors.green500}`,
            background: colors.green300,
        },
        idleDisabled: {
            background: `repeating-linear-gradient( -45deg,#FAFBFD,#FAFBFD 5px,${colors.grey200} 5px,${colors.grey200} 10px )`,
        },
        checkedDisabled: {
            background: `repeating-linear-gradient( -45deg,${rgba(colors.green500, 0.6)},${rgba(
                colors.green500,
                0.6,
            )} 5px,${rgba(colors.green300, 0.5)} 5px,${rgba(colors.green300, 0.5)} 10px )`,
        },
        error: {
            border: `1px solid ${colors.red500}`,
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
