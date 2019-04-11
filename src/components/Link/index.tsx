import React, { Children, FC } from 'react';
import StyledLink, { StyledButton } from './style';
import Branch from '../Branch';

type PropsType = {
    href?: string;
    title: string;
    target?: '_blank' | '_self';
    'data-testid'?: string;
    onClick?(): void;
};

const Link: FC<PropsType> = (props): JSX.Element => {
    const isLink = props.href !== undefined;

    const clickAction = (): void => {
        if (props.onClick !== undefined) {
            props.onClick();
        }
    };

    const renderChildrenOrTitle = (): JSX.Element => {
        return Children.count(props.children) > 0 ? <>{props.children}</> : <>{props.title}</>;
    };

    return (
        <Branch
            condition={isLink}
            ifTrue={(): JSX.Element => (
                <StyledLink
                    title={props.title}
                    target={props.target}
                    href={props.href}
                    data-testid={props['data-testid']}
                >
                    {renderChildrenOrTitle()}
                </StyledLink>
            )}
            ifFalse={(): JSX.Element => (
                <StyledButton
                    type="button"
                    onClick={clickAction}
                    title={props.title}
                    data-testid={props['data-testid']}
                >
                    {renderChildrenOrTitle()}
                </StyledButton>
            )}
        />
    );
};

export default Link;
export { PropsType };
