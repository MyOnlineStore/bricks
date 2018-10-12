import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../../types/ThemeType';
import styled, { withProps } from '../../../utility/styled';
import BareButton from '../BareButton';
import { PropsType } from './';

type ButtonPropsType = {
    icon?: PropsType['icon'];
    variant: PropsType['variant'];
};

type CtaThemeType = {
    Button: {
        Cta: {
            common: {
                borderRadius: string;
            };
            primary: {
                color: string;
                backgroundColor: string;
            };
            secondary: {
                color: string;
                backgroundColor: string;
            };
        };
    };
};

const StyledCta = withProps<ButtonPropsType>(styled(BareButton))`
    ${({ variant, theme }): string => {
        return `
            padding: 11px 24px;
            color: ${theme.Button.Cta[variant].color};
            background-color: ${theme.Button.Cta[variant].backgroundColor};
            border-radius: ${theme.Button.Cta.common.borderRadius};

            &:hover {
                background-color: ${theme.Button[variant].regular.hover.backgroundColor};
                border-color: ${theme.Button[variant].regular.hover.borderColor}};
                box-shadow: ${theme.Button[variant].regular.hover.boxShadow}
            }

            &:focus {
                background-color: ${theme.Button[variant].regular.focus.backgroundColor};
                border-color: ${theme.Button[variant].regular.focus.borderColor};
                box-shadow: ${theme.Button[variant].regular.focus.boxShadow};
            }

            &:active {
                background-color: ${theme.Button[variant].regular.active.backgroundColor};
                border-color: ${theme.Button[variant].regular.active.borderColor};
                box-shadow: ${theme.Button[variant].regular.active.boxShadow};
            }
        `;
    }};
`;

export default StyledCta;
export { CtaThemeType };
