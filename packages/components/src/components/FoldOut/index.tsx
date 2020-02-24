import React, { FC } from 'react';
import StyledFoldOut from './style';
import Measure from 'react-measure';

type ContentProps = {
    contentHeight?: number;
    isOpen: PropsType['open'];
};

type PropsType = {
    open: boolean;
};

const FoldOut: FC<PropsType> = props => (
    <Measure client>
        {({ measureRef, contentRect }) => (
            <StyledFoldOut
                isOpen={props.open}
                contentHeight={contentRect.client ? contentRect.client.height : undefined}
            >
                <div ref={measureRef}>{props.children}</div>
            </StyledFoldOut>
        )}
    </Measure>
);

export default FoldOut;
export { ContentProps, PropsType };
