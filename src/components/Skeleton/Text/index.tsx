import React, { Fragment, SFC } from 'react';
import StyledTextSkeleton from './style';

type TextPropsType = {
    lines: number;
    baseWidth?: number;
};

const Text: SFC<TextPropsType> = ({ lines, baseWidth }): JSX.Element => {
    const generatedLines: Array<JSX.Element> = [];

    if (baseWidth !== undefined) baseWidth = baseWidth < 6 ? 6 : baseWidth;

    for (let i = 0; i < lines; i++) {
        generatedLines.push(
            <Fragment key={i}>
                <StyledTextSkeleton aria-hidden baseWidth={baseWidth}>
                    _
                </StyledTextSkeleton>
                {i !== lines - 1 && <br />}
            </Fragment>,
        );
    }

    return <>{generatedLines}</>;
};

export default Text;
export { TextPropsType };
