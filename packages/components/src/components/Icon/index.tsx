import React, { FunctionComponent, ReactNode } from 'react';
import StyledIcon from './style';

type PropsType = {
    color?: string;
    size: 'small' | 'medium' | 'large';
    icon: ReactNode;
    title?: string;
};

const Icon: FunctionComponent<PropsType> = (props): JSX.Element => {
    return (
        <StyledIcon aria-hidden role="img" elementSize={props.size} elementColor={props.color} title={props.title}>
            {props.icon}
        </StyledIcon>
    );
};

export default Icon;
export { PropsType };
