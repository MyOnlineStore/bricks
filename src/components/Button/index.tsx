import React, { Children, ReactNode } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/_styled';
import BareButton, { PropsType as BareButtonPropsType } from './base';
import Icon, { MediumPropsType } from '../Icon';
import Box from '../Box';
import Spinner from '../Spinner';

type DefaultTypes = {
    backgroundColor: string;
    color: string;
    boxShadow: string;
};

type ComponentStateTypes = {
    idle: DefaultTypes;
    hover: DefaultTypes;
    focus: DefaultTypes;
    active: DefaultTypes;
};

type ButtonThemeType = {
    common: {
        borderRadius: string;
        borderWidth: string;
        fontWeight: string;
        fontFamily: string;
        fontSize: string;
        textDecoration: string;
    };
    primary: ComponentStateTypes;
    secondary: ComponentStateTypes;
    warning: ComponentStateTypes;
    destructive: ComponentStateTypes;
    plain: {
        hover: DefaultTypes;
        focus: DefaultTypes;
        active: DefaultTypes;
        idle: {
            backgroundColor: string;
            color: string;
            boxShadow: string;
            textDecoration: string;
        };
    };
    disabled: {
        backgroundColor: string;
        color: string;
        stripingColor: string;
    };
};

type PropsType = BareButtonPropsType & {
    loading?: boolean;
    variant: 'primary' | 'destructive' | 'warning' | 'secondary' | 'plain';
    compact?: boolean;
    disabled?: boolean;
    icon?: MediumPropsType['icon'];
    children?: ReactNode;
};

const Button = withProps<PropsType>(styled(BareButton)).attrs({
    children: (props: PropsType): JSX.Element => {
        const color = props.loading ? 'transparent' : undefined;

        return (
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
                        <Spinner />
                    </Box>
                )}
                {props.icon && (
                    <Box inline padding={[0, 6, 0, 0]}>
                        <Icon size="medium" icon={props.icon} color={color} />
                    </Box>
                )}
                <span style={{ color }}>{Children.count(props.children) > 0 ? props.children : props.title}</span>
            </>
        );
    },
})`
    ${({ theme, variant, compact, disabled, loading }): string => {
        const hover = `
            background-color: ${theme.Button[variant].hover.backgroundColor};
            box-shadow: ${theme.Button[variant].hover.boxShadow};
        `;

        const active = `
            transform: translateY(2px);
            background-color: ${theme.Button[variant].active.backgroundColor};
            box-shadow: ${theme.Button[variant].active.boxShadow};
        `;

        const focus = `
            background-color: ${theme.Button[variant].focus.backgroundColor};
            box-shadow: ${theme.Button[variant].focus.boxShadow};
        `;

        return `
            padding: 11px ${compact ? ' 12px' : '24px'};
            color: ${disabled ? theme.Button.disabled.color : theme.Button[variant].idle.color};
            background-color: ${theme.Button[variant].idle.backgroundColor};
            border-radius: ${theme.Button.common.borderRadius};
            box-shadow: ${theme.Button[variant].idle.boxShadow}
            ${variant === 'plain' ? `text-decoration: ${theme.Button.plain.idle.textDecoration}` : ''}

            &:hover {
                ${!loading ? hover : ''}
            }

            &:focus {
                ${focus}
            }

            &:active {
                ${!loading ? active : ''}
            }

            &::before {
                opacity: ${disabled ? 1 : 0};
                ${disabled ? `color: ${theme.Button.disabled.color}` : 0};
                background: ${theme.Button.disabled.backgroundColor}
                    repeating-linear-gradient(
                        -45deg,
                        ${theme.Button.disabled.stripingColor},
                        ${theme.Button.disabled.stripingColor} 10px,
                        transparent 10px,
                        transparent 20px
                    );
                box-shadow: ${theme.Button[variant].idle.boxShadow};
                border-radius: ${theme.Button.common.borderRadius};
            }

            &:disabled {
                background: ${theme.Button.disabled.backgroundColor};
                color: ${theme.Button.disabled.color};
            }
            `;
    }};
`;

export default Button;
export { PropsType, ButtonThemeType };
