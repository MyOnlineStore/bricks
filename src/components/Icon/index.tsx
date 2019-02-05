import React, { FunctionComponent } from 'react';
import StyledIcon from './style';

type PropsType = {
    color?: string;
    size: 'small' | 'medium' | 'large';
    icon: string;
};

const Icon: FunctionComponent<PropsType> = (props): JSX.Element => {
    return (
        <StyledIcon
            aria-hidden
            role="img"
            // tslint:disable-next-line
            dangerouslySetInnerHTML={{ __html: props.icon as any }}
            elementSize={props.size}
            elementColor={props.color}
        />
    );
};

export default Icon;
export { PropsType };
