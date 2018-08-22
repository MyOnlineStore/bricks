import React, { SFC, MouseEvent } from 'react';
import Box from '../../Box';
import trbl from '../../../utility/trbl';
import StyledOption from './style';

type PropsType = {
    isTargeted: boolean;
    onClick(event: MouseEvent<HTMLDivElement>): void;
    onMouseEnter(): void;
};

type StateType = {
    hovering: boolean;
};

const Option: SFC<PropsType> = (props): JSX.Element => {
    /* tslint:disable:no-invalid-this */
    const onClick = props.onClick.bind(this);
    const mouseEnter = props.onMouseEnter.bind(this);
    /* tslint:enable:no-invalid-this */

    return (
        <StyledOption isTargeted={props.isTargeted} onClick={onClick} onMouseEnter={mouseEnter}>
            <Box padding={trbl(6, 18)}>{props.children}</Box>
        </StyledOption>
    );
};

export default Option;
export { PropsType, StateType };
