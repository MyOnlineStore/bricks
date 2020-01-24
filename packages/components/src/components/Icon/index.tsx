import React, { FunctionComponent, ReactNode } from 'react';
import StyledIcon from './style';

type PropsType = {
    color?: string;
    size: 'small' | 'medium' | 'large';
    icon: string | ReactNode;
    title?: string;
};

const Icon: FunctionComponent<PropsType> = (props): JSX.Element => {
    return (
        <StyledIcon
            aria-hidden
            role="img"
            dangerouslySetInnerHTML={typeof props.icon === 'string' ? { __html: props.icon } : undefined}
            elementSize={props.size}
            elementColor={props.color}
            title={props.title}
        >
            {typeof props.icon !== 'string' ? props.icon : null}
        </StyledIcon>
    );
};

export default Icon;
export { PropsType };
