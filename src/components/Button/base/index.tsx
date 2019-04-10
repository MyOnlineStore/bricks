import React, { FC } from 'react';
import StyledButton, { StyledAnchor } from './style';

type PropsType = {
    className?: string;
    compact?: boolean;
    title: string;
    variant?: 'primary' | 'destructive' | 'warning' | 'secondary' | 'plain';
    target?: HTMLAnchorElement['target'];
    href?: string;
    disabled?: boolean;
    id?: string;
    loading?: boolean;
    'data-testid'?: string;
    onClick?(): void;
};

const ButtonBase: FC<PropsType> = (props): JSX.Element => {
    const isLink = props.href !== undefined;

    const clickAction = (): void => {
        if (props.onClick !== undefined && props.disabled !== true && props.loading !== true) props.onClick();
    };

    if (isLink) {
        return (
            <StyledAnchor
                // @ts-ignore
                href={props.href}
                target={props.target}
                title={props.title}
                className={props.className}
                disabled={props.disabled}
                id={props.id}
                loading={props.loading}
                data-testid={props['data-testid']}
            >
                {props.children}
            </StyledAnchor>
        );
    }

    return (
        <StyledButton
            title={props.title}
            className={props.className}
            onClick={clickAction}
            type="button"
            disabled={props.disabled}
            id={props.id}
            loading={props.loading}
            data-testid={props['data-testid']}
        >
            {props.children}
        </StyledButton>
    );
};

export default ButtonBase;
export { PropsType };
