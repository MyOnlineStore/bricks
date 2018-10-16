import _R, { ComponentClass } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled from '../../utility/styled';
import BareButton, { PropsType as BareButtonPropsType } from './BareButton';

type WithStyledCtaType = ComponentClass<BareButtonPropsType>;

const StyledCta = styled(BareButton)`
    ${({ theme }): string => {
        return `
            padding: 11px 24px;
            color: ${theme.Button.Cta.color};
            background-color: ${theme.Button.Cta.backgroundColor};
            border-radius: ${theme.Button.Cta.borderRadius};
            box-shadow: ${theme.Button.Cta.boxShadow}

            &:hover {
                background-color: ${theme.Button.Cta.hover.backgroundColor};
                box-shadow: ${theme.Button.Cta.hover.boxShadow}
            }

            &:focus {
                background-color: ${theme.Button.Cta.focus.backgroundColor};
                box-shadow: ${theme.Button.Cta.focus.boxShadow};
            }

            &:active {
                box-shadow: ${theme.Button.Cta.active.boxShadow}
                background-color: ${theme.Button.Cta.active.backgroundColor};
            }
            `;
    }};
`;

export default StyledCta;
export { WithStyledCtaType };
