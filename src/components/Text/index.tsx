import React, { SFC } from 'react';
import { StyledType } from '../../utility/styled';
import { StyledSpan, StyledParagraph } from './style';

type PropsType = StyledType & {
    variant?: 'small' | 'regular' | 'large' | 'XL' | 'display';
    severity?: 'default' | 'error' | 'success' | 'info' | 'warning';
    textAlign?: 'left' | 'right' | 'center' | 'justify';
    compact?: boolean;
    strong?: boolean;
    inline?: boolean;
};

const Text: SFC<PropsType> = (props): JSX.Element => {
    const Element = props.inline !== undefined && props.inline ? StyledSpan : StyledParagraph;

    return (
        <Element
            variant={props.variant}
            severity={props.severity}
            textAlign={props.textAlign}
            compact={props.compact}
            strong={props.strong}
            inline={props.inline}
        >
            {props.children}
        </Element>
    );
};

export default Text;
export { PropsType };
