import React, { Children, FC } from 'react';
import StyledButton, { StyledAnchor } from './style';
import Icon, { MediumPropsType } from '../Icon';
import ThemeType from '../../types/ThemeType';
import { withTheme } from 'styled-components';
import Box from '../Box';
import Spinner from '../Spinner';

type PropsType = {
    theme: ThemeType;
    className?: string;
    compact?: boolean;
    loading?: boolean;
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
    subVariant: 'flat' | 'regular';
    variant: PropsType['variant'];
    loading: PropsType['loading'];
    theme: PropsType['theme'];
    title: PropsType['title'];
};

const ButtonContents: FC<ButtonContentsType> = (props): JSX.Element => (
    <>
        {props.loading && (
            <Box
                justifyContent="center"
                alignItems="center"
                position="absolute"
                left="0"
                top="0"
                right="0"
                bottom="0"
                padding={[6]}
            >
                <Spinner color={props.theme.Button[props.variant][props.subVariant].idle.color} />
            </Box>
        )}
        {props.icon &&
            props.title === '' && (
                <Box inline>
                    <Icon icon={props.icon} size={'medium'} />
                </Box>
            )}
        {props.icon &&
            props.title !== '' &&
            props.iconAlign !== 'right' && (
                <Box inline padding={[0, 6, 0, 0]}>
                    <Icon icon={props.icon} size={'medium'} />
                </Box>
            )}
        {Children.count(props.children) > 0 ? props.children : props.title}
        {props.icon &&
            props.title !== '' &&
            props.iconAlign === 'right' && (
                <Box inline padding={[0, 0, 0, 6]}>
                    <Icon icon={props.icon} size={'medium'} />
                </Box>
            )}
    </>
);

const Button: FC<PropsType> = (props): JSX.Element => {
    const isLink = props.href !== undefined;

    const clickAction = (): void => {
        if (props.action !== undefined && props.disabled !== true && props.loading !== true) {
            props.action();
        }
    };

    if (isLink) {
        return (
            <StyledAnchor
                loading={props.loading}
                variant={props.variant}
                compact={props.compact}
                title={props.title}
                className={props.className}
                href={props.href}
                target={props.target}
                color={props.loading ? 'transparent' : props.color}
                disabled={props.disabled}
                flat={props.flat}
                id={props.id}
            >
                <ButtonContents
                    icon={props.icon}
                    title={props.title}
                    theme={props.theme}
                    variant={props.variant}
                    loading={props.loading}
                    iconAlign={props.iconAlign}
                    subVariant={props.flat ? 'flat' : 'regular'}
                >
                    {props.children}
                </ButtonContents>
            </StyledAnchor>
        );
    }

    return (
        <StyledButton
            loading={props.loading}
            variant={props.variant}
            compact={props.compact}
            title={props.title}
            className={props.className}
            onClick={clickAction}
            type="button"
            disabled={props.disabled}
            flat={props.flat}
            color={props.loading ? 'transparent' : props.color}
            icon={props.icon}
            id={props.id}
        >
            <ButtonContents
                icon={props.icon}
                title={props.title}
                theme={props.theme}
                variant={props.variant}
                loading={props.loading}
                iconAlign={props.iconAlign}
                subVariant={props.flat ? 'flat' : 'regular'}
            >
                {props.children}
            </ButtonContents>
        </StyledButton>
    );
};

export default withTheme(Button);
export { PropsType };
