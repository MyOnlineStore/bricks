import _R from 'react';
import { StyledComponentClass as _S, keyframes } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';
import { PropsType } from '.';

const rotate = keyframes`
    0%{
        transform:rotate(0)
    }
    100% {
        transform:rotate(360deg)
    }
`;

const circleAnimation = keyframes`
    0% {
        stroke-dashoffset:600;
    }
    100% {
        stroke-dashoffset:0;
    }
`;

const StyledSpinner = styled.div`
    width: 100%;
    height: 100%;
`;

const SpinnerSvg = withProps<PropsType>(styled.svg)`

    stroke: ${({ color }): string => color};
    fill: transparent;
    stroke-dashoffset: 600;
    stroke-dasharray: 300;
    stroke-width: 12;
    stroke-miterlimit: 10;
    stroke-linecap: round;
    animation: ${rotate} 2s linear infinite;

`;

const SpinnerCircle = styled.circle`
    animation: ${circleAnimation} 1.6s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite;
`;

export default StyledSpinner;
export { PropsType, SpinnerSvg, SpinnerCircle };
