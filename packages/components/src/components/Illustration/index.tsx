import React, { FunctionComponent, ComponentType } from 'react';
import { StyledIllustration } from './style';

type PropsType = {
    illustration: string | ComponentType;
};

const IllustrationElement: FunctionComponent<PropsType> = (props): JSX.Element => (
    <StyledIllustration
        aria-hidden
        role="img"
        dangerouslySetInnerHTML={typeof props.illustration === 'string' ? { __html: props.illustration } : undefined}
    >
        {typeof props.illustration === 'string' ? props.illustration : null}
    </StyledIllustration>
);

export default IllustrationElement;
