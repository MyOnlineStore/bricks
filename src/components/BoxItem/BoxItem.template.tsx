import React, { StatelessComponent } from 'react';
import { OffsetType } from '../../types/OffsetType';
import { StyledType } from '../../utility/styled';

type PropsType = StyledType & {
    size:string;
    grow?:boolean;
    shrink?:boolean;
    gutter?:Array<OffsetType>;
    vertical?:'top'|'bottom'|'center'|'stretch';
    horizontal?:'left'|'right'|'center'|'stretch';
};

const BoxItem:StatelessComponent<PropsType> = (props):JSX.Element => {
    return <div className={props.className}>{props.children}</div>;
};

export { PropsType };
export default BoxItem;
