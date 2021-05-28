import React, { FC, useEffect, useState } from 'react';
import { IconType } from './IconType';
import StyledIcon from './style';

type PropsType = {
    color?: string;
    size: 'small' | 'medium' | 'large';
    icon: IconType;
    title?: string;
};

const Icon: FC<PropsType> = (props): JSX.Element => {
    const [icon, setIcon] = useState<string>('');

    useEffect(() => {
        if (props.icon) {
            fetch(`https://cdn.myonlinestore.eu/bricks/icons/${props.icon}.svg`)
                .then(response => {
                    if (response.ok) {
                        return response.text();
                    }
                })
                .then(output => {
                    if (typeof output === 'string') {
                        setIcon(output);
                    }
                })
                .catch(error => {
                    console.debug(error);
                });
        }
    }, [props.icon]);

    return (
        <StyledIcon
            aria-hidden
            role="img"
            elementSize={props.size}
            elementColor={props.color}
            title={props.title}
            dangerouslySetInnerHTML={{ __html: icon }}
        />
    );
};

export default Icon;
export { PropsType };
