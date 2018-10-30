import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import { PropsType } from '../../Box';
import _T from '../../../types/ThemeType';
import styled, { withProps } from '../../../utility/styled';
import { TrblType } from '../../../utility/trbl';

type RectSkeletonPropsType = {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    margin?: TrblType;
    borderRadius?: string;
    height?: PropsType['height'];
    width?: PropsType['width'];
    maxHeight?: PropsType['height'];
    minHeight?: PropsType['minHeight'];
    maxWidth?: PropsType['maxWidth'];
    minWidth?: PropsType['minWidth'];
    position?: 'static' | 'relative' | 'fixed' | 'absolute';
};

const StyledRectSkeleton = withProps<RectSkeletonPropsType, HTMLDivElement>(styled.div)`

    @keyframes wipe {
        0% {
             transform: translate(-100%) rotate(5deg);
            }

        100% {
            transform: translate(175%) rotate(5deg);
        }
    }

    user-select: none;
    color: transparent;
    background-color: ${({ theme }): string => theme.Skeleton.common.backgroundColor};
    background-size: 200px 100%;
    border-radius: ${({ theme }): string => theme.Skeleton.common.borderRadius};
    position: relative;
    overflow: hidden;

    &:after {
        animation: 3s infinite wipe;
        content: "";
        height: 200%;
        width: 75%;
        top: -50%;
        left: -25%;
        transform: rotate(100deg);
        background: linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0, 0, 0, 0.02) 50%,rgba(0,0,0,0) 100%);
        position: absolute;
    }

    display: flex;
    color: transparent;
    ${({ width }): string => (width !== undefined ? `width: ${width}` : '')};
    ${({ height }): string => (height !== undefined ? `height: ${height}` : '')};
    max-width: ${({ maxWidth }): string => (maxWidth !== undefined ? maxWidth : '')};
    min-width: ${({ minWidth }): string => (minWidth !== undefined ? minWidth : '')};
    max-height: ${({ maxHeight }): string => (maxHeight !== undefined ? maxHeight : '')};
    min-height: ${({ minHeight }): string => (minHeight !== undefined ? minHeight : '')};
    ${({ borderRadius }): string => (borderRadius !== undefined ? `border-radius: ${borderRadius}` : '')};
    ${({ position }): string => (position !== undefined ? `position: ${position}` : '')};
    ${({ top }): string => (top !== undefined ? `top: ${top}` : '')};
    ${({ right }): string => (right !== undefined ? `right: ${right}` : '')};
    ${({ bottom }): string => (bottom !== undefined ? `bottom: ${bottom}` : '')};
    ${({ left }): string => (left !== undefined ? `left: ${left}` : '')};
    ${({ margin }): string =>
        margin !== undefined ? `margin: ${margin.top} ${margin.right} ${margin.bottom} ${margin.left}` : ''};
`;
export default StyledRectSkeleton;
export { RectSkeletonPropsType };
