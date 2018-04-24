import { StyledComponentClass as _S } from 'styled-components';
import styled from '../../utility/styled';
import PriceTag from './PriceTag.template';

const StyledPriceTag = styled(PriceTag)`
    ${({ theme, isActionPrice }):string => {
        const identifier = isActionPrice !== undefined && isActionPrice
            ? 'action'
            : 'default';

        return `
            position: relative;
            color: ${theme.priceTag[identifier].color};
            font-family: ${theme.priceTag[identifier].fontFamily};
            font-size: ${theme.priceTag[identifier].fontSize};
            font-weight: ${theme.priceTag[identifier].fontWeight};

            sup {
                font-size: ${theme.priceTag[identifier].sup.fontSize};
                font-weight: ${theme.priceTag[identifier].sup.fontWeight};
            }

            ${isActionPrice !== undefined && isActionPrice
                ? `&::after {
                    content: '';
                    width: 100%;
                    height: 2px;
                    left: 0;
                    top: 50%;
                    margin-top: -2px;
                    position: absolute;
                    background: ${theme.priceTag[identifier].color};
                    opacity: .7;
                    transform: rotate(-8deg);
                }`
                : ''
            }
        `;
    }}
`;

export default StyledPriceTag;
