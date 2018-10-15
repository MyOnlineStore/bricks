import React, { Component } from 'react';
import { MediumPropsType } from '../Icon';
import withCtaStyling, { withCtaStylingType } from './WithCta';
import withPlainStyling, { withPlainStylingType } from './WithPlain';
import withDefaultStyling, { withDefaultStylingType } from './WithDefault';

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
    public static Cta: withCtaStylingType = withCtaStyling();
    public static Plain: withPlainStylingType = withPlainStyling();
    public static Default: withDefaultStylingType = withDefaultStyling();

    public render(): JSX.Element {
        return <Button.Default {...this.props} />;
    }
}

export default Button;
export { PropsType };
