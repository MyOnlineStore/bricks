import ThemeType from '../../types/ThemeType';

/* tslint:disable:max-file-line-count */

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

const green = {
    lighter1: '#7ce88a',
    base: '#6bde78',
    darker1: '#5bd16a',
    darker2: '#4cc55b',
};

const silver = {
    lighter1: '#fff',
    base: '#f8f9fb',
    darker1: '#edeff2',
    darker2: '#e4e7ec',
    darker3: '#dbdfe6',
    darker4: '#d2d7e0',
};

const grey = {
    lighter3: '#a6aab3',
    lighter1: '#55656d',
    lighter2: '#88979d',
    base: '#333740',
    darker1: '#21252b',
};

const red = {
    lighter1: '#ff245e',
    base: '#ed2157',
    darker1: '#dc1b4f',
    darker2: '#c81746',
};

const yellow = {
    lighter1: '#ffda5b',
    base: '#ffce28',
    darker1: '#fcc200',
    darker2: '#edb107',
};

const roundness = {
    base: '3px',
};

const severity = {
    error: red.darker2,
    success: green.darker2,
    info: grey.lighter3,
    warning: yellow.darker2,
};

const theme: ThemeType = {
    Badge: {
        severity: {
            success: {
                backgroundColor: green.darker1,
                color: silver.lighter1,
                fontFamily: bodyFont,
            },
            warning: {
                backgroundColor: yellow.darker1,
                color: silver.lighter1,
                fontFamily: bodyFont,
            },
            error: {
                backgroundColor: red.base,
                color: silver.lighter1,
                fontFamily: bodyFont,
            },
            info: {
                backgroundColor: grey.lighter2,
                color: silver.lighter1,
                fontFamily: bodyFont,
            },
        },
    },
    Breadcrumbs: {
        default: {
            color: grey.base,
        },
        link: {
            color: grey.lighter2,
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
                backgroundColor: green.darker1,
                color: silver.lighter1,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            hover: {
                backgroundColor: green.darker2,
                color: silver.lighter1,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            focus: {
                backgroundColor: green.darker1,
                color: silver.lighter1,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset,0 0 0 4px rgba(107,222,120,0.4)',
            },
            active: {
                backgroundColor: green.darker2,
                color: silver.lighter1,
                boxShadow: 'none',
            },
        },
        secondary: {
            idle: {
                backgroundColor: silver.base,
                color: grey.lighter1,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            hover: {
                backgroundColor: silver.darker1,
                color: grey.lighter1,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            focus: {
                backgroundColor: silver.base,
                color: grey.lighter1,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset,0 0 0 4px rgba(51,55,64,0.08)',
            },
            active: {
                backgroundColor: silver.darker1,
                color: grey.lighter1,
                boxShadow: 'none',
            },
        },
        warning: {
            idle: {
                backgroundColor: yellow.darker1,
                color: silver.lighter1,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            hover: {
                backgroundColor: yellow.darker2,
                color: silver.lighter1,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            focus: {
                backgroundColor: yellow.darker1,
                color: silver.lighter1,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.1) inset, 0 0 0 3px rgba(252,194,0,0.25)',
            },
            active: {
                backgroundColor: yellow.darker2,
                color: silver.lighter1,
                boxShadow: 'none',
            },
        },
        destructive: {
            idle: {
                backgroundColor: red.base,
                color: silver.lighter1,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            hover: {
                backgroundColor: red.darker1,
                color: silver.lighter1,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            focus: {
                backgroundColor: red.base,
                color: silver.lighter1,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.1) inset,0 0 0 3px rgba(237,33,87,0.25)',
            },
            active: {
                backgroundColor: red.darker1,
                color: silver.lighter1,
                boxShadow: 'none',
            },
        },
        plain: {
            idle: {
                backgroundColor: 'transparent',
                color: grey.base,
                boxShadow: 'none',
                textDecoration: 'underline',
            },
            hover: {
                backgroundColor: silver.base,
                color: grey.base,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            focus: {
                backgroundColor: silver.base,
                color: grey.base,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset,0 0 0 4px rgba(51,55,64,0.08)',
            },
            active: {
                backgroundColor: silver.base,
                color: grey.base,
                boxShadow: 'none',
            },
        },
        disabled: {
            color: grey.lighter2,
            backgroundColor: silver.darker2,
            stripingColor: 'rgba(0,0,0,0.04)',
        },
    },
    Checkbox: {
        idle: {
            borderColor: silver.darker4,
            backgroundColor: silver.base,
            borderRadius: roundness.base,
        },
        focus: {
            boxShadow: '0 0 0 4px rgba(107,222,120,0.4)',
        },
        checked: {
            borderColor: green.darker2,
            backgroundColor: green.base,
        },
        idleDisabled: {
            background: `repeating-linear-gradient( -45deg,#FAFBFD,#FAFBFD 5px,${silver.darker1} 5px,${
                silver.darker1
            } 10px )`,
        },
        checkedDisabled: {
            background:
                'repeating-linear-gradient( -45deg,rgba(76,197,91,0.60),rgba(76,197,91,0.60) 5px,rgba(107,222,120,0.50) 5px,rgba(107,222,120,0.50) 10px )',
        },
        error: {
            borderColor: red.base,
        },
    },
    Contrast: {
        default: {
            background: silver.base,
        },
        overides: {
            Button: {
                secondary: {
                    idle: {
                        backgroundColor: silver.darker1,
                    },
                    active: {
                        backgroundColor: silver.darker2,
                    },
                    hover: {
                        backgroundColor: silver.darker2,
                    },
                    focus: {
                        backgroundColor: silver.darker1,
                        boxShadow: `0 -2px 0 rgba(0,0,0,0.2) inset,0 0 0 4px ${silver.darker2}`,
                    },
                },
                plain: {
                    active: {
                        backgroundColor: silver.darker1,
                    },
                    hover: {
                        backgroundColor: silver.darker1,
                    },
                    focus: {
                        backgroundColor: silver.darker1,
                        boxShadow: `0 -2px 0 rgba(0,0,0,0.2) inset,0 0 0 4px ${silver.darker2}`,
                    },
                },
            },
        },
    },
    Heading: [
        {
            fontFamily: headingFont,
            fontSize: fontSize.larger6,
            fontWeight: fontWeight.regular,
            lineHeight: '45px',
            color: grey.base,
        },
        {
            fontFamily: headingFont,
            fontSize: fontSize.larger5,
            fontWeight: fontWeight.regular,
            lineHeight: '36px',
            color: grey.base,
        },
        {
            fontFamily: headingFont,
            fontSize: fontSize.larger4,
            fontWeight: fontWeight.regular,
            color: grey.base,
            lineHeight: '33px',
        },
        {
            fontFamily: headingFont,
            fontSize: fontSize.larger3,
            fontWeight: fontWeight.regular,
            lineHeight: '30px',
            color: grey.base,
        },
        {
            fontFamily: headingFont,
            fontSize: fontSize.larger2,
            fontWeight: fontWeight.regular,
            lineHeight: '27px',
            color: grey.base,
        },
        {
            fontFamily: headingFont,
            fontSize: fontSize.larger1,
            fontWeight: fontWeight.regular,
            lineHeight: '21px',
            color: grey.base,
        },
    ],
    IconButton: {
        primary: {
            idle: {
                backgroundColor: 'transparent',
                color: grey.base,
            },
            hover: {
                backgroundColor: 'transparent',
                color: grey.darker1,
            },
            focus: {
                backgroundColor: 'transparent',
                color: grey.darker1,
            },
            active: {
                backgroundColor: 'transparent',
                color: grey.darker1,
            },
        },
        destructive: {
            idle: {
                backgroundColor: 'transparent',
                color: red.base,
            },
            hover: {
                backgroundColor: 'transparent',
                color: red.base,
            },
            focus: {
                backgroundColor: 'transparent',
                color: red.base,
            },
            active: {
                backgroundColor: 'transparent',
                color: red.base,
            },
        },
    },
    Illustration: {
        size: '186px',
    },
    Link: {
        default: {
            color: grey.base,
            textDecoration: 'underline',
            fontSize: fontSize.base,
        },
        hover: {
            color: green.darker1,
        },
    },
    MessageStream: {
        common: {
            backgroundColor: silver.lighter1,
            borderColor: silver.darker3,
        },
        read: {
            backgroundColor: silver.base,
        },
        success: {
            borderColor: green.darker1,
        },
        info: {
            borderColor: silver.darker3,
        },
        warning: {
            borderColor: yellow.darker1,
        },
        error: {
            borderColor: red.base,
        },
    },
    Modal: {
        backgroundColor: silver.lighter1,
        backdropColor: 'rgba(0,0,0,0.3)',
        borderRadius: roundness.base,
    },
    MultiButton: {
        window: {
            backgroundColor: silver.lighter1,
            secondaryColor: silver.base,
            borderColor: silver.darker3,
            borderRadius: roundness.base,
            boxShadow: '0 2px 6px 0 rgba(0,0,0,0.10)',
        },
        button: {
            common: {
                active: {
                    boxShadow: 'inset 0 -2px 0 0 rgba(0,0,0,0.20), 0 0 0 2px rgba(136,151,157,0.20)',
                },
                borderRadius: roundness.base,
            },
            primary: {
                dividerColor: green.darker2,
            },
            secondary: {
                dividerColor: silver.darker3,
            },
            warning: {
                dividerColor: yellow.darker2,
            },
            destructive: {
                dividerColor: red.darker2,
            },
            plain: {
                dividerColor: silver.darker3,
            },
            disabled: {
                dividerColor: silver.darker3,
            },
        },
    },
    Notification: {
        common: {
            fontFamily: bodyFont,
            fontSize: fontSize.base,
        },
        error: {
            color: red.darker2,
            backgroundColor: '#ffbdce',
            borderColor: '#ff6c93',
        },
        warning: {
            color: '#bb8d0a',
            backgroundColor: '#fff0be',
            borderColor: yellow.base,
        },
        success: {
            color: '#31953d',
            backgroundColor: '#d2f5d6',
            borderColor: green.base,
        },
        info: {
            color: '#4e82bb',
            backgroundColor: '#dde7f2',
            borderColor: '#c8d2dd',
        },
    },
    RadioButton: {
        idle: {
            backgroundColor: silver.base,
            borderColor: silver.darker4,
            boxShadow: '0px 0px 0px 5.5px transparent',
        },
        idleDisabled: {
            background: `repeating-linear-gradient( -45deg,${silver.darker1},${silver.darker1} 5px,${silver.base} 5px,${
                silver.base
            } 10px )`,
        },
        focus: {
            boxShadow: '0 0 0 4px rgba(107,222,120,0.4)',
        },
        active: {
            boxShadow: `0px 0px 0px 5.5px ${green.base}`,
            borderColor: green.darker2,
            background: green.base,
        },
        activeDisabled: {
            boxShadow: '0px 0px 0px 5.5px rgba(107,222,120,0.50)',
            background:
                'repeating-linear-gradient( -45deg,rgba(76,197,91,0.60),rgba(76,197,91,0.60) 5px,rgba(107,222,120,0.50) 5px,rgba(107,222,120,0.50) 10px )',
        },
        error: {
            borderColor: red.base,
        },
    },
    Raised: {
        level0: {
            boxShadow: 'none',
        },
        level1: {
            boxShadow: '0 2px 10px 0 rgba(33,37,43,0.15)',
        },
        level2: {
            boxShadow: '0 6px 48px 0 rgba(33,37,43,0.30)',
        },
    },
    Range: {
        default: {
            track: {
                background: silver.base,
                border: `solid 1px ${silver.darker4}`,
            },
            active: {
                background: green.base,
                border: `solid 1px ${green.darker2}`,
                boxShadow: '0 0 0 rgba(0, 0, 0, 0) inset, 0 0 0 4px rgba(107, 222, 120, 0.4)',
            },
            slider: {
                background: silver.lighter1,
                border: `solid 1px ${green.darker2}`,
            },
        },
        disabled: {
            track: {
                background: silver.base,
                border: `solid 1px ${silver.darker4}`,
            },
            slider: {
                background: silver.lighter1,
                border: `solid 1px ${silver.darker4}`,
            },
        },
    },
    Popover: {
        background: silver.lighter1,
        borderRadius: roundness.base,
    },
    PriceTag: {
        strikethroughColor: grey.lighter2,
    },
    Select: {
        common: {
            backgroundColor: silver.lighter1,
            secondaryColor: silver.base,
            borderRadius: roundness.base,
        },
        wrapper: {
            common: {
                borderColor: silver.darker4,
            },
            focus: {
                borderColor: green.darker2,
                boxShadow: '0 0 0 4px rgba(107,222,120,0.4)',
            },
        },
        input: {
            background: silver.lighter1,
            borderColor: silver.darker4,
            color: grey.base,
            fontFamily: bodyFont,
            fontSize: fontSize.base,
            fontWeight: '400',
        },
        placeholder: {
            color: silver.darker4,
        },
        disabled: {
            chevron: grey.lighter2,
            color: grey.lighter2,
            background:
                '#f5f6f7 repeating-linear-gradient( -45deg, #f0f1f2, #f0f1f2 10px, transparent 10px, transparent 20px )',
        },
    },
    Skeleton: {
        common: {
            backgroundColor: silver.base,
            borderRadius: roundness.base,
        },
        Text: {
            fontSize: fontSize.base,
        },
    },
    ScrollBox: {
        scrollbar: {
            background: grey.base,
        },
    },
    Table: {
        default: {
            backgroundColor: silver.darker1,
        },
        cell: {
            default: {
                backgroundColor: silver.lighter1,
                borderColor: silver.darker4,
            },
            header: {
                backgroundColor: silver.darker1,
            },
        },
        row: {
            default: {
                backgroundColor: silver.lighter1,
                borderColor: 'rgba(107,222,120,0)',
            },
            hover: {
                backgroundColor: silver.base,
            },
            focus: {
                borderColor: 'rgba(107,222,120,0.4)',
            },
            dragging: {
                boxShadow: '0 6px 48px 0 rgba(33,37,43,0.30)',
            },
        },
    },
    Text: {
        default: {
            color: grey.base,
        },
        variant: {
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
        severity: {
            error: red.base,
            success: green.darker1,
            info: grey.lighter2,
            warning: yellow.darker1,
        },
    },
    TextArea: {
        idle: {
            common: {
                borderRadius: roundness.base,
                borderColor: silver.darker4,
                fontSize: fontSize.base,
                fontFamily: bodyFont,
                background: silver.lighter1,
            },
        },
        severity: {
            error: { boxShadow: '0 0 0 4px rgba(200,23,70,0.4)' },
            success: { boxShadow: '0 0 0 4px rgba(107,222,120,0.4)' },
            info: { boxShadow: '0 0 0 4px rgba(107,222,120,0.4)' },
            warning: { boxShadow: '0 0 0 4px rgba(237,177,7,0.4)' },
        },

        disabled: {
            color: grey.lighter2,
            background: 'repeating-linear-gradient( -45deg,#FAFBFD,#FAFBFD 10px,#F5F6F7 10px,#F5F6F7 20px )',
        },
    },
    TextField: {
        idle: {
            common: {
                borderRadius: roundness.base,
                borderColor: silver.darker4,
                fontSize: fontSize.base,
                fontFamily: bodyFont,
                color: grey.lighter3,
                background: silver.lighter1,
            },
            affix: {
                color: grey.lighter1,
                background: silver.base,
            },
        },
        focus: {
            borderColor: green.darker2,
        },

        severity: {
            error: { boxShadow: '0 0 0 4px rgba(200,23,70,0.4)' },
            success: { boxShadow: '0 0 0 4px rgba(107,222,120,0.4)' },
            info: { boxShadow: '0 0 0 4px rgba(107,222,120,0.4)' },
            warning: { boxShadow: '0 0 0 4px rgba(237,177,7,0.4)' },
        },

        disabled: {
            color: grey.lighter2,
            background: 'repeating-linear-gradient( -45deg,#FAFBFD,#FAFBFD 10px,#F5F6F7 10px,#F5F6F7 20px )',
        },
    },
    Tile: {
        borderColor: silver.darker4,
    },
    Toast: {
        borderRadius: roundness.base,
        backgroundColor: silver.lighter1,
        severity: {
            error: severity.error,
            success: severity.success,
            info: severity.info,
            warning: severity.warning,
        },
    },
    Toggle: {
        general: {
            background: silver.lighter1,
        },
        idle: {
            border: `1px solid ${silver.darker4}`,
            background: silver.base,
        },
        focus: {
            boxShadow: '0 0 0 4px rgba(107,222,120,0.4)',
        },
        checked: {
            border: `1px solid ${green.darker2}`,
            background: green.base,
        },
        idleDisabled: {
            background: `repeating-linear-gradient( -45deg,#FAFBFD,#FAFBFD 5px,${silver.darker1} 5px,${
                silver.darker1
            } 10px )`,
        },
        checkedDisabled: {
            background:
                'repeating-linear-gradient( -45deg,rgba(76,197,91,0.60),rgba(76,197,91,0.60) 5px,rgba(107,222,120,0.50) 5px,rgba(107,222,120,0.50) 10px )',
        },
        error: {
            border: `1px solid ${red.base}`,
        },
    },
};

export default theme;
export { bodyFont, headingFont, fontSize, green, silver, grey, red, yellow, roundness };
