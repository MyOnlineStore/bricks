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

const StyledPlain = withProps<ButtonPropsType>(styled(BareButton))`
    ${({ variant, theme }): string => {
        return `
            padding: 11px 12px;
            color: ${theme.Button.Plain.primary.color};
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
