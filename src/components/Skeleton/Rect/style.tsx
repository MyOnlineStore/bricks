import _R from 'react';
import { StyledComponentClass as _S, keyframes } from 'styled-components';
import _T from '../../../types/ThemeType';
import styled, { withProps } from '../../../utility/_styled';

type RectPropsType = {
    width?: string;
    height?: string;
};

const wipe = keyframes`
    from {
        transform: translate(-100%) rotate(5deg);
    }

    to {
        transform: translate(175%) rotate(5deg);
    }
`;

const StyledRectSkeleton = withProps<RectPropsType>(styled.div)`
    position: relative;
    overflow: hidden;
    color: transparent;
    user-select: none;
    color: transparent;
    background-size: 200px 100%;
    width: ${({ width }): string => (width ? width : '100%')};
    height: ${({ height }): string => (height ? height : '100%')};
    border-radius: ${({ theme }): string => theme.Skeleton.common.borderRadius};
    background-color: ${({ theme }): string => theme.Skeleton.common.backgroundColor};

    &:after {
        top: -50%;
        left: -25%;
        width: 75%;
        content: '';
        height: 200%;
        position: absolute;
        transform: rotate(100deg);
        animation: 3s infinite ${wipe};
        background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.02) 50%, rgba(0, 0, 0, 0) 100%);
    }
`;

export default StyledRectSkeleton;
