import React, { FunctionComponent, MouseEvent } from 'react';
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
    onClick?(event: MouseEvent<HTMLButtonElement>): void;
};

const ButtonBase: FunctionComponent<PropsType> = (props): JSX.Element => {
    const isLink = props.href !== undefined;

    const clickAction = (event: MouseEvent<HTMLButtonElement>): void => {
        if (props.onClick !== undefined && props.disabled !== true && props.loading !== true) {
            props.onClick(event);
        }
    };

    if (isLink) {
        return (
            <StyledAnchor
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
