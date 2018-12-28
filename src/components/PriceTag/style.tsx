import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/_styled';

type PriceTagThemeType = {
    strikethroughColor: string;
};

type PriceTagPropsType = {
    strikethrough?: boolean;
};

const StyledPriceTag = withProps<PriceTagPropsType, HTMLSpanElement>(styled.span)`
    ${({ theme, strikethrough }): string => {
        return `
            position: relative;

            sup {
                font-size: .7em;
            }

            ${
                strikethrough === true
                    ? `&::after {
                    content: '';
                    width: 100%;
                    height: 2px;
                    left: 0;
                    top: 50%;
                    margin-top: -2px;
                    position: absolute;
                    background: ${theme.PriceTag.strikethroughColor};
                    opacity: .7;
                    transform: rotate(-8deg);
                }`
                    : ''
            }
        `;
    }};
`;

export default StyledPriceTag;
export { PriceTagThemeType };
