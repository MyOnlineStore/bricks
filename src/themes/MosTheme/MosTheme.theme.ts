import ThemeType from '../../types/ThemeType';

/* tslint:disable:max-file-line-count */

const bodyFont = 'Source Sans Pro,sans-serif';
const headingFont = 'Melbourne,sans-serif';

const fontSize = {
    smaller1: '12px',
    base: '14px',
    larger1: '22px',
    larger2: '28px',
    larger3: '36px',
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

const theme: ThemeType = {
    Badge: {
        default: {
            color: silver.lighter1,
        },
        severity: {
            success: {
                backgroundColor: green.darker1,
            },
            warning: {
                backgroundColor: yellow.darker1,
            },
            error: {
                backgroundColor: red.base,
            },
            info: {
                backgroundColor: grey.lighter2,
            },
        },
    },
    Button: {
        common: {
            borderRadius: roundness.base,
            borderWidth: '0',
            fontSize: fontSize.base,
            fontWeight: '400',
            fontFamily: bodyFont,
        },
        primary: {
            regular: {
                idle: {
                    backgroundColor: green.darker1,
                    borderColor: 'transparent',
                    color: silver.lighter1,
                    boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
                    textDecoration: 'none',
                },
                hover: {
                    backgroundColor: green.darker2,
                    borderColor: 'transparent',
                    color: silver.lighter1,
                    boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
                    textDecoration: 'none',
                },
                focus: {
                    backgroundColor: green.darker1,
                    borderColor: 'transparent',
                    color: silver.lighter1,
                    boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset,0 0 0 4px rgba(107,222,120,0.4)',
                    textDecoration: 'none',
                },
                active: {
                    backgroundColor: green.darker2,
                    borderColor: 'transparent',
                    color: silver.lighter1,
                    boxShadow: 'none',
                    textDecoration: 'none',
                },
            },
            flat: {
                idle: {
                    backgroundColor: 'transparent',
                    color: grey.lighter1,
                    textDecoration: 'none',
                },
                hover: {
                    backgroundColor: 'transparent',
                    color: grey.darker1,
                    textDecoration: 'none',
                },
                active: {
                    backgroundColor: 'transparent',
                    color: grey.darker1,
                    textDecoration: 'none',
                },
            },
        },
        secondary: {
            regular: {
                idle: {
                    backgroundColor: silver.base,
                    borderColor: 'transparent',
                    color: grey.lighter1,
                    boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
                    textDecoration: 'none',
                },
                hover: {
                    backgroundColor: silver.darker1,
                    borderColor: 'transparent',
                    color: grey.lighter1,
                    boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
                    textDecoration: 'none',
                },
                focus: {
                    backgroundColor: silver.base,
                    borderColor: 'transparent',
                    color: grey.lighter1,
                    boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset,0 0 0 4px rgba(51,55,64,0.08)',
                    textDecoration: 'none',
                },
                active: {
                    backgroundColor: silver.darker1,
                    borderColor: 'transparent',
                    color: grey.lighter1,
                    boxShadow: 'none',
                    textDecoration: 'none',
                },
            },
            flat: {
                idle: {
                    backgroundColor: 'transparent',
                    color: grey.lighter1,
                    textDecoration: 'none',
                },
                hover: {
                    backgroundColor: 'transparent',
                    color: grey.darker1,
                    textDecoration: 'none',
                },
                active: {
                    backgroundColor: 'transparent',
                    color: grey.darker1,
                    textDecoration: 'none',
                },
            },
        },
        warning: {
            regular: {
                idle: {
                    backgroundColor: yellow.darker1,
                    borderColor: 'transparent',
                    color: silver.lighter1,
                    boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
                    textDecoration: 'none',
                },
                hover: {
                    backgroundColor: yellow.darker2,
                    borderColor: 'transparent',
                    color: silver.lighter1,
                    boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
                    textDecoration: 'none',
                },
                focus: {
                    backgroundColor: yellow.darker1,
                    borderColor: 'transparent',
                    color: silver.lighter1,
                    boxShadow: '0 -2px 0 rgba(0,0,0,0.1) inset,0 0 0 3px rgba(252,194,0,0.25)',
                    textDecoration: 'none',
                },
                active: {
                    backgroundColor: yellow.darker2,
                    borderColor: 'transparent',
                    color: silver.lighter1,
                    boxShadow: 'none',
                    textDecoration: 'none',
                },
            },
            flat: {
                idle: {
                    backgroundColor: 'transparent',
                    color: grey.lighter1,
                    textDecoration: 'none',
                },
                hover: {
                    backgroundColor: 'transparent',
                    color: grey.darker1,
                    textDecoration: 'none',
                },
                active: {
                    backgroundColor: 'transparent',
                    color: grey.darker1,
                    textDecoration: 'none',
                },
            },
        },
        destructive: {
            regular: {
                idle: {
                    backgroundColor: red.base,
                    borderColor: 'transparent',
                    color: silver.lighter1,
                    boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
                    textDecoration: 'none',
                },
                hover: {
                    backgroundColor: red.darker1,
                    borderColor: 'transparent',
                    color: silver.lighter1,
                    boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
                    textDecoration: 'none',
                },
                focus: {
                    backgroundColor: red.base,
                    borderColor: 'transparent',
                    color: silver.lighter1,
                    boxShadow: '0 -2px 0 rgba(0,0,0,0.1) inset,0 0 0 3px rgba(237,33,87,0.25)',
                    textDecoration: 'none',
                },
                active: {
                    backgroundColor: red.darker1,
                    borderColor: 'transparent',
                    color: silver.lighter1,
                    boxShadow: 'none',
                    textDecoration: 'none',
                },
            },
            flat: {
                idle: {
                    backgroundColor: 'transparent',
                    color: grey.lighter1,
                    textDecoration: 'none',
                },
                hover: {
                    backgroundColor: 'transparent',
                    color: red.base,
                    textDecoration: 'none',
                },
                active: {
                    backgroundColor: 'transparent',
                    color: red.base,
                    textDecoration: 'none',
                },
            },
        },
        plain: {
            regular: {
                idle: {
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    color: grey.base,
                    boxShadow: 'none',
                    textDecoration: 'underline',
                },
                hover: {
                    backgroundColor: silver.base,
                    borderColor: 'transparent',
                    color: grey.base,
                    boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
                    textDecoration: 'underline',
                },
                focus: {
                    backgroundColor: silver.base,
                    borderColor: 'transparent',
                    color: grey.base,
                    boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset,0 0 0 4px rgba(51,55,64,0.08)',
                    textDecoration: 'underline',
                },
                active: {
                    backgroundColor: silver.base,
                    borderColor: 'transparent',
                    color: grey.base,
                    boxShadow: 'none',
                    textDecoration: 'underline',
                },
            },
            flat: {
                idle: {
                    backgroundColor: 'transparent',
                    color: grey.lighter1,
                    textDecoration: 'none',
                },
                hover: {
                    backgroundColor: 'transparent',
                    color: grey.darker1,
                    textDecoration: 'none',
                },
                active: {
                    backgroundColor: 'transparent',
                    color: grey.darker1,
                    textDecoration: 'none',
                },
            },
        },
        disabled: {
            regular: {
                color: grey.lighter2,
                backgroundColor: silver.darker2,
                stripingColor: 'rgba(0,0,0,0.04)',
            },
            flat: {
                color: grey.lighter2,
                backgroundColor: 'transparent',
                textDecoration: 'none',
            },
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
            background: `repeating-linear-gradient( -45deg,${silver.base},${silver.base} 5px,${silver.darker1} 5px,${
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
                    regular: {
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
                },
                plain: {
                    regular: {
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
    },
    Heading: {
        default: {
            color: grey.base,
            fontFamily: headingFont,
            fontSize: fontSize.larger2,
            fontWeight: '400',
            lineHeight: '1.5',
            textTransform: 'none',
        },
        hierarchy: {
            hierarchy1: {
                color: grey.base,
                fontFamily: headingFont,
                fontSize: fontSize.larger3,
                fontWeight: '400',
                lineHeight: '1.25',
                textTransform: 'none',
            },
            hierarchy2: {
                color: grey.base,
                fontFamily: headingFont,
                fontSize: fontSize.larger2,
                fontWeight: '400',
                lineHeight: '1.25',
                textTransform: 'none',
            },
            hierarchy3: {
                color: grey.base,
                fontFamily: headingFont,
                fontSize: fontSize.larger1,
                fontWeight: '400',
                lineHeight: '1.25',
                textTransform: 'none',
            },
            hierarchy4: {
                color: grey.base,
                fontFamily: bodyFont,
                fontSize: '20px',
                fontWeight: '400',
                lineHeight: '1.25',
                textTransform: 'none',
            },
            hierarchy5: {
                color: grey.base,
                fontFamily: bodyFont,
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '1.25',
                textTransform: 'none',
            },
            hierarchy6: {
                color: grey.base,
                fontFamily: bodyFont,
                fontSize: fontSize.base,
                fontWeight: '400',
                lineHeight: '1.25',
                textTransform: 'uppercase',
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
        default: {
            color: grey.base,
            fontFamily: bodyFont,
            fontSize: fontSize.larger2,
            fontWeight: '400',
        },
        action: {
            fontSize: fontSize.larger2,
            fontWeight: '400',
            color: green.base,
            fontFamily: bodyFont,
        },
        base: {
            fontSize: fontSize.larger1,
            fontWeight: '400',
            color: grey.lighter2,
            fontFamily: bodyFont,
        },
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
        Button: {
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
            fontFamily: bodyFont,
            fontSize: fontSize.base,
            fontWeight: '400',
        },
        descriptive: {
            color: grey.lighter2,
        },
        strong: {
            fontWeight: '700',
        },
        small: {
            fontSize: fontSize.smaller1,
        },
        base: {
            fontSize: fontSize.base,
        },
        large: {
            fontSize: fontSize.larger1,
        },
        severity: {
            error: { color: red.darker2 },
            success: { color: green.darker2 },
            info: { color: grey.lighter3 },
            warning: { color: yellow.darker2 },
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
            background: `repeating-linear-gradient( -45deg,${silver.base},${silver.base} 10px,${silver.darker1} 10px,${
                silver.darker1
            } 20px )`,
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
            background: `repeating-linear-gradient( -45deg,${silver.base},${silver.base} 10px,${silver.darker1} 10px,${
                silver.darker1
            } 20px )`,
        },
    },
    Tile: {
        borderColor: silver.darker4,
    },
    Toaster: {
        borderRadius: roundness.base,
        backgroundColor: silver.lighter1,
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
            background: `repeating-linear-gradient( -45deg,${silver.base},${silver.base} 5px,${silver.darker1} 5px,${
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
