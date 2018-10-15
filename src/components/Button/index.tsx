import React, { Component } from 'react';
import { MediumPropsType } from '../Icon';
import StyledCta from './WithCta/style';
import StyledPlain from './WithPlain/style';
import StyledDefault from './WithDefault/style';

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
    public static Cta: any = StyledCta;
    public static Plain: any = StyledPlain;
    public static Default: any = StyledDefault;

    public render(): JSX.Element {
        return <Button.Default {...this.props} />;
    }
}

export default Button;
export { PropsType };
