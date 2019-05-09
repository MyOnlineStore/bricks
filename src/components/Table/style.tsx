import styled from '../../utility/styled';

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

export default StyledTable;
export { StyledTable, TableThemeType };
