import React, { FunctionComponent } from 'react';
import { StyledIllustration } from './style';

type PropsType = {
    /** Should be imported from /src/assets/illustrations/* */
    illustration: string;
};

const IllustrationElement: FunctionComponent<PropsType> = (props): JSX.Element => (
    <StyledIllustration aria-hidden role="img" dangerouslySetInnerHTML={{ __html: props.illustration }} />
);

export default IllustrationElement;
