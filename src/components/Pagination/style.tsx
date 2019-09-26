import styled from '../../utility/styled';
import ThemeTools from '../../themes/ExperimentalCustomTheme/ThemeTools';
import Box from '../Box';

type PaginationThemeType = {
    borderRadius: string;
    active: {
        backgroundColor: string;
        textColor: string;
    };
    arrow: {
        borderColor: string;
    };
};

const StyledPaginationDots = styled(Box)`
    border-radius: ${({ theme }) => theme.Pagination.borderRadius};
    padding: 8px 6px;
`;

const StyledPaginationButton = styled(Box)<{ active?: boolean; isArrow?: boolean; 'data-testid'?: string }>`
    border-radius: ${({ theme }) => theme.Pagination.borderRadius};
    ${({ theme, active }) => (active ? `background-color: ${theme.Pagination.active.backgroundColor}` : '')};
    ${({ theme, active }) => (active ? `color: ${theme.Pagination.active.textColor}` : '')};
    border: ${({ theme, isArrow }): string =>
        isArrow ? `1px solid ${theme.Pagination.arrow.borderColor}` : '1px solid transparent'};
    padding: ${({ isArrow }) => (isArrow ? '8px' : '8px 12px')};

    &:hover {
        border-color: ${({ theme, isArrow }) => (isArrow ? theme.Pagination.active.backgroundColor : '')};
        background-color: ${({ theme, isArrow }) => (isArrow ? theme.Pagination.active.backgroundColor : '')};

        svg {
            fill: ${({ theme }) => theme.Pagination.active.textColor};
        }
    }
`;

const composePaginationTheme = (themeTools: ThemeTools): PaginationThemeType => {
    const { colors } = themeTools.themeSettings;

    return {
        borderRadius: themeTools.calculateRoundness(20),
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
