import React, { StatelessComponent } from 'react';
import { TrblType } from '../../utility/trbl';
import StyledSpacer from './style';

type PropsType = JSX.IntrinsicElements['div'] & {
    offset: TrblType;
    offsetType?: 'inner' | 'outer';
};

const Spacer: StatelessComponent<PropsType> = (props): JSX.Element => {
    const { offset, offsetType, ref, ...filteredProps } = props;

    return (
        <StyledSpacer {...filteredProps} elementOffset={offset} offsetType={offsetType}>
            {props.children}
        </StyledSpacer>
    );
};

export { PropsType };
export default Spacer;
