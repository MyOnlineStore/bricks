import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../../types/ThemeType';
import styled, { withProps } from '../../../utility/styled';
import BareButton from '../BareButton';
import { PropsType } from './';

type ButtonPropsType = {
    icon?: PropsType['icon'];
    variant: PropsType['variant'];
    compact?: boolean;
};

type DefaultTypes = {
    backgroundColor: string;
    borderColor: string;
    color: string;
    boxShadow: string;
};

type ComponentStateTypes = {
    idle: DefaultTypes;
    hover: DefaultTypes;
    focus: DefaultTypes;
    active: DefaultTypes;
};

type ButtonDefaultThemeType = {
    common: {
        borderRadius: string;
        borderWidth: string;
        fontWeight: string;
        fontFamily: string;
        fontSize: string;
        textDecoration: string;
    };
    Default: {
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
                borderColor: string;
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
};

const StyledDefault = withProps<ButtonPropsType>(styled(BareButton))`
    ${({ variant, theme, compact }): string => {
        return `
            padding: ${compact ? '11px 12px' : '11px 24px'};
            color: ${theme.ButtonDefault.Default[variant].idle.color};
            background-color: ${theme.ButtonDefault.Default[variant].idle.backgroundColor};
            border-radius: ${theme.ButtonDefault.common.borderRadius};
            box-shadow: ${theme.ButtonDefault.Default[variant].idle.boxShadow}
            ${variant === 'plain' ? `text-decoration: ${theme.ButtonDefault.Default.plain.idle.textDecoration}` : ''}

            &:hover {
                background-color: ${theme.ButtonDefault.Default[variant].hover.backgroundColor};
                border-color: ${theme.ButtonDefault.Default[variant].hover.borderColor};
                box-shadow: ${theme.ButtonDefault.Default[variant].hover.boxShadow}
            }

            &:focus {
                background-color: ${theme.ButtonDefault.Default[variant].focus.backgroundColor};
                border-color: ${theme.ButtonDefault.Default[variant].focus.borderColor};
                box-shadow: ${theme.ButtonDefault.Default[variant].focus.boxShadow};
            }

            &:active {
                transform: translateY(2px);
                background-color: ${theme.ButtonDefault.Default[variant].active.backgroundColor};
                border-color: ${theme.ButtonDefault.Default[variant].active.borderColor};
                box-shadow: ${theme.ButtonDefault.Default[variant].active.boxShadow};
            }

            &:disabled {
                background: ${theme.ButtonDefault.Default.disabled.backgroundColor};
                border-color: transparent;
                cursor: default;
                opacity: 0.7;
                transform: none;
                color: ${theme.ButtonDefault.Default.disabled.color};
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
                background: ${theme.ButtonDefault.Default.disabled.backgroundColor}
                    repeating-linear-gradient(
                        -45deg,
                        ${theme.ButtonDefault.Default.disabled.stripingColor},
                        ${theme.ButtonDefault.Default.disabled.stripingColor} 10px,
                        transparent 10px,
                        transparent 20px
                    );
                box-shadow: ${theme.ButtonDefault.Default[variant].idle.boxShadow};
                border-radius: ${theme.ButtonDefault.common.borderRadius};
            }
            `;
        // box-shadow: ${theme.Button[variant].idle.boxShadow};
    }};
`;

export default StyledDefault;
export { ButtonDefaultThemeType };
