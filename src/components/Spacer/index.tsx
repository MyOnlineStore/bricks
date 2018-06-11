import React, { StatelessComponent } from 'react';
import { StyledType } from '../../utility/styled';
import { TrblType } from '../../utility/trbl';
import StyledSpacer from './style'

type PropsType = StyledType & {
    offset: TrblType;
    offsetType?: 'inner' | 'outer';
};

const Spacer: StatelessComponent<PropsType> = (props): JSX.Element => {
    return <StyledSpacer elementOffset={props.offset} offsetType={props.offsetType}>{props.children}</StyledSpacer>;
};

export { PropsType };
export default Spacer;
