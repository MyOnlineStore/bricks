import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled from '../../utility/styled';

type TableThemeType = {
    default: {
        backgroundColor: string;
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
    overflow: auto
    min-width: 100%;
`;

export default StyledTable;
export { StyledTable, TableThemeType };
