import React, { SFC } from 'react';
import Box from '../../Box';
import trbl from '../../../utility/trbl';
import StyledOption from './style';

type PropsType = {
    isSelected: boolean;
    onClick(): void;
};

type StateType = {
    hovering: boolean;
};

const Option: SFC<PropsType> = (props): JSX.Element => {
    /* tslint:disable:no-invalid-this */
    const onClick = props.onClick.bind(this);
    /* tslint:enable:no-invalid-this */

    return (
        <StyledOption isSelected={props.isSelected} onClick={onClick}>
            <Box padding={trbl(12, 9)}>{props.children}</Box>
        </StyledOption>
    );
};

export default Option;
export { PropsType, StateType };
