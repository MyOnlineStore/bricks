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
            `;

        // box-shadow: ${theme.Button[variant].regular.hover.boxShadow}
        // &:focus {
        //     background-color: ${theme.Button[variant].regular.focus.backgroundColor};
        //     border-color: ${theme.Button[variant].regular.focus.borderColor};
        //     box-shadow: ${theme.Button[variant].regular.focus.boxShadow};
        // }

        // &:active {
        //     background-color: ${theme.Button[variant].regular.active.backgroundColor};
        //     border-color: ${theme.Button[variant].regular.active.borderColor};
        //     box-shadow: ${theme.Button[variant].regular.active.boxShadow};
        // }
    }};
`;

export default StyledCta;
