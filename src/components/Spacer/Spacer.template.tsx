import React, { StatelessComponent } from 'react';

export type OffsetType = 0 | 6 | 9 | 12 | 24 | 36 | 48;

type PropsType = {
    className?:string;
    top?:OffsetType;
    right?:OffsetType;
    bottom?:OffsetType;
    left?:OffsetType;
    offsetType?:'inner' | 'outer';
};

const Spacer:StatelessComponent<PropsType> = (props):JSX.Element => {
    return <div className={props.className}>{props.children}</div>;
};

export default Spacer;
