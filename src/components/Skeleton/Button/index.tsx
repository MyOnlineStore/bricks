import React, { SFC } from 'react';
import StyledButtonSkeleton from './style';

type ButtonPropsType = {
    width?: number;
};

const Button: SFC<ButtonPropsType> = ({ width }): JSX.Element => (
    <StyledButtonSkeleton aria-hidden width={width}>
        _
    </StyledButtonSkeleton>
);

export default Button;
export { ButtonPropsType };
