import ThemeType from '../../types/ThemeType';

/* tslint:disable:max-file-line-count */

const bodyFont = 'Source Sans Pro, sans-serif';
const headingFont = 'Melbourne, sans-serif';

const fontSize = {
    larger3: '36px',
    larger2: '28px',
    larger1: '22px',
    base: '14px',
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

const theme:ThemeType = {
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
                boxShadow: '0 -2px 0 rgba(0, 0, 0, .2) inset',
                textDecoration: 'none',
            },
            hover: {
                backgroundColor: green.darker2,
                borderColor: 'transparent',
                color: silver.lighter1,
                boxShadow: '0 -2px 0 rgba(0, 0, 0, .2) inset',
                textDecoration: 'none',
            },
            focus: {
                backgroundColor: green.darker1,
                borderColor: 'transparent',
                color: silver.lighter1,
                boxShadow: '0 -2px 0 rgba(0, 0, 0, .2) inset, 0 0 0 4px rgba(107, 222, 120, .4)',
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
                color: grey.base,
                boxShadow: '0 -2px 0 rgba(0, 0, 0, .2) inset',
                textDecoration: 'none',
            },
            hover: {
                backgroundColor: silver.darker1,
                borderColor: 'transparent',
                color: grey.base,
                boxShadow: '0 -2px 0 rgba(0, 0, 0, .2) inset',
                textDecoration: 'none',
            },
            focus: {
                backgroundColor: silver.base,
                borderColor: 'transparent',
                color: grey.base,
                boxShadow: '0 -2px 0 rgba(0, 0, 0, .2) inset, 0 0 0 4px rgba(51, 55, 64, .08)',
                textDecoration: 'none',
            },
            active: {
                backgroundColor: silver.darker1,
                borderColor: 'transparent',
                color: grey.base,
                boxShadow: 'none',
                textDecoration: 'none',
            },
        },
        warning: {
            idle: {
                backgroundColor: yellow.darker1,
                borderColor: 'transparent',
                color: silver.lighter1,
                boxShadow: '0 -2px 0 rgba(0, 0, 0, .2) inset',
                textDecoration: 'none',
            },
            hover: {
                backgroundColor: yellow.darker2,
                borderColor: 'transparent',
                color: silver.lighter1,
                boxShadow: '0 -2px 0 rgba(0, 0, 0, .2) inset',
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
                boxShadow: '0 -2px 0 rgba(0, 0, 0, .2) inset',
                textDecoration: 'none',
            },
            hover: {
                backgroundColor: red.darker1,
                borderColor: 'transparent',
                color: silver.lighter1,
                boxShadow: '0 -2px 0 rgba(0, 0, 0, .2) inset',
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
                boxShadow: '0 -2px 0 rgba(0, 0, 0, .2) inset',
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
        disabled:{
            color: grey.lighter2,
            backgroundColor: silver.darker2,
            stripingColor: 'rgba(0, 0, 0, .04)',
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
                }
            }
        }
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
    },
    Heading: {
        color: grey.base,
        fontFamily: headingFont,
        fontSize: fontSize.larger2,
        fontWeight: '400',
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
        }
    },
    SubHeading: {
        color: grey.lighter2,
        fontFamily: bodyFont,
        fontSize: fontSize.larger1,
        fontWeight: '400',
    },
    ScrollBox: {
        scrollbar: {
            background: grey.base,
        }
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
    }
};

export default theme;
