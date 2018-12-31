import React, { Children, ReactNode } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../../types/ThemeType';
import styled, { withProps } from '../../../utility/_styled';
import BareButton, { PropsType as BareButtonPropsType } from '../base';
import Icon, { MediumPropsType } from '../../Icon';
import Box from '../../Box';
import Spinner from '../../Spinner';

type PropsType = BareButtonPropsType & {
    loading?: boolean;
    variant: 'primary' | 'destructive' | 'warning' | 'secondary' | 'plain';
    compact?: boolean;
    disabled?: boolean;
    icon?: MediumPropsType['icon'];
    children?: ReactNode;
};

const DefaultButton = withProps<PropsType>(styled(BareButton)).attrs({
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
        return `
            padding: 11px ${compact ? ' 12px' : '24px'};
            color: ${disabled ? theme.Button.Default.disabled.color : theme.Button.Default[variant].idle.color};
            background-color: ${theme.Button.Default[variant].idle.backgroundColor};
            border-radius: ${theme.Button.common.borderRadius};
            box-shadow: ${theme.Button.Default[variant].idle.boxShadow}
            ${variant === 'plain' ? `text-decoration: ${theme.Button.Default.plain.idle.textDecoration}` : ''}

            &:hover {
                background-color: ${theme.Button.Default[variant].hover.backgroundColor};
                box-shadow: ${theme.Button.Default[variant].hover.boxShadow}
            }

            &:focus {
                background-color: ${theme.Button.Default[variant].focus.backgroundColor};
                box-shadow: ${theme.Button.Default[variant].focus.boxShadow};
            }

            &:active {
                background-color: ${theme.Button.Default[variant].active.backgroundColor};
                box-shadow: ${theme.Button.Default[variant].active.boxShadow};
            }

            &::before {
                position: absolute;
                display: block;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                z-index: -2;
                content: '';
                opacity: ${disabled ? 1 : 0};
                ${disabled ? `color: ${theme.Button.Default.disabled.color}` : 0};
                transition: opacity 0.3s;
                background: ${theme.Button.Default.disabled.backgroundColor}
                    repeating-linear-gradient(
                        -45deg,
                        ${theme.Button.Default.disabled.stripingColor},
                        ${theme.Button.Default.disabled.stripingColor} 10px,
                        transparent 10px,
                        transparent 20px
                    );
                box-shadow: ${theme.Button.Default[variant].idle.boxShadow};
                border-radius: ${theme.Button.common.borderRadius};
            }

            &:disabled {
                background: ${theme.Button.Default.disabled.backgroundColor};
                border-color: transparent;
                cursor: default;
                opacity: 0.7;
                transform: none;
                color: ${theme.Button.Default.disabled.color};
                box-shadow: none;

                &::before {
                    opacity: 1;
                }
            }
            `;
    }};
`;

export default DefaultButton;
