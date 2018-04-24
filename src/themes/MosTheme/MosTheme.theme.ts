import ThemeType from '../../types/ThemeType';

const sourceSans = 'Source Sans Pro, sans-serif';
const melbourne = 'Melbourne, sans-serif';
const green = '#5bd16a';
const white = '#fff';
const grey = '#edeff2';
const red = '#ed2157';
const yellow = '#fcc200';

const theme:ThemeType = {
    Button: {
        primary: {
            idle: {
                backgroundColor: green,
                borderColor: green,
                borderRadius: '0',
                borderWidth: '1px',
                color: white,
                fontFamily: sourceSans,
                fontSize: '16px',
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
                borderRadius: '0',
                borderWidth: '1px',
                color: '#333740',
                fontFamily: sourceSans,
                fontSize: '16px',
            },
            hover: {
                backgroundColor: grey,
                borderColor: '#d2d7e0',
                color: '#333740',
            },
            focus: {
                backgroundColor: grey,
                borderColor: '#d2d7e0',
                color: '#333740',
            },
            active: {
                backgroundColor: grey,
                borderColor: '#d2d7e0',
                color: '#333740',
            },
        },
        warning: {
            idle: {
                backgroundColor: yellow,
                borderColor: yellow,
                borderRadius: '0',
                borderWidth: '1px',
                color: white,
                fontFamily: sourceSans,
                fontSize: '16px',
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
                borderRadius: '0',
                borderWidth: '1px',
                color: white,
                fontFamily: sourceSans,
                fontSize: '16px',
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
            color: '#333740',
            backgroundColor: grey,

            lines: {
                background: `repeating-linear-gradient(
                    -45deg,
                    ${grey},
                    ${grey} 20px,
                    #dbdfe6 20px,
                    #dbdfe6 40px
                );`,
            },
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
        error: {
            color: '#c81746',
            background: '#ffbdce',
            borderColor: '#ff6c93',
            fontFamily: sourceSans,
            fontSize: '14px',
        },
        warning: {
            color: '#bb8d0a',
            background: '#fff0be',
            borderColor: '#ffce28',
            fontFamily: sourceSans,
            fontSize: '14px',
        },
        success: {
            color: '#31953d',
            background: '#d2f5d6',
            borderColor: '#6bde78',
            fontFamily: sourceSans,
            fontSize: '14px',
        },
        info: {
            color: '#4e82bb',
            background: '#dde7f2',
            borderColor: '#c8d2dd',
            fontFamily: sourceSans,
            fontSize: '14px',
        },
    },
    Text:{
        color: '#333740',
        fontFamily: sourceSans,
        fontSize: '16px',
    },
    Heading:{
        color: '#333740',
        fontFamily: melbourne,
        fontSize: '28px',
    },
    PriceTag: {
        default: {
            color: '#333740',
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
    }
};

export default theme;
