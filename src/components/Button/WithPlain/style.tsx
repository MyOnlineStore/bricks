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

type ButtonPlainThemeType = {
    primary: {
        color: string;
    };
    destructive: {
        color: string;
    };
};

const StyledPlain = withProps<ButtonPropsType>(styled(BareButton))`
    ${({ variant, theme }): string => {
        return `
            padding: 11px 12px;
            color: ${theme.ButtonPlain.primary.color};

            &:hover {
                transform: scale(1.1);
                color: ${
                    variant === 'destructive' ? theme.ButtonPlain.destructive.color : theme.ButtonPlain.primary.color
                };
            }
            &:active {
                transform: translateY(2px);
            }

        `;
    }};
`;

export default StyledPlain;
export { ButtonPlainThemeType };
