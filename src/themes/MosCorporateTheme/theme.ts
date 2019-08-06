import ThemeType from '../../types/ThemeType';
import rgba from '../../utility/rgba';
import RecursivePartialType from '../../types/RecursivePartialType';
import { bodyFont, fontSize, green, silver, grey, red, yellow } from '../MosTheme/MosTheme.theme';

const roundness = {
    base: '19px',
};

const theme: RecursivePartialType<ThemeType> = {
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
                boxShadow: `0 -2px 0 rgba(0,0,0,0.2) inset,0 0 0 4px ${rgba(green.base, 0.4)}`,
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
                boxShadow: `0 -2px 0 rgba(0,0,0,0.2) inset,0 0 0 4px ${rgba(grey.base, 0.08)}`,
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
                color: grey.base,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            hover: {
                backgroundColor: yellow.darker2,
                color: grey.base,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            focus: {
                backgroundColor: yellow.darker1,
                color: grey.base,
                boxShadow: `0 -2px 0 rgba(0,0,0,0.1) inset, 0 0 0 3px ${rgba(yellow.darker1, 0.25)}`,
            },
            active: {
                backgroundColor: yellow.darker2,
                color: grey.base,
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
                boxShadow: `0 -2px 0 rgba(0,0,0,0.1) inset,0 0 0 3px ${rgba(red.base, 0.25)}`,
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
                boxShadow: `0 -2px 0 rgba(0,0,0,0.2) inset,0 0 0 4px ${rgba(grey.base, 0.08)}`,
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
};

export default theme;
