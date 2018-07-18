import React, { SFC } from 'react';
import Spacer from '../../Spacer';
import trbl from '../../../utility/trbl';
import StyledOption from './style';

type PropsType = {
    isTargeted: boolean;
    onClick(): void;
};

type StateType = {
    hovering: boolean;
};

const Option: SFC<PropsType> = (props): JSX.Element => {
    return (
        <StyledOption isTargeted={props.isTargeted} onClick={props.onClick}>
            <Spacer offsetType="inner" offset={trbl(6, 18)}>
                {props.children}
            </Spacer>
        </StyledOption>
    );
};

export default Option;
export { PropsType, StateType };
