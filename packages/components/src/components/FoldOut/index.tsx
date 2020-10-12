import React, { FC } from 'react';
import StyledFoldOut from './style';
import Measure from 'react-measure';

type ContentProps = {
    contentHeight?: number;
    isOpen: PropsType['open'];
    excerptHeight?: PropsType['excerptHeight'];
    backgroundColor?: PropsType['backgroundColor'];
};

type PropsType = {
    open: boolean;
    excerptHeight?: number;
    backgroundColor?: string;
};

const FoldOut: FC<PropsType> = props => (
    <Measure client>
        {({ measureRef, contentRect }) => (
            <StyledFoldOut
                isOpen={props.open}
                contentHeight={contentRect.client?.height}
                excerptHeight={props.excerptHeight}
                backgroundColor={props.backgroundColor}
            >
                <div ref={measureRef}>{props.children}</div>
            </StyledFoldOut>
        )}
    </Measure>
);

export default FoldOut;
export { ContentProps, PropsType };
