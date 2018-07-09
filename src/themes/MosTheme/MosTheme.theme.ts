import ThemeType from '../../types/ThemeType';

/* tslint:disable:max-file-line-count */

const bodyFont = 'Source Sans Pro, sans-serif';
const headingFont = 'Melbourne, sans-serif';

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
    lighter2: '#88979d',
    lighter1: '#55656d',
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

const theme: ThemeType = {
    Badge: {
        backgroundColor: red.base,
        color: silver.lighter1,
    },
    Button: {
        common: {
            borderRadius: '3px',
            borderWidth: '0',
            fontSize: fontSize.base,
            fontWeight: '400',
            fontFamily: bodyFont,
        },
        primary: {
            idle: {
                backgroundColor: green.darker1,
                borderColor: 'transparent',
                color: silver.lighter1,
                boxShadow: '0 -2px 0 rgba(0, 0, 0, 0.2) inset',
                textDecoration: 'none',
            },
            hover: {
                backgroundColor: green.darker2,
                borderColor: 'transparent',
                color: silver.lighter1,
                boxShadow: '0 -2px 0 rgba(0, 0, 0, 0.2) inset',
                textDecoration: 'none',
            },
            focus: {
                backgroundColor: green.darker1,
                borderColor: 'transparent',
                color: silver.lighter1,
                boxShadow: '0 -2px 0 rgba(0, 0, 0, .2) inset, 0 0 0 4px rgba(107,222,120,0.4)',
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
        secondary: {
            idle: {
                backgroundColor: silver.base,
                borderColor: 'transparent',
                color: grey.lighter1,
                boxShadow: '0 -2px 0 rgba(0, 0, 0, 0.2) inset',
                textDecoration: 'none',
            },
            hover: {
                backgroundColor: silver.darker1,
                borderColor: 'transparent',
                color: grey.lighter1,
                boxShadow: '0 -2px 0 rgba(0, 0, 0, 0.2) inset',
                textDecoration: 'none',
            },
            focus: {
                backgroundColor: silver.base,
                borderColor: 'transparent',
                color: grey.lighter1,
                boxShadow: '0 -2px 0 rgba(0, 0, 0, .2) inset, 0 0 0 4px rgba(51, 55, 64, .08)',
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
        warning: {
            idle: {
                backgroundColor: yellow.darker1,
                borderColor: 'transparent',
                color: silver.lighter1,
                boxShadow: '0 -2px 0 rgba(0, 0, 0, 0.2) inset',
                textDecoration: 'none',
            },
            hover: {
                backgroundColor: yellow.darker2,
                borderColor: 'transparent',
                color: silver.lighter1,
                boxShadow: '0 -2px 0 rgba(0, 0, 0, 0.2) inset',
                textDecoration: 'none',
            },
            focus: {
                backgroundColor: yellow.darker1,
                borderColor: 'transparent',
                color: silver.lighter1,
                boxShadow: '0 -2px 0 rgba(0, 0, 0, .1) inset, 0 0 0 3px rgba(252, 194, 0, .25)',
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
        destructive: {
            idle: {
                backgroundColor: red.base,
                borderColor: 'transparent',
                color: silver.lighter1,
                boxShadow: '0 -2px 0 rgba(0, 0, 0, 0.2) inset',
                textDecoration: 'none',
            },
            hover: {
                backgroundColor: red.darker1,
                borderColor: 'transparent',
                color: silver.lighter1,
                boxShadow: '0 -2px 0 rgba(0, 0, 0, 0.2) inset',
                textDecoration: 'none',
            },
            focus: {
                backgroundColor: red.base,
                borderColor: 'transparent',
                color: silver.lighter1,
                boxShadow: '0 -2px 0 rgba(0, 0, 0, .1) inset, 0 0 0 3px rgba(237, 33, 87, .25)',
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
                borderColor: 'transparent',
                color: grey.base,
                boxShadow: 'none',
                textDecoration: 'underline',
            },
            hover: {
                backgroundColor: silver.base,
                borderColor: 'transparent',
                color: grey.base,
                boxShadow: '0 -2px 0 rgba(0, 0, 0, 0.2) inset',
                textDecoration: 'underline',
            },
            focus: {
                backgroundColor: silver.base,
                borderColor: 'transparent',
                color: grey.base,
                boxShadow: '0 -2px 0 rgba(0, 0, 0, .2) inset, 0 0 0 4px rgba(51, 55, 64, .08)',
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
        naked: {
            idle: {
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                color: grey.base,
                boxShadow: 'none',
                textDecoration: 'none',
            },
            hover: {
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                color: grey.base,
                boxShadow: 'none',
                textDecoration: 'none',
            },
            focus: {
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                color: grey.base,
                boxShadow: 'none',
                textDecoration: 'none',
            },
            active: {
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                color: grey.base,
                boxShadow: 'none',
                textDecoration: 'none',
            },
        },
        disabled: {
            color: grey.lighter2,
            backgroundColor: silver.darker2,
            stripingColor: 'rgba(0, 0, 0, 0.04)',
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
                        boxShadow: `0 -2px 0 rgba(0, 0, 0, .2) inset, 0 0 0 4px ${silver.darker2}`,
                    },
                },
                flat: {
                    active: {
                        backgroundColor: silver.darker1,
                    },
                    hover: {
                        backgroundColor: silver.darker1,
                    },
                    focus: {
                        backgroundColor: silver.darker1,
                        boxShadow: `0 -2px 0 rgba(0, 0, 0, .2) inset, 0 0 0 4px ${silver.darker2}`,
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
    InlineNotification: {
        common: {
            fontSize: fontSize.smaller1,
            fontFamily: bodyFont,
        },
        error: { color: red.darker2 },
        success: { color: green.darker2 },
        info: { color: grey.lighter2 },
        warning: { color: yellow.darker2 },
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
        backdropColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '3px',
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
            color: green.base,
            backgroundColor: '#dde7f2',
            borderColor: '#c8d2dd',
        },
    },
    RadioButton: {
        idle: {
            backgroundColor: silver.base,
            boxShadow: green.base,
            borderColor: silver.darker4,
        },
        hover: {
            boxShadow: '0 0 0 4px rgba(107, 222, 120, 0.4)',
        },
        active: {
            boxShadow: `inset 0px 0px 0px 5.5px ${green.base}`,
            borderColor: green.darker2,
            backgroundColor: silver.lighter1,
        },
    },
    Popover: {
        background: silver.lighter1,
        borderRadius: 5,
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
    ScrollBox: {
        scrollbar: {
            background: grey.base,
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
            color: grey.lighter3,
        },
        strong: {
            fontWeight: '700',
        },
        small: {
            fontSize: '12px',
        },
        base: {
            fontSize: '14px',
        },
        large: {
            fontSize: '16px',
        },
    },
    TextField: {
        idle: {
            common: {
                borderRadius: '3px',
                borderColor: silver.darker4,
                fontSize: fontSize.base,
                fontFamily: bodyFont,
                color: grey.lighter3,
            },
        },
        active: {
            common: {
                color: grey.lighter3,
            },
            label: {
                color: grey.lighter3,
            },
        },
        focus: {
            borderColor: grey.lighter1,
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
            background: `repeating-linear-gradient( -45deg,${silver.base},${silver.base} 5px,${silver.darker1} 5px,${
                silver.darker1
            } 12px )`,
        },
        checkedDisabled: {
            background: `repeating-linear-gradient( -45deg,${green.base},${green.base} 5px,${green.darker1} 5px,${
                green.darker1
            } 12px )`,
        },
        error: {
            border: `1px solid ${red.darker2}`,
        },
    },
};

export default theme;
