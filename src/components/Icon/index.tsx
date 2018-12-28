import React, { FunctionComponent } from 'react';
import { StyledType } from '../../utility/_styled';
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

const Icon: FunctionComponent<PropsType> = (props): JSX.Element => {
    const icon = ((props: PropsType): SmallIcons | MediumIcons | LargeIcons => {
        switch (props.size) {
            case 'large':
                return LargeIcons[props.icon];
            case 'medium':
                return MediumIcons[props.icon];
            default:
                return SmallIcons[props.icon];
        }
    })(props);

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
