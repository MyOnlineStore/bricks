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

const StyledPaginationDots = styled(Box)`
    border-radius: 3px;
    padding: 8px 6px;
`;

const StyledPaginationButton = styled(Box)<{ active?: boolean; isArrow?: boolean }>`
    border-radius: 3px;
    ${({ theme, active }) => (active ? `background-color: ${theme.Pagination.active.backgroundColor}` : '')};
    ${({ theme, active }) => (active ? `color: ${theme.Pagination.active.textColor}` : '')};
    border: ${({ theme, isArrow }): string =>
        isArrow ? `1px solid ${theme.Pagination.arrow.borderColor}` : '1px solid transparent'};
    padding: ${({ isArrow }) => (isArrow ? '8px' : '8px 12px')};
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

export { PaginationThemeType, StyledPaginationDots, StyledPaginationButton, composePaginationTheme };
