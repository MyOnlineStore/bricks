import React, { Children, StatelessComponent } from 'react';
import StyledButton, { StyledAnchor } from './style';

type PropsType = {
    className?: string;
    compact?: boolean;
    title: string;
    variant: 'primary' | 'destructive' | 'warning' | 'secondary' | 'flat' | 'plain';
    target?: HTMLAnchorElement['target'];
    href?: string;
    disabled?: boolean;
    action?(): void;
};

const Button: StatelessComponent<PropsType> = (props): JSX.Element => {
    const isLink = props.href !== undefined;

    const clickAction = (): void => {
        if (props.action !== undefined && props.disabled !== true) {
            props.action();
        }
    };

    if (isLink) {
        return (
            <StyledAnchor
                variant={props.variant}
                compact={props.compact}
                title={props.title}
                className={props.className}
                href={props.href}
                target={props.target}
                disabled={props.disabled}
            >
                {Children.count(props.children) > 0 ? props.children : props.title}
            </StyledAnchor>
        );
    }

    return (
        <StyledButton
            variant={props.variant}
            compact={props.compact}
            title={props.title}
            className={props.className}
            onClick={clickAction}
            type="button"
            disabled={props.disabled}
        >
            {Children.count(props.children) > 0 ? props.children : props.title}
        </StyledButton>
    );
};

export default Button;
export { PropsType };
