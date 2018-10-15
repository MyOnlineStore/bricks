import _R, { ComponentClass } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';
import BareButton, { PropsType as BareButtonPropsType } from './BareButton';
import { MediumIcons } from '../Icon';

type ButtonPropsType = BareButtonPropsType & {
    icon?: keyof typeof MediumIcons;
    variant: 'primary' | 'destructive' | 'warning' | 'secondary' | 'plain';
    compact?: boolean;
};

type WithStyledDefaultType = ComponentClass<ButtonPropsType>;

const StyledDefault = withProps<ButtonPropsType>(styled(BareButton))`
    ${({ variant, theme, compact }): string => {
        return `
            padding: ${compact ? '11px 12px' : '11px 24px'};
            color: ${theme.Button.Default[variant].idle.color};
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

            &::before {
                position: absolute;
                display: block;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                z-index: -2;
                content: '';
                opacity: 0;
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
            `;
    }};
`;

export default StyledDefault;
export { ButtonPropsType, WithStyledDefaultType };
