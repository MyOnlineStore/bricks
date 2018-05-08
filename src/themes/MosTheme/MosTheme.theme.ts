import ThemeType from '../../types/ThemeType';

const bodyFont = 'Source Sans Pro, sans-serif';
const headingFont = 'Melbourne, sans-serif';

const fontSize = {
    larger: '36px',
    large: '28px',
    medium: '22px',
    base: '14px',
};

const green = {
    light: '#7ce88a',
    base: '#6bde78',
    dark: '#5bd16a',
    darker: '#4cc55b',
};

const silver = {
    light: '#fff',
    base: '#f8f9fb',
    medium: '#edeff2',
    dark: '#e4e7ec',
    darker: '#dbdfe6',
    extradark: '#d2d7e0',
};

const grey = {
    lighter: '#a6aab3',
    light: '#88979d',
    medium: '#55656d',
    base: '#333740',
    dark: '#21252b',
};

const red = {
    light: '#ff245e',
    base: '#ed2157',
    medium: '#dc1b4f',
    dark: '#c81746',
};

const yellow = {
    light: '#ffda5b',
    base: '#ffce28',
    medium: '#fcc200',
    dark: '#edb107',
};

const theme:ThemeType = {
    Button: {
        common: {
            borderRadius: '0',
            borderWidth: '1px',
            fontSize: fontSize.base,
            fontWeight: '400',
            fontFamily: bodyFont,
        },
        primary: {
            idle: {
                backgroundColor: green.dark,
                borderColor: green.dark,
                color: silver.light,
            },
            hover: {
                backgroundColor: green.dark,
                borderColor: green.dark,
                color: silver.light,
            },
            focus: {
                backgroundColor: green.dark,
                borderColor: green.dark,
                color: silver.light,
            },
            active: {
                backgroundColor: green.dark,
                borderColor: green.dark,
                color: silver.light,
            },
        },
        secondary: {
            idle: {
                backgroundColor: silver.medium,
                borderColor: silver.extradark,
                color: grey.base,
            },
            hover: {
                backgroundColor: silver.medium,
                borderColor: silver.extradark,
                color: grey.base,
            },
            focus: {
                backgroundColor: silver.medium,
                borderColor: silver.extradark,
                color: grey.base,
            },
            active: {
                backgroundColor: silver.medium,
                borderColor: silver.extradark,
                color: grey.base,
            },
        },
        warning: {
            idle: {
                backgroundColor: yellow.medium,
                borderColor: yellow.medium,
                color: silver.light,
            },
            hover: {
                backgroundColor: yellow.medium,
                borderColor: yellow.medium,
                color: silver.light,
            },
            focus: {
                backgroundColor: yellow.medium,
                borderColor: yellow.medium,
                color: silver.light,
            },
            active: {
                backgroundColor: yellow.medium,
                borderColor: yellow.medium,
                color: silver.light,
            },
        },
        destructive: {
            idle: {
                backgroundColor: red.base,
                borderColor: red.base,
                color: silver.light,
            },
            hover: {
                backgroundColor: red.base,
                borderColor: red.base,
                color: silver.light,
            },
            focus: {
                backgroundColor: red.base,
                borderColor: red.base,
                color: silver.light,
            },
            active: {
                backgroundColor: red.base,
                borderColor: red.base,
                color: silver.light,
            },
        },
        disabled:{
            color: grey.base,
            backgroundColor: silver.medium,
            stripingColor: silver.extradark,
        },
    },
    FlatButton: {
        idle: {
            borderColor: 'transparent',
            borderRadius: '0',
            borderWidth: '1px',
            color: grey.dark,
            fontFamily: bodyFont,
            fontSize: fontSize.base,
        },
        hover: {
            borderColor: silver.extradark,
            color: grey.dark,
        },
        focus: {
            borderColor: silver.extradark,
            color: grey.dark,
        },
        active: {
            borderColor: silver.extradark,
            color: grey.dark,
        },
    },
    Notification: {
        common: {
            fontFamily: bodyFont,
            fontSize: fontSize.medium,
        },
        error: {
            color: red.dark,
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
    Text:{
        color: grey.base,
        fontFamily: bodyFont,
        fontSize: fontSize.base,
    },
    Heading:{
        color: grey.base,
        fontFamily: headingFont,
        fontSize: fontSize.large,
        fontWeight: '400',
    },
    PriceTag: {
        default: {
            color: grey.base,
            fontFamily: bodyFont,
            fontSize: fontSize.large,
            fontWeight: '400',
            super: {
                fontSize: '.7em',
                fontWeight: '400',
            },
        },
        action: {
            fontSize: fontSize.medium,
            fontWeight: '400',
            color: grey.light,
            fontFamily: bodyFont,

            super: {
                fontSize: '.7em',
                fontWeight: '400',
            }
        }
    },
    SubHeading:{
        color: grey.light,
        fontFamily: bodyFont,
        fontSize: fontSize.medium,
        fontWeight: '400',
    }
};

export default theme;
