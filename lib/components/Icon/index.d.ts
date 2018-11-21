import { SFC } from 'react';
import { StyledType } from '../../utility/_styled';
import { LargeIcons, MediumIcons, SmallIcons } from './types';
declare type BasePropsType = StyledType & {
    color?: string;
};
declare type SmallPropsType = BasePropsType & {
    size: 'small';
    icon: keyof typeof SmallIcons;
};
declare type MediumPropsType = BasePropsType & {
    size: 'medium';
    icon: keyof typeof MediumIcons;
};
declare type LargePropsType = BasePropsType & {
    size: 'large';
    icon: keyof typeof LargeIcons;
};
declare type PropsType = SmallPropsType | MediumPropsType | LargePropsType;
declare const Icon: SFC<PropsType>;
export default Icon;
export { PropsType, SmallIcons, MediumIcons, LargeIcons, BasePropsType, SmallPropsType, MediumPropsType, LargePropsType, };
