import React, { StatelessComponent } from 'react';
import { StyledType } from '../../utility/styled';
import StyledText from './style';

type PropsType = StyledType & {
    strong?: boolean;
    descriptive?: boolean;
};

const Text: StatelessComponent<PropsType> = (props): JSX.Element => (
    <StyledText descriptive={props.descriptive} strong={props.strong}>
        {props.children}
    </StyledText>
);

export default Text;
export { PropsType };
