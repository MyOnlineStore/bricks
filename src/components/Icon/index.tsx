import React, { StatelessComponent } from 'react';
import { StyledType } from '../../utility/styled';
import StyledIcon from './style';
import { LargeIcons, SmallIcons } from './types';

type BasePropsType = StyledType & {
    color?: string;
};

type SmallPropsType = BasePropsType & {
    size: 'small';
    icon: keyof typeof SmallIcons;
};

type LargePropsType = BasePropsType & {
    size: 'large';
    icon: keyof typeof LargeIcons;
};

type PropsType = SmallPropsType | LargePropsType;

const Icon: StatelessComponent<PropsType> = (props): JSX.Element => {
    const icon = props.size === 'large' ? LargeIcons[props.icon] : SmallIcons[props.icon];

    /* tslint:disable */
    return (
        <StyledIcon
            aria-hidden
            role="img"
            dangerouslySetInnerHTML={{ __html: icon as any }}
            elementSize={props.size}
            elementColor={props.color}
        />
    );
    /* tslint:enable */
};

export default Icon;
export { PropsType, SmallIcons, LargeIcons, BasePropsType, SmallPropsType, LargePropsType };
