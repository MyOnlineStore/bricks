import React, { SFC } from 'react';
import { StyledType } from '../../utility/styled';
import { StyledIllustration } from './style';
import { Illustrations } from './types';

type IllustrationPropsType = StyledType & {
    illustration: keyof typeof Illustrations;
};

const IllustrationElement: SFC<IllustrationPropsType> = (props): JSX.Element => {
    const illustration = Illustrations[props.illustration];

    /* tslint:disable */
    return <StyledIllustration aria-hidden role="img" dangerouslySetInnerHTML={{ __html: illustration as any }} />;
    /* tslint:enable */
};

export default IllustrationElement;
export { IllustrationPropsType, Illustrations };
