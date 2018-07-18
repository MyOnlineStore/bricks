import React, { StatelessComponent } from 'react';
import { TrblType } from '../../utility/trbl';
import { StyledDiv, StyledSpan } from './style';

type PropsType = JSX.IntrinsicElements['div'] & {
    justifyContent?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'stretch'
        | 'space-between'
        | 'space-around'
        | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    inline?: boolean;
    height?: string;
    margin?: TrblType;
    maxHeight?: string;
    wrap?: boolean;
    grow?: number;
    shrink?: number;
    basis?: string;
    order?: number;
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
};

const Box: StatelessComponent<PropsType> = (props): JSX.Element => {
    const { order, direction, wrap, height, maxHeight, ref, ...filteredProps } = props;

    const newProps = {
        ...filteredProps,
        flexWrap: wrap,
        elementHeight: height,
        elementMaxHeight: maxHeight,
        flexDirection: direction,
        flexOrder: order,
    };

    return props.inline ? (
        <StyledSpan {...newProps}>{props.children}</StyledSpan>
    ) : (
        <StyledDiv {...newProps}>{props.children}</StyledDiv>
    );
};

export { PropsType };
export default Box;
