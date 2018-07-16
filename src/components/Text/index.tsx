import React, { StatelessComponent } from 'react';
import { StyledType } from '../../utility/styled';
import StyledText from './style';

type PropsType = StyledType & {
    compact?: boolean;
    descriptive?: boolean;
    strong?: boolean;
    variant?: 'small' | 'base' | 'large';
    textAlign?: 'left' | 'right' | 'center' | 'justify';
};

const Text: StatelessComponent<PropsType> = (props): JSX.Element => (
    <StyledText variant={props.variant} descriptive={props.descriptive} strong={props.strong} compact={props.compact} textAlign={props.textAlign}>
        {props.children}
    </StyledText>
);

export default Text;
export { PropsType };
