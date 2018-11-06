import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../../types/ThemeType';
import styled, { withProps } from '../../../utility/styled';

type PropsType = {
    align: 'start' | 'center' | 'end';
};

const StyledHeader = withProps<PropsType>(styled.th)`
    padding: 12px;
    text-align: ${({ align }): string => align}};
    background: ${({ theme }): string => theme.Table.cell.default.backgroundColor};
    border-bottom: ${({ theme }): string => `solid 1px ${theme.Table.cell.default.borderColor}`};
`;

export default StyledHeader;
