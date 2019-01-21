import React, { FunctionComponent } from 'react';
import { StyledIllustration } from './style';
import { Illustrations } from './types';

type IllustrationPropsType = {
    illustration: keyof typeof Illustrations;
};

const IllustrationElement: FunctionComponent<IllustrationPropsType> = (props): JSX.Element => (
    // tslint:disable:no-any
    <StyledIllustration
        aria-hidden
        role="img"
        dangerouslySetInnerHTML={{ __html: Illustrations[props.illustration] as any }}
    />
    // tslint:enable
);

export default IllustrationElement;
export { IllustrationPropsType, Illustrations };
