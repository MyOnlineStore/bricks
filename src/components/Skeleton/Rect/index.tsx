import React, { SFC } from 'react';
import StyledRectSkeleton from './style';
import { TrblType } from '../../../utility/trbl';

type RectPropsType = {
    height?: string;
    width?: string;
    borderRadius?: string;
    margin?: TrblType;
    padding?: TrblType;
    maxHeight?: string;
    minHeight?: string;
    maxWidth?: string;
    minWidth?: string;
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    position?: 'static' | 'relative' | 'fixed' | 'absolute';
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
};

const Rect: SFC<RectPropsType> = (props): JSX.Element => (
    <StyledRectSkeleton aria-hidden {...props}>
        _
    </StyledRectSkeleton>
);

export default Rect;
export { RectPropsType };
