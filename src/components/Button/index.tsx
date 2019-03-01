import React, { Children, ReactNode } from 'react';
import styled from '../../utility/_styled';
import Icon from '../Icon';
import BareButton, { PropsType as BaseButtonPropsType } from './base';
import Box from '../Box';
import Spinner from '../Spinner';

type CommonType = {
    backgroundColor: string;
    color: string;
    boxShadow: string;
};

type ComponentStateTypes = {
    idle: CommonType;
    hover: CommonType;
    focus: CommonType;
    active: CommonType;
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
        hover: CommonType;
        focus: CommonType;
        active: CommonType;
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

type PropsType = BaseButtonPropsType & {
    loading?: boolean;
    variant: 'primary' | 'destructive' | 'warning' | 'secondary' | 'plain';
    compact?: boolean;
    disabled?: boolean;
    icon?: string;
    children?: ReactNode;
};

const Button = styled(BareButton).attrs((props: PropsType) => {
    const color = props.loading ? 'transparent' : undefined;

    const children: ReactNode = (
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

    return {
        children,
    };
})<PropsType>`
    ${({ theme, variant, compact, disabled, loading }): string => {
        const idle = `
            background-color: ${theme.Button[variant].idle.backgroundColor};
            box-shadow: ${theme.Button[variant].idle.boxShadow};
            color: ${theme.Button[variant].idle.color};
        `;

        const hover = `
            background-color: ${theme.Button[variant].hover.backgroundColor};
            box-shadow: ${theme.Button[variant].hover.boxShadow};
            color: ${theme.Button[variant].hover.color};
        `;

        const active = `
            transform: translateY(2px);
            background-color: ${theme.Button[variant].active.backgroundColor};
            box-shadow: ${theme.Button[variant].active.boxShadow};
            color: ${theme.Button[variant].active.color};
        `;

        const focus = `
            background-color: ${theme.Button[variant].focus.backgroundColor};
            box-shadow: ${theme.Button[variant].focus.boxShadow};
            color: ${theme.Button[variant].focus.color};
        `;

        return `
            ${idle}
            padding: 11px ${compact ? ' 12px' : '24px'};
            border-radius: ${theme.Button.common.borderRadius};
            ${variant === 'plain' ? `text-decoration: ${theme.Button.plain.idle.textDecoration}` : ''}

            &:hover {
                ${!loading && !disabled ? hover : idle}
            }

            &:focus {
                ${!loading && !disabled ? focus : idle}
            }

            &:active {
                ${!loading && !disabled ? active : idle}
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
