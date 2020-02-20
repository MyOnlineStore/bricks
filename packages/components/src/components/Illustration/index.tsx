import React, { FunctionComponent, ReactNode } from 'react';
import { StyledIllustration } from './style';

type PropsType = {
    illustration: ReactNode;
};

const IllustrationElement: FunctionComponent<PropsType> = props => (
    <StyledIllustration aria-hidden role="img">
        {props.illustration}
    </StyledIllustration>
);

export default IllustrationElement;
