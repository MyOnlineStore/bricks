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

        secondary: {
            idle: {
                backgroundColor: colors.grey200,
                color: colors.grey700,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            hover: {
                backgroundColor: colors.grey300,
                color: colors.grey700,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            focus: {
                backgroundColor: colors.grey200,
                color: colors.grey700,
                boxShadow: `0 -2px 0 rgba(0,0,0,0.2) inset,0 0 0 4px ${rgba(colors.grey200, 0.875)}`,
            },
            active: {
                backgroundColor: colors.grey300,
                color: colors.grey700,
                boxShadow: 'none',
            },
        },
        info: {
            idle: {
                backgroundColor: colors.blue400,
                color: colors.blue900,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            hover: {
                backgroundColor: colors.blue500,
                color: colors.blue900,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            focus: {
                backgroundColor: colors.blue400,
                color: colors.blue900,
                boxShadow: `0 -2px 0 rgba(0,0,0,0.2) inset,0 0 0 4px ${rgba(colors.blue100, 0.875)}`,
            },
            active: {
                backgroundColor: colors.blue500,
                color: colors.blue900,
                boxShadow: 'none',
            },
        },
        warning: {
            idle: {
                backgroundColor: colors.yellow400,
                color: colors.yellow900,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            hover: {
                backgroundColor: colors.yellow500,
                color: colors.yellow900,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            focus: {
                backgroundColor: colors.yellow400,
                color: colors.yellow900,
                boxShadow: `0 -2px 0 rgba(0,0,0,0.1) inset, 0 0 0 4px ${rgba(colors.yellow100, 0.875)}`,
            },
            active: {
                backgroundColor: colors.yellow500,
                color: colors.yellow900,
                boxShadow: 'none',
            },
        },
        destructive: {
            idle: {
                backgroundColor: colors.red400,
                color: colors.red900,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            hover: {
                backgroundColor: colors.red500,
                color: colors.red900,
                boxShadow: '0 -2px 0 rgba(0,0,0,0.2) inset',
            },
            focus: {
                backgroundColor: colors.red400,
                color: colors.red900,
                boxShadow: `0 -2px 0 rgba(0,0,0,0.1) inset,0 0 0 4px ${rgba(colors.red100, 0.875)}`,
            },
            active: {
                backgroundColor: colors.red500,
                color: colors.red900,
                boxShadow: 'none',
            },
        },
        plain: {
            idle: {
                backgroundColor: 'transparent',
                color: colors.grey500,
                boxShadow: 'none',
                border: `1px solid ${colors.grey300}`,
            },
            hover: {
                backgroundColor: colors.grey100,
                color: colors.grey500,
                boxShadow: 'none',
            },
            focus: {
                backgroundColor: 'transparent',
                color: colors.grey500,
                boxShadow: `0 0 0 4px ${rgba(colors.grey200, 0.875)}`,
            },
            active: {
                backgroundColor: colors.grey100,
                color: colors.grey500,
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
                color: colors.grey300,
                backgroundColor: colors.grey100,
                boxShadow: `0 -2px 0 rgba(0,0,0,0.1) inset`,
            },
            plain: {
                color: colors.grey300,
                backgroundColor: 'transparent',
                boxShadow: `0 -2px 0 rgba(0,0,0,0.1) inset`,
                border: `1px solid ${colors.grey200}`,
            },
        },
    },
};

export default theme;
