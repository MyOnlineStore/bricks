import React, { StatelessComponent } from 'react';
import { StyledType } from '../../utility/styled';
import StyledText from './style';

type PropsType = StyledType & {
    compact?: boolean;
    descriptive?: boolean;
    strong?: boolean;
};

const Text: StatelessComponent<PropsType> = (props): JSX.Element => (
    <StyledText descriptive={props.descriptive} strong={props.strong} compact={props.compact}>
        {props.children}
    </StyledText>
);

export default Text;
export { PropsType };
