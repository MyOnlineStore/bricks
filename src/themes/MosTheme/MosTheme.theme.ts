import ThemeType from '../../types/ThemeType';

const sourceSans = 'Source Sans Pro, sans-serif';
const melbourne = 'Melbourne, sans-serif';
const green = '#5bd16a';
const white = '#fff';
const grey = '#edeff2';
const red = '#ed2157';
const yellow = '#fcc200';
const black = '#333740';

const theme:ThemeType = {
    Button: {
        common: {
            borderRadius: '0',
            borderWidth: '1px',
            fontSize: '16px',
            weight: '400',
            fontFamily: sourceSans,
        },
        primary: {
            idle: {
                backgroundColor: green,
                borderColor: green,
                color: white,
            },
            hover: {
                backgroundColor: green,
                borderColor: green,
                color: white,
            },
            focus: {
                backgroundColor: green,
                borderColor: green,
                color: white,
            },
            active: {
                backgroundColor: green,
                borderColor: green,
                color: white,
            },
        },
        secondary: {
            idle: {
                backgroundColor: grey,
                borderColor: '#d2d7e0',
                color: black,
            },
            hover: {
                backgroundColor: grey,
                borderColor: '#d2d7e0',
                color: black,
            },
            focus: {
                backgroundColor: grey,
                borderColor: '#d2d7e0',
                color: black,
            },
            active: {
                backgroundColor: grey,
                borderColor: '#d2d7e0',
                color: black,
            },
        },
        warning: {
            idle: {
                backgroundColor: yellow,
                borderColor: yellow,
                color: white,
            },
            hover: {
                backgroundColor: yellow,
                borderColor: yellow,
                color: white,
            },
            focus: {
                backgroundColor: yellow,
                borderColor: yellow,
                color: white,
            },
            active: {
                backgroundColor: yellow,
                borderColor: yellow,
                color: white,
            },
        },
        destructive: {
            idle: {
                backgroundColor: red,
                borderColor: red,
                color: white,
            },
            hover: {
                backgroundColor: red,
                borderColor: red,
                color: white,
            },
            focus: {
                backgroundColor: red,
                borderColor: red,
                color: white,
            },
            active: {
                backgroundColor: red,
                borderColor: red,
                color: white,
            },
        },
        disabled:{
            color: black,
            backgroundColor: grey,
            stripingColor: '#dbdfe6',
        },
    },
    FlatButton: {
        idle: {
            borderColor: 'transparent',
            borderRadius: '0',
            borderWidth: '1px',
            color: '#21252b',
            fontFamily: sourceSans,
            fontSize: '16px',
        },
        hover: {
            borderColor: '#d2d7e0',
            color: '#21252b',
        },
        focus: {
            borderColor: '#d2d7e0',
            color: '#21252b',
        },
        active: {
            borderColor: '#d2d7e0',
            color: '#21252b',
        },
    },
    Notification: {
        common: {
            fontFamily: sourceSans,
            fontSize: '14px',
        },
        error: {
            color: '#c81746',
            background: '#ffbdce',
            borderColor: '#ff6c93',
        },
        warning: {
            color: '#bb8d0a',
            background: '#fff0be',
            borderColor: '#ffce28',
        },
        success: {
            color: '#31953d',
            background: '#d2f5d6',
            borderColor: '#6bde78',
        },
        info: {
            color: '#4e82bb',
            background: '#dde7f2',
            borderColor: '#c8d2dd',
        },
    },
    Text:{
        color: black,
        fontFamily: sourceSans,
        fontSize: '16px',
    },
    Heading:{
        color: black,
        fontFamily: melbourne,
        fontSize: '28px',
        weight: '400',
    },
    PriceTag: {
        default: {
            color: black,
            fontFamily: sourceSans,
            fontSize: '28px',
            fontWeight: '400',
            super: {
                fontSize: '.7em',
                fontWeight: '400',
            },
        },
        action: {
            fontSize: '24px',
            fontWeight: '400',
            color: '#88979d',
            fontFamily: sourceSans,

            super: {
                fontSize: '.7em',
                fontWeight: '400',
            }
        }
    },
    SubHeading:{
        color: '#88979d',
        fontFamily: sourceSans,
        fontSize: '18px',
        weight: '400',
    }
};

export default theme;
