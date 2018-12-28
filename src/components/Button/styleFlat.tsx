import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/_styled';
import BareButton, { PropsType as BareButtonPropsType } from './BareButton';

type PropsType = BareButtonPropsType & {
    variant: 'primary' | 'destructive';
};

const StyledFlat = withProps<PropsType>(styled(BareButton))`
    ${({ theme, variant }): string => {
        return `
            padding: 11px 12px;
            color: ${theme.Button.Flat.primary.color};
            background-color: ${theme.Button.Flat.primary.backgroundColor};
            transform: none;

            &:hover {
                transform: scale(1.1);
                ${variant === 'destructive' ? `color: ${theme.Button.Flat.destructive.color}` : ''};
            }

            &:active {
                transform: translateY(2px);
            }

        `;
    }};
`;

export default StyledFlat;
export { PropsType };
