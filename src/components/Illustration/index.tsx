import React, { FC } from 'react';
import { StyledIllustration } from './style';

type PropsType = {
    illustration: string;
};

const IllustrationElement: FC<PropsType> = (props): JSX.Element => (
    <StyledIllustration aria-hidden role="img" dangerouslySetInnerHTML={{ __html: props.illustration }} />
);

export default IllustrationElement;
