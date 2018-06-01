import React, { StatelessComponent } from 'react';
import { TrblType } from '../../utility/trbl';
import StyledBox from './style';

type PropsType = {
    justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
    alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around';
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    height?: string;
    margin?: TrblType;
    wrap?: boolean;
    grow?: number;
    shrink?: number;
    basis?: string;
    order?: number;
    alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch';
};

const Box: StatelessComponent<PropsType> = (props): JSX.Element => {
    const { order, direction, wrap, height, ...leftOver } = props;

    const newProps = {
        ...leftOver,
        flexWrap: wrap,
        elementHeight: height,
        flexDirection: direction,
        flexOrder: order,
    };

    return <StyledBox {...newProps}>{props.children}</StyledBox>;
};

export { PropsType };
export default Box;
