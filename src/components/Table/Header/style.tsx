import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../../types/ThemeType';
import styled, { withProps } from '../../../utility/styled';

type PropsType = {
    align: 'flex-start' | 'center' | 'flex-end';
};

const StyledHeader = withProps<PropsType>(styled.th)`
    padding: 12px;
    text-align: ${({ align }): string => {
        switch (align) {
            case 'flex-end':
                return 'right';
            case 'center':
                return 'center';
            default:
                return 'left';
        }
    }};
    background: ${({ theme }): string => theme.Table.cell.default.backgroundColor};
    border-bottom: ${({ theme }): string => `solid 1px ${theme.Table.cell.default.borderColor}`};
`;

export default StyledHeader;
