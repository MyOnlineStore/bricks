import colors from '../../themes/MosTheme/colors';
import styled from '../../utility/styled';
import Text from '../Text';
import StyledIcon from '../Icon/style';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import chroma from 'chroma-js';

type StateThemeType = {
    backgroundColor: string;
    borderColor: string;
    boxShadow: string;
    color: string;
};

type PaginationThemeType = {
    common: {
        borderRadius: string;
    };
    hover: StateThemeType;
    focus: StateThemeType;
    active: StateThemeType;
    idle: StateThemeType;
    current: StateThemeType;
};

const StyledPageButton = styled.button<{ current?: boolean }>`
    border-radius: 3px;
    box-sizing: border-box;
    height: 36px;
    min-width: 36px;
    padding: 0 9px;
    line-height: 1;
    margin: 1.5px;
    cursor: pointer;

    ${Text}, ${StyledIcon} {
        color: inherit;
    }

    ${({ current, theme }) => {
        if (current) {
            return `
                background: ${theme.Pagination.current.backgroundColor};
                color: ${theme.Pagination.current.color};
                border: 1px solid ${theme.Pagination.current.borderColor};
                cursor: default;

                &:hover,
                &:focus,
                &:active {
                    background: ${theme.Pagination.current.backgroundColor};
                    color: ${theme.Pagination.current.color};
                    border: 1px solid ${theme.Pagination.current.borderColor};
                    cursor: default;
                    outline: 0;
                }
            `;
        }

        return `
            background: ${theme.Pagination.idle.backgroundColor};
            border: 1px solid ${theme.Pagination.idle.borderColor};
            color: ${theme.Pagination.idle.color};

            &:hover {
                background: ${theme.Pagination.hover.backgroundColor};
                box-shadow: ${theme.Pagination.hover.boxShadow};
                color: ${theme.Pagination.hover.color};
                border: 1px solid ${theme.Pagination.idle.borderColor};
            }

            &:focus {
                background: ${theme.Pagination.focus.backgroundColor};
                box-shadow: ${theme.Pagination.focus.boxShadow};
                color: ${theme.Pagination.focus.color};
                border: 1px solid ${theme.Pagination.idle.borderColor};
                outline: 0;
            }

            &:active {
                background: ${theme.Pagination.active.backgroundColor};
                box-shadow: ${theme.Pagination.active.boxShadow};
                color: ${theme.Pagination.active.color};
                border: 1px solid ${theme.Pagination.idle.borderColor};
            }
        `;
    }}
`;

const StyledEllipsis = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 36px;
    margin: 1.5px;

    ${Text} {
        color: ${colors.grey500};
    }
`;

const composePaginationTheme = (themeTools: ThemeTools): PaginationThemeType => {
    const { colors, forms } = themeTools.themeSettings;

    return {
        common: {
            borderRadius: '0px',
        },
        idle: {
            backgroundColor: forms.background,
            borderColor: colors.silver.darker2,
            boxShadow: 'none',
            color: themeTools.calculateContrastTextColor(forms.background),
        },
        hover: {
            backgroundColor: chroma(forms.background)
                .darken(0.1)
                .hex(),
            borderColor: colors.silver.darker2,
            boxShadow: 'none',
            color: themeTools.calculateContrastTextColor(forms.background),
        },
        focus: {
            backgroundColor: chroma(forms.background)
                .darken(0.1)
                .hex(),
            borderColor: colors.silver.darker2,
            boxShadow: `${chroma(colors.grey.base).alpha(0.08)}`,
            color: themeTools.calculateContrastTextColor(forms.background),
        },
        active: {
            backgroundColor: chroma(forms.background)
                .darken(0.2)
                .hex(),
            borderColor: colors.silver.darker2,
            boxShadow: `${chroma(colors.grey.base).alpha(0.08)}`,
            color: themeTools.calculateContrastTextColor(forms.background),
        },
        current: {
            backgroundColor: colors.primary.base,
            borderColor: colors.primary.darker1,
            boxShadow: themeTools.themeSettings.buttonShadow,
            color: themeTools.calculateContrastTextColor(colors.primary.base),
        },
    };
};

export { StyledPageButton, StyledEllipsis, composePaginationTheme, PaginationThemeType };
