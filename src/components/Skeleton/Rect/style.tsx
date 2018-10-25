import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import { PropsType } from '../../Box';
import _T from '../../../types/ThemeType';
import styled, { withProps } from '../../../utility/styled';
import { TrblType } from '../../../utility/trbl';
import getSkeletonStyles from '../style';

type ReactSkeletonPropsType = {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    grow?: number;
    basis?: string;
    shrink?: number;
    margin?: TrblType;
    borderRadius?: string;
    height?: PropsType['height'];
    width?: PropsType['width'];
    maxHeight?: PropsType['height'];
    minHeight?: PropsType['minHeight'];
    maxWidth?: PropsType['maxWidth'];
    minWidth?: PropsType['minWidth'];
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    position?: 'static' | 'relative' | 'fixed' | 'absolute';
};

const StyledRectSkeleton = withProps<ReactSkeletonPropsType, HTMLDivElement>(styled.div)`
    ${({ theme }): string => getSkeletonStyles(theme)}
    display: flex;
    color: transparent;
    flex-grow: ${({ grow }): number => (grow ? grow : 0)};
    flex-basis: ${({ basis }): string => (basis ? basis : 'auto')};
    ${({ width }): string => (width !== undefined ? `width: ${width}` : '')};
    ${({ height }): string => (height !== undefined ? `height: ${height}` : '')};
    flex-shrink: ${({ shrink }): number => (shrink !== undefined ? shrink : 1)};
    max-width: ${({ maxWidth }): string => (maxWidth !== undefined ? maxWidth : '')};
    min-width: ${({ minWidth }): string => (minWidth !== undefined ? minWidth : '')};
    max-height: ${({ maxHeight }): string => (maxHeight !== undefined ? maxHeight : '')};
    min-height: ${({ minHeight }): string => (minHeight !== undefined ? minHeight : '')};
    ${({ alignSelf }): string => (alignSelf ? `align-self: ${alignSelf}` : '')};
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
export { ReactSkeletonPropsType };
