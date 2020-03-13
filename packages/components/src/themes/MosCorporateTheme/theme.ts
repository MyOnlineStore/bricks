import ThemeType from '../../types/ThemeType';
import rgba from '../../utility/rgba';
import RecursivePartialType from '../../types/RecursivePartialType';
import { bodyFont, fontSize } from '../MosTheme/MosTheme.theme';
import { colors } from '../MosTheme/colors';

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
                backgroundColor: colors.green400,
                color: colors.white,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            hover: {
                backgroundColor: colors.green500,
                color: colors.white,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            focus: {
                backgroundColor: colors.green400,
                color: colors.white,
                boxShadow: `0 -2px 0 rgba(0,0,0,0.2) inset,0 0 0 4px ${rgba(colors.green300, 0.4)}`,
            },
            active: {
                backgroundColor: colors.green500,
                color: colors.white,
                boxShadow: 'none',
            },
        },
        secondary: {
            idle: {
                backgroundColor: colors.grey100,
                color: colors.grey600,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            hover: {
                backgroundColor: colors.grey200,
                color: colors.grey600,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            focus: {
                backgroundColor: colors.grey100,
                color: colors.grey600,
                boxShadow: `0 -2px 0 rgba(0,0,0,0.2) inset,0 0 0 4px ${rgba(colors.grey800, 0.08)}`,
            },
            active: {
                backgroundColor: colors.grey200,
                color: colors.grey600,
                boxShadow: 'none',
            },
        },
        info: {
            idle: {
                backgroundColor: colors.grey100,
                color: colors.grey600,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            hover: {
                backgroundColor: colors.grey200,
                color: colors.grey600,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            focus: {
                backgroundColor: colors.grey100,
                color: colors.grey600,
                boxShadow: `0 -2px 0 rgba(0,0,0,0.2) inset,0 0 0 4px ${rgba(colors.grey800, 0.08)}`,
            },
            active: {
                backgroundColor: colors.grey200,
                color: colors.grey600,
                boxShadow: 'none',
            },
        },
        warning: {
            idle: {
                backgroundColor: colors.yellow500,
                color: colors.grey800,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            hover: {
                backgroundColor: colors.yellow600,
                color: colors.grey800,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            focus: {
                backgroundColor: colors.yellow500,
                color: colors.grey800,
                boxShadow: `0 -2px 0 rgba(0,0,0,0.1) inset, 0 0 0 3px ${rgba(colors.yellow500, 0.25)}`,
            },
            active: {
                backgroundColor: colors.yellow600,
                color: colors.grey800,
                boxShadow: 'none',
            },
        },
        destructive: {
            idle: {
                backgroundColor: colors.red500,
                color: colors.white,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            hover: {
                backgroundColor: colors.red600,
                color: colors.white,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            focus: {
                backgroundColor: colors.red500,
                color: colors.white,
                boxShadow: `0 -2px 0 rgba(0,0,0,0.1) inset,0 0 0 3px ${rgba(colors.red500, 0.25)}`,
            },
            active: {
                backgroundColor: colors.red600,
                color: colors.white,
                boxShadow: 'none',
            },
        },
        plain: {
            idle: {
                backgroundColor: 'transparent',
                color: colors.grey800,
                boxShadow: 'none',
                border: `1px solid ${colors.grey300}`,
            },
            hover: {
                backgroundColor: colors.grey100,
                color: colors.grey800,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            focus: {
                backgroundColor: colors.grey100,
                color: colors.grey800,
                boxShadow: `inset,0 0 0 4px ${rgba(colors.grey800, 0.08)}`,
            },
            active: {
                backgroundColor: colors.grey100,
                color: colors.grey800,
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
                color: colors.grey400,
                backgroundColor: colors.grey300,
                boxShadow: `0 -2px 0 rgba(0,0,0,0.1) inset`,
            },
            plain: {
                color: colors.grey400,
                backgroundColor: colors.grey300,
                boxShadow: `0 -2px 0 rgba(0,0,0,0.1) inset`,
                border: `1px solid ${colors.grey200}`,
            },
        },
    },
};

export default theme;
