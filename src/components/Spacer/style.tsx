import _R from 'react'
import styled, { StyledComponentClass as _S } from 'styled-components';
import { PropsType } from '.';
import _T from '../../types/ThemeType';
import { withProps } from '../../utility/styled';

type SpacerPropsType = {
    offsetType?: PropsType['offsetType'];
    elementOffset: PropsType['offset'];
}

const Spacer = withProps<SpacerPropsType>(styled.div) `
    ${({ offsetType }): string =>
        offsetType === 'inner' ? 'padding' : 'margin'}: ${({
            elementOffset,
        }): string =>
            `${elementOffset.top} ${elementOffset.right} ${elementOffset.bottom} ${elementOffset.left}`};
`;

export default Spacer;
