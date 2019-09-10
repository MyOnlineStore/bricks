import React, { FunctionComponent } from 'react';
import trbl, { TrblType } from '../../utility/trbl';
import { StyledBox } from './style';
import { OffsetShorthandType } from '../../types/OffsetType';

type PropsType = JSX.IntrinsicElements['div'] & {
    as?: keyof JSX.IntrinsicElements;
    justifyContent?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'stretch'
        | 'space-between'
        | 'space-around'
        | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    inline?: boolean;
    height?: string;
    width?: string;
    margin?: TrblType | OffsetShorthandType;
    padding?: TrblType | OffsetShorthandType;
    maxHeight?: string;
    minHeight?: string;
    maxWidth?: string;
    minWidth?: string;
    wrap?: boolean;
    grow?: number;
    shrink?: number;
    basis?: string;
    order?: number;
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    position?: 'static' | 'relative' | 'fixed' | 'absolute';
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    zIndex?: number;
};

const Box: FunctionComponent<PropsType> = props => {
    const {
        order,
        direction,
        wrap,
        height,
        width,
        maxHeight,
        minHeight,
        maxWidth,
        minWidth,
        ref,
        margin,
        padding,
        ...filteredProps
    } = props;

    const shorthandMargin = Array.isArray(margin) ? trbl(...margin) : margin;
    const shorthandPadding = Array.isArray(padding) ? trbl(...padding) : padding;

    const newProps = {
        ...filteredProps,
        flexWrap: wrap,
        elementHeight: height,
        elementWidth: width,
        elementMaxHeight: maxHeight,
        elementMinHeight: minHeight,
        elementMaxWidth: maxWidth,
        elementMinWidth: minWidth,
        flexDirection: direction,
        flexOrder: order,
        margin: shorthandMargin,
        padding: shorthandPadding,
    };

    return (
        <StyledBox as={props.inline ? ('span' as 'span') : ('div' as 'div')} {...newProps}>
            {props.children}
        </StyledBox>
    );
};

export { PropsType };
export default Box;
