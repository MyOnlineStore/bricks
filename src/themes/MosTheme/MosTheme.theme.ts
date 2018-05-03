import ThemeType from '../../types/ThemeType';

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
            borderRadius: '0',
            borderWidth: '1px',
            fontSize: fontSize.base,
            fontWeight: '400',
            fontFamily: bodyFont,
        },
        primary: {
            idle: {
                backgroundColor: green.darker1,
                borderColor: green.darker1,
                color: silver.lighter1,
            },
            hover: {
                backgroundColor: green.darker1,
                borderColor: green.darker1,
                color: silver.lighter1,
            },
            focus: {
                backgroundColor: green.darker1,
                borderColor: green.darker1,
                color: silver.lighter1,
            },
            active: {
                backgroundColor: green.darker1,
                borderColor: green.darker1,
                color: silver.lighter1,
            },
        },
        secondary: {
            idle: {
                backgroundColor: silver.darker1,
                borderColor: silver.darker4,
                color: grey.base,
            },
            hover: {
                backgroundColor: silver.darker1,
                borderColor: silver.darker4,
                color: grey.base,
            },
            focus: {
                backgroundColor: silver.darker1,
                borderColor: silver.darker4,
                color: grey.base,
            },
            active: {
                backgroundColor: silver.darker1,
                borderColor: silver.darker4,
                color: grey.base,
            },
        },
        warning: {
            idle: {
                backgroundColor: yellow.darker1,
                borderColor: yellow.darker1,
                color: silver.lighter1,
            },
            hover: {
                backgroundColor: yellow.darker1,
                borderColor: yellow.darker1,
                color: silver.lighter1,
            },
            focus: {
                backgroundColor: yellow.darker1,
                borderColor: yellow.darker1,
                color: silver.lighter1,
            },
            active: {
                backgroundColor: yellow.darker1,
                borderColor: yellow.darker1,
                color: silver.lighter1,
            },
        },
        destructive: {
            idle: {
                backgroundColor: red.base,
                borderColor: red.base,
                color: silver.lighter1,
            },
            hover: {
                backgroundColor: red.base,
                borderColor: red.base,
                color: silver.lighter1,
            },
            focus: {
                backgroundColor: red.base,
                borderColor: red.base,
                color: silver.lighter1,
            },
            active: {
                backgroundColor: red.base,
                borderColor: red.base,
                color: silver.lighter1,
            },
        },
        disabled:{
            color: grey.base,
            backgroundColor: silver.darker1,
            stripingColor: silver.darker3,
        },
    },
    FlatButton: {
        idle: {
            borderColor: 'transparent',
            borderRadius: '0',
            borderWidth: '1px',
            color: grey.darker1,
            fontFamily: bodyFont,
            fontSize: fontSize.base,
        },
        hover: {
            borderColor: silver.darker4,
            color: grey.darker1,
        },
        focus: {
            borderColor: silver.darker4,
            color: grey.darker1,
        },
        active: {
            borderColor: silver.darker4,
            color: grey.darker1,
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
    Text:{
        color: grey.base,
        fontFamily: bodyFont,
        fontSize: fontSize.base,
    },
    Heading:{
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
    SubHeading:{
        color: grey.lighter2,
        fontFamily: bodyFont,
        fontSize: fontSize.larger1,
        fontWeight: '400',
    },
    ScrollBox: {
        scrollbar: {
            background: grey.base,
        }
    }
};

export default theme;
