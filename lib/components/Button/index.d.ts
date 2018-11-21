import { Component } from 'react';
import { MediumPropsType } from '../Icon';
import StyledCta from './styleCta';
import StyledFlat from './styleFlat';
declare type PropsType = {
    className?: string;
    compact?: boolean;
    title: string;
    variant: 'primary' | 'destructive' | 'warning' | 'secondary' | 'plain';
    target?: HTMLAnchorElement['target'];
    href?: string;
    disabled?: boolean;
    icon?: MediumPropsType['icon'];
    iconAlign?: 'right' | 'left';
    id?: string;
    onClick?(): void;
};
declare class Button extends Component<PropsType> {
    static Cta: typeof StyledCta;
    static Flat: typeof StyledFlat;
    render(): JSX.Element;
}
export default Button;
export { PropsType };
