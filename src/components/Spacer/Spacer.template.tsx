import React, { StatelessComponent } from 'react';
import { StyledType } from '../../utility/styled';
import { TrblType } from '../../utility/trbl';

type PropsType = StyledType & {
    offset: TrblType;
    offsetType?: 'inner' | 'outer';
};

const Spacer: StatelessComponent<PropsType> = (props): JSX.Element => {
    return <div className={props.className}>{props.children}</div>;
};

export { PropsType };
export default Spacer;
