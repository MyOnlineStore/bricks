import React, { Component } from 'react';
import { MediumPropsType } from '../Icon';
import StyledCta, { WithStyledCtaType } from './styleCta';
import StyledPlain, { WithStyledPlainType } from './stylePlain';
import StyledDefault, { WithStyledDefaultType } from './styleDefault';

type PropsType = {
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
    action?(): void;
};

class Button extends Component<PropsType> {
    public static Cta: WithStyledCtaType = StyledCta;
    public static Plain: WithStyledPlainType = StyledPlain;
    public static Default: WithStyledDefaultType = StyledDefault;

    public render(): JSX.Element {
        return <Button.Default {...this.props} />;
    }
}

export default Button;
export { PropsType };
