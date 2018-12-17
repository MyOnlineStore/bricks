import React, { Children, FunctionComponent } from 'react';
import StyledButton, { StyledAnchor } from './style';
import Icon, { MediumPropsType } from '../Icon';
import Box from '../Box';
import theme from '../../themes/MosTheme/MosTheme.theme';
import trbl from '../../utility/trbl';
import Spinner from '../Spinner';

type PropsType = {
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
    title: PropsType['title'];
};

const ButtonContents: FunctionComponent<ButtonContentsType> = (props): JSX.Element => (
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

const Button: FunctionComponent<PropsType> = (props): JSX.Element => {
    const isLink = props.href !== undefined;
    const subVariant = props.flat ? 'flat' : 'regular';
    const clickAction = (): void => {
        if (props.action !== undefined && props.disabled !== true && props.loading !== true) {
            props.action();
        }
    };

    if (isLink) {
        return (
            <StyledAnchor
                loading={props.loading}
                color={props.loading ? 'transparent' : 'currentColor'}
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
                {(props.loading && <Spinner color={'currentColor'} />) || (
                    <ButtonContents title={props.title} icon={props.icon} iconAlign={props.iconAlign}>
                        {props.children}
                    </ButtonContents>
                )}
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
            {props.loading && (
                <Box
                    grow={0}
                    shrink={0}
                    basis="35px"
                    justifyContent="center"
                    alignItems="center"
                    position="absolute"
                    left="0"
                    top="0"
                    right="0"
                    bottom="0"
                    padding={trbl(6)}
                >
                    <Spinner color={theme.Button[props.variant][subVariant].idle.color} />
                </Box>
            )}
            <ButtonContents title={props.title} icon={props.icon} iconAlign={props.iconAlign}>
                {props.children}
            </ButtonContents>
        </StyledButton>
    );
};

export default Button;
export { PropsType };
