import React, { Children, SFC } from 'react';
import StyledButton, { StyledAnchor } from './style';
import Icon, { MediumPropsType } from '../Icon';
import Box from '../Box';
import trbl from '../../utility/trbl';

type PropsType = {
    className?: string;
    compact?: boolean;
    title: string;
    variant: 'primary' | 'destructive' | 'warning' | 'secondary' | 'plain';
    target?: HTMLAnchorElement['target'];
    href?: string;
    disabled?: boolean;
    flat?: boolean;
    color?: string;
    icon?: MediumPropsType['icon'];
    iconAlign?: 'right' | 'left';
    id?: string;
    action?(): void;
};

type ButtonContentsType = {
    icon?: PropsType['icon'];
    iconAlign?: PropsType['iconAlign'];
    title: PropsType['title'];
};

const ButtonContents: SFC<ButtonContentsType> = (props): JSX.Element => (
    <>
        {props.icon &&
            props.iconAlign !== 'right' && (
                <Box inline padding={trbl(0, 6, 0, 0)}>
                    <Icon icon={props.icon} size={'medium'} />
                </Box>
            )}
        {Children.count(props.children) > 0 ? props.children : props.title}
        {props.icon &&
            props.iconAlign === 'right' && (
                <Box inline padding={trbl(0, 0, 0, 6)}>
                    <Icon icon={props.icon} size={'medium'} />
                </Box>
            )}
    </>
);

const Button: SFC<PropsType> = (props): JSX.Element => {
    const isLink = props.href !== undefined;

    const clickAction = (): void => {
        if (props.action !== undefined && props.disabled !== true) props.action();
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
                flat={props.flat}
                id={props.id}
            >
                <ButtonContents title={props.title} icon={props.icon} iconAlign={props.iconAlign}>
                    {props.children}
                </ButtonContents>
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
            flat={props.flat}
            color={props.color}
            icon={props.icon}
            id={props.id}
        >
            <ButtonContents title={props.title} icon={props.icon} iconAlign={props.iconAlign}>
                {props.children}
            </ButtonContents>
        </StyledButton>
    );
};

export default Button;
export { PropsType };
