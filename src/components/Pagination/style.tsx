import styled from '../../utility/styled';
import ThemeTools from '../../themes/ExperimentalCustomTheme/ThemeTools';
import Box from '../Box';

type PaginationThemeType = {
    active: {
        backgroundColor: string;
        textColor: string;
    };
    arrow: {
        borderColor: string;
    };
};

const StyledPaginationItem = styled(Box)<{ active?: boolean; isArrow?: boolean }>`
    border-radius: 3px;
    display: inline-block;
    padding: ${({ isArrow }) => (isArrow ? '8px 10px' : '8px 12px')};
    ${({ theme, active }) => (active ? `background-color: ${theme.Pagination.active.backgroundColor}` : '')};
    ${({ theme, active }) => (active ? `color: ${theme.Pagination.active.textColor}` : '')};
    border: ${({ theme, isArrow }): string =>
        isArrow ? `1px solid ${theme.Pagination.arrow.borderColor}` : '1px solid transparent'};
    cursor: pointer;
`;

const composePaginationTheme = (themeTools: ThemeTools): PaginationThemeType => {
    const { colors } = themeTools.themeSettings;

    return {
        active: {
            backgroundColor: colors.primary.base,
            textColor: colors.silver.lighter1,
        },
        arrow: {
            borderColor: colors.silver.darker4,
        },
    };
};

export { PaginationThemeType, StyledPaginationItem, composePaginationTheme };
