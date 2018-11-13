import React, { SFC } from 'react';
import { StyledType } from '../../utility/_styled';
import { StyledSpan, StyledParagraph } from './style';
import SeverityType from '../../types/SeverityType';

type PropsType = StyledType & {
    variant?: 'small' | 'regular' | 'large' | 'extraLarge' | 'display';
    severity?: SeverityType;
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
