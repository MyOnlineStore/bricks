import React, { StatelessComponent } from 'react';
import { StyledType } from '../../utility/styled';
import { TrblType } from '../../utility/trbl';

type PropsType = StyledType & {
    justifyContent?:'flex-start'|'flex-end'|'center'|'stretch'|'space-between'|'space-around'|'space-evenly';
    alignItems?:'flex-start'|'flex-end'|'center'|'stretch';
    alignContent?:'flex-start'|'flex-end'|'center'|'stretch'|'space-between'|'space-around';
    direction?:'row'|'row-reverse'|'column'|'column-reverse';
    height?:string;
    margin?:TrblType;
    wrap?:boolean;
    grow?:number;
    shrink?:number;
    basis?:string;
    order?:number;
    alignSelf?:'auto'|'flex-start'|'flex-end'|'center'|'baseline'|'stretch';
};

const Box:StatelessComponent<PropsType> = (props):JSX.Element => {
    return <div className={props.className}>{props.children}</div>;
};

export { PropsType };
export default Box;
