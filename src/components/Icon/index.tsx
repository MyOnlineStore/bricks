import React, { StatelessComponent } from 'react';
import { StyledType } from '../../utility/styled';
import StyledIcon from './style';
import { LargeIcons, MediumIcons, SmallIcons } from './types';

type BasePropsType = StyledType & {
    color?: string;
};

type SmallPropsType = BasePropsType & {
    size: 'small';
    icon: keyof typeof SmallIcons;
};

type MediumPropsType = BasePropsType & {
    size: 'medium';
    icon: keyof typeof MediumIcons;
};

type LargePropsType = BasePropsType & {
    size: 'large';
    icon: keyof typeof LargeIcons;
};

type PropsType = SmallPropsType | MediumPropsType | LargePropsType;

const Icon: StatelessComponent<PropsType> = (props): JSX.Element => {
    const icon = ((size: string) => {
        switch (size) {
            case 'large':
                return LargeIcons[props.icon as any];
            case 'medium':
                return MediumIcons[props.icon as any];
            default:
                return SmallIcons[props.icon as any];
        }
    })(props.size);

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
export {
    PropsType,
    SmallIcons,
    MediumIcons,
    LargeIcons,
    BasePropsType,
    SmallPropsType,
    MediumPropsType,
    LargePropsType,
};
