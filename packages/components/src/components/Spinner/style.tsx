import styled, { keyframes } from '../../utility/styled';

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

const SpinnerSvg = styled.svg<{ color?: string }>`
    width: 100%;
    height: 100%;
    stroke: ${({ color }): string => (color ? color : 'currentColor')};
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
export { SpinnerSvg, SpinnerCircle };
