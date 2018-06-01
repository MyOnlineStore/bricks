import _R from 'react'
import { StyledComponentClass as _S } from 'styled-components';
import { PropsType } from '.'
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type VariantType = {
    color: string;
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
};

type PriceTagThemeType = {
    default: VariantType;
    action: VariantType;
    base: VariantType;
};

type PriceTagPropsType = {
    displayType?: PropsType['displayType'];
}

const StyledPriceTag = withProps<PriceTagPropsType, HTMLSpanElement>(styled.span) `
    ${({ theme, displayType }): string => {
        const identifier = displayType !== undefined ? displayType : 'default';

        return `
            position: relative;
            color: ${theme.PriceTag[identifier].color};
            font-family: ${theme.PriceTag[identifier].fontFamily};
            font-size: ${theme.PriceTag[identifier].fontSize};
            font-weight: ${theme.PriceTag[identifier].fontWeight};

            sup {
                font-size: .7em;
            }

            ${
            displayType !== undefined && displayType === 'base'
                ? `&::after {
                    content: '';
                    width: 100%;
                    height: 2px;
                    left: 0;
                    top: 50%;
                    margin-top: -2px;
                    position: absolute;
                    background: ${theme.PriceTag[identifier].color};
                    opacity: .7;
                    transform: rotate(-8deg);
                }`
                : ''
            }
        `;
    }};
`;

export default StyledPriceTag;
export { PriceTagThemeType, VariantType };
