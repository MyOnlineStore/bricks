import React, { FunctionComponent, MouseEvent, HTMLProps } from 'react';
import StyledButton, { StyledAnchor } from './style';

type PropsType = {
    className?: string;
    title: string;
    target?: HTMLAnchorElement['target'];
    href?: string;
    disabled?: boolean;
    id?: string;
    loading?: boolean;
    'data-testid'?: string;
} & Partial<Pick<HTMLProps<HTMLButtonElement | HTMLAnchorElement>, 'onClick' | 'onMouseEnter' | 'onMouseLeave'>>;

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
                id={props.id}
                data-testid={props['data-testid']}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
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
            data-testid={props['data-testid']}
        >
            {props.children}
        </StyledButton>
    );
};

export default ButtonBase;
export { PropsType };
