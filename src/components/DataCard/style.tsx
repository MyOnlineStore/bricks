import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled from '../../utility/_styled';

type DataCardThemeType = {
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

const StyledDataCard = styled.datacard`
    width: 100%;
    border-spacing: 0;
    border-collapse: separate;
    overflow: auto;
    min-width: 100%;

    & tr:last-of-type td {
        border-bottom: 1px solid transparent;
    }
`;

export default StyledDataCard;
export { StyledDataCard, DataCardThemeType };
