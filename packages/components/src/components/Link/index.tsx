import React, { Children, FunctionComponent, MouseEvent } from 'react';
import SeverityType from '../../types/SeverityType';
import StyledLink, { StyledButton } from './style';

type PropsType = {
    href?: string;
    className?: string;
    severity?: SeverityType;
    title: string;
    target?: '_blank' | '_self';
    'data-testid'?: string;
    onClick?(event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>): void;
};

const Link: FunctionComponent<PropsType> = (props): JSX.Element => {
    const isLink = props.href !== undefined;

    const clickAction = (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>): void => {
        if (props.onClick !== undefined) {
            props.onClick(event);
        }
    };

    if (isLink) {
        return (
            <StyledLink
                className={props.className}
                title={props.title}
                target={props.target}
                href={props.href}
                severity={props.severity ? props.severity : 'default'}
                data-testid={props['data-testid']}
            >
                {Children.count(props.children) > 0 ? props.children : props.title}
            </StyledLink>
        );
    }

    return (
        <StyledButton
            className={props.className}
            type="button"
            onClick={clickAction}
            title={props.title}
            severity={props.severity ? props.severity : 'default'}
            data-testid={props['data-testid']}
        >
            {Children.count(props.children) > 0 ? props.children : props.title}
        </StyledButton>
    );
};

export default Link;
export { PropsType };
