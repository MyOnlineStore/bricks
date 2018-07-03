import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type IconPropsType = {
    elementSize: 'small' | 'medium' | 'large';
    elementColor?: string;
};

const StyledIcon = withProps<IconPropsType>(styled.span)`
    display: inline-block;
    vertical-align: middle;
    height: ${({ elementSize }): string =>
        elementSize === 'large' ? '60px' : elementSize === 'medium' ? '18px' : '12px'};
    width: ${({ elementSize }): string =>
        elementSize === 'large' ? '60px' : elementSize === 'medium' ? '18px' : '12px'};

    svg {
        max-height: 100%;
        max-width: 100%;
        fill: ${({ elementColor }): string => (elementColor !== undefined ? elementColor : 'currentColor')};
    }
`;

export default StyledIcon;
