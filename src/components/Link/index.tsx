import React, { Children, FunctionComponent } from 'react';
import StyledLink, { StyledButton } from './style';

type PropsType = {
    href?: string;
    title: string;
    target?: '_blank' | '_self';
    action?(): void;
};

const Link: FunctionComponent<PropsType> = (props): JSX.Element => {
    const isLink = props.href !== undefined;

    const clickAction = (): void => {
        if (props.action !== undefined) {
            props.action();
        }
    };

    if (isLink) {
        return (
            <StyledLink title={props.title} target={props.target} href={props.href}>
                {Children.count(props.children) > 0 ? props.children : props.title}
            </StyledLink>
        );
    }

    return (
        <StyledButton type="button" onClick={clickAction} title={props.title}>
            {Children.count(props.children) > 0 ? props.children : props.title}
        </StyledButton>
    );
};

export default Link;
export { PropsType };
