import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type RowThemeType = {
    header: {
        fontWeight: string;
        borderColor: string;
        backgroundColor: string;
    };
    hover: {
        boxShadow: string;
        backgroundColor: string;
    };
};

const StyledRow = styled.tr`
    transition: background-color 100ms;
    text-align: left;
    font-weight: light;
    position: relative;

    &:hover {
        background-color: #f7f8fa;
    }
`;

export default StyledRow;
