import styled from '../../utility/styled';
import ThemeTools from '../../themes/ExperimentalCustomTheme/ThemeTools';
import chroma from 'chroma-js';

type TableThemeType = {
    default: {
        backgroundColor: string;
    };
    card: {
        boxShadow: string;
        backgroundColor: string;
        borderRadius: string;
        spacing: string;
    };
    row: {
        default: {
            backgroundColor: string;
            borderColor: string;
        };
        hover: {
            backgroundColor: string;
        };

        focus: {
            borderColor: string;
        };
        dragging: {
            boxShadow: string;
        };
    };
    cell: {
        default: {
            backgroundColor: string;
            borderColor: string;
        };
        header: {
            backgroundColor: string;
        };
    };
};

const StyledTable = styled.table`
    width: 100%;
    border-spacing: 0;
    border-collapse: separate;
    background-color: ${({ theme }): string => theme.Table.default.backgroundColor};
    overflow: auto;
    min-width: 100%;

    & tr:last-of-type td {
        border-bottom: 1px solid transparent;
    }
`;

const composeTableTheme = (themeTools: ThemeTools): TableThemeType => {
    const { colors } = themeTools.themeSettings;

    return {
        default: {
            backgroundColor: colors.background,
        },
        card: {
            boxShadow: '0 2px 10px 0 rgba(33, 37, 43, .15)',
            backgroundColor: colors.contrastBackground,
            borderRadius: themeTools.calculateRoundness(20),
            spacing: '24px',
        },
        cell: {
            default: {
                backgroundColor: colors.background,
                borderColor: colors.silver.darker4,
            },
            header: {
                backgroundColor: colors.silver.darker1,
            },
        },
        row: {
            default: {
                backgroundColor: colors.background,
                borderColor: `${chroma(colors.primary.base).alpha(0)}`,
            },
            hover: {
                backgroundColor: colors.contrastBackground,
            },
            focus: {
                borderColor: `${chroma(colors.primary.base).alpha(0.4)}`,
            },
            dragging: {
                boxShadow: `0 6px 48px 0 ${chroma(colors.grey.darker1).alpha(0.3)}`,
            },
        },
    };
};

export default StyledTable;
export { StyledTable, TableThemeType, composeTableTheme };
