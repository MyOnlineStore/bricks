import React, { StatelessComponent } from 'react';
import { OffsetType } from '../../types/OffsetType';
import { StyledType } from '../../utility/styled';

type PropsType = StyledType & {
    vertical?:'top'|'bottom'|'center'|'stretch';
    horizontal?:'left'|'right'|'center'|'stretch';
    wrap?:boolean;
    bleed?:Array<OffsetType>;
};

const Box:StatelessComponent<PropsType> = (props):JSX.Element => {
    return <div className={props.className}>{props.children}</div>;
};

export { PropsType };
export default Box;
