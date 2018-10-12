import React, { Component } from 'react';
import { MediumPropsType } from '../Icon';
import withCtaStyling, { withCtaStylingType } from './WithCta';

type PropsType = {
    className?: string;
    compact?: boolean;
    title: string;
    variant: 'primary' | 'destructive' | 'warning' | 'secondary' | 'plain';
    target?: HTMLAnchorElement['target'];
    href?: string;
    disabled?: boolean;
    flat?: boolean;
    icon?: MediumPropsType['icon'];
    iconAlign?: 'right' | 'left';
    id?: string;
    action?(): void;
};

class Button2 extends Component<PropsType> {
    public static Cta: withCtaStylingType = withCtaStyling();

    public render(): JSX.Element {
        return <Button2 variant={this.props.variant} title="BareButtonWithCta" />;
    }
}

export default Button2;
export { PropsType };
