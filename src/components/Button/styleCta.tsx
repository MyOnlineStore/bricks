import _R, { ComponentClass } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';
import BareButton, { PropsType as BareButtonPropsType } from './BareButton';
import { MediumIcons } from '../Icon';

type ButtonPropsType = BareButtonPropsType & {
    icon?: keyof typeof MediumIcons;
    variant: 'primary' | 'secondary';
};

type WithStyledCtaType = ComponentClass<ButtonPropsType>;

const StyledCta = withProps<ButtonPropsType>(styled(BareButton))`
    ${({ variant, theme }): string => {
        return `
            padding: 11px 24px;
            color: ${theme.Button.Cta[variant].color};
            background-color: ${theme.Button.Cta[variant].backgroundColor};
            border-radius: ${theme.Button.Cta.common.borderRadius};
            box-shadow: ${theme.Button.Cta.common.boxShadow}

            &:hover {
                background-color: ${theme.Button.Cta[variant].hover.backgroundColor};
                box-shadow: ${theme.Button.Cta[variant].hover.boxShadow}
            }

            &:focus {
                background-color: ${theme.Button.Cta[variant].focus.backgroundColor};
                box-shadow: ${theme.Button.Cta[variant].focus.boxShadow};
            }
            `;
    }};
`;

export default StyledCta;
export { ButtonPropsType, WithStyledCtaType };
