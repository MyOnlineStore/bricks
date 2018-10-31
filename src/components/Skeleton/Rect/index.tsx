import React, { SFC } from 'react';
import StyledRectSkeleton from './style';
import { PropsType as BoxPropsType } from '../../Box';

type PropsType = BoxPropsType & {
    borderRadius?: string;
};

const Rect: SFC<PropsType> = (props): JSX.Element => {
    const { ref, wrap, ...filteredProps } = props;

    return (
        <StyledRectSkeleton {...filteredProps} borderRadius={props.borderRadius} position={props.position}>
            _
        </StyledRectSkeleton>
    );
};

export default Rect;
export { PropsType };
