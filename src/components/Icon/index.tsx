import React, { FunctionComponent } from 'react';
import StyledIcon from './style';

type PropsType = {
    color?: string;
    size: 'small' | 'medium' | 'large';
    icon: string;
    title?: string;
};

const Icon: FunctionComponent<PropsType> = (props): JSX.Element => {
    return (
        <StyledIcon
            aria-hidden
            role="img"
            dangerouslySetInnerHTML={{ __html: props.icon }}
            elementSize={props.size}
            elementColor={props.color}
            title={props.title}
        />
    );
};

export default Icon;
export { PropsType };
