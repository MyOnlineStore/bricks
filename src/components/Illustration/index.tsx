import React, { FunctionComponent } from 'react';
import { StyledIllustration } from './style';

type IllustrationPropsType = {
    illustration: string;
};

const IllustrationElement: FunctionComponent<IllustrationPropsType> = (props): JSX.Element => (
    // tslint:disable:no-any
    <StyledIllustration aria-hidden role="img" dangerouslySetInnerHTML={{ __html: props.illustration }} />
    // tslint:enable
);

export default IllustrationElement;
export { IllustrationPropsType };
