import React, { FC } from 'react';
import StyledRectSkeleton from './style';

type PropsType = {
    width?: string;
    height?: string;
};

const Rect: FC<PropsType> = (props): JSX.Element => (
    <StyledRectSkeleton aria-hidden {...props}>
        _
    </StyledRectSkeleton>
);

export default Rect;
export { PropsType };
