import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../../types/ThemeType';
import styled from '../../../utility/styled';

const StyledHeader = styled.th`
    padding: 12px;
    background: ${({ theme }): string => theme.Table.cell.default.backgroundColor};
    border-bottom: ${({ theme }): string => `solid 1px ${theme.Table.cell.default.borderColor}`};
`;

export default StyledHeader;
