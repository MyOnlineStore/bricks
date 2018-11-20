import { SFC } from 'react';
import { MediumPropsType } from '../../Icon';
declare type PropsType = {
    className?: string;
    title: string;
    target?: HTMLAnchorElement['target'];
    href?: string;
    disabled?: boolean;
    icon?: MediumPropsType['icon'];
    iconAlign?: 'right' | 'left';
    id?: string;
    onClick?(): void;
};
declare const BareButton: SFC<PropsType>;
export default BareButton;
export { PropsType };
