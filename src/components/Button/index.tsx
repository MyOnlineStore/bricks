import React, { Component } from 'react';
import { MediumPropsType } from '../Icon';
import StyledCta, { WithStyledCtaType } from './styleCta';
import StyledPlain, { WithStyledPlainType } from './stylePlain';
import StyledDefault from './styleDefault';

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
    onClick?(): void;
};

class Button extends Component<PropsType> {
    public static Cta: WithStyledCtaType = StyledCta;
    public static Plain: WithStyledPlainType = StyledPlain;

    public render(): JSX.Element {
        return <StyledDefault {...this.props} />;
    }
}

export default Button;
export { PropsType };
