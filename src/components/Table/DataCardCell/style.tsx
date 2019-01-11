import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../../types/ThemeType';
import styled, { withProps } from '../../../utility/_styled';

type CellPropsType = {
    align: 'start' | 'center' | 'end';
    elementWidth?: string;
};

enum Alignments {
    'start' = 'left',
    'center' = 'center',
    'end' = 'right',
}

const StyledCell = withProps<CellPropsType>(styled.tr)`
    text-align: ${({ align }): string => Alignments[align]}};
    vertical-align: top;

    .value {
        padding-left: 20px;
    }

    &:focus {
        outline: none;
    }
`;

export default StyledCell;
export { CellPropsType };
