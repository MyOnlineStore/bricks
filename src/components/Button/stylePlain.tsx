import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';
import BareButton, { PropsType as BareButtonPropsType } from './BareButton';

type ButtonPropsType = BareButtonPropsType & {
    variant: 'primary' | 'destructive';
};

const StyledPlain = withProps<ButtonPropsType>(styled(BareButton))`
    ${({ theme, variant }): string => {
        return `
            padding: 11px 12px;
            color: ${theme.Button.Plain.primary.color};
            background-color: ${theme.Button.Plain.primary.backgroundColor};
            transform: none;

            &:hover {
                transform: scale(1.1);
                ${variant === 'destructive' ? `color: ${theme.Button.Plain.destructive.color}` : ''};
            }

            &:active {
                transform: translateY(2px);
            }

        `;
    }};
`;

export default StyledPlain;
export { ButtonPropsType };
