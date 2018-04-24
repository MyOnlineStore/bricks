import { StyledComponentClass as _S } from 'styled-components';
import styled from '../../utility/styled';
import PriceTag from './PriceTag.template';

type VariantType = {
    color:string;
    fontFamily:string;
    fontSize:string;
    fontWeight:string;

    super:{
        fontSize:string;
        fontWeight:string;
    };
};

type PriceTagThemeType = {
    default:VariantType;
    action:VariantType;
};

const StyledPriceTag = styled(PriceTag)`
    ${({ theme, isActionPrice }):string => {
        const identifier = isActionPrice !== undefined && isActionPrice
            ? 'action'
            : 'default';

        return `
            position: relative;
            color: ${theme.PriceTag[identifier].color};
            font-family: ${theme.PriceTag[identifier].fontFamily};
            font-size: ${theme.PriceTag[identifier].fontSize};
            font-weight: ${theme.PriceTag[identifier].fontWeight};

            sup {
                font-size: ${theme.PriceTag[identifier].super.fontSize};
                font-weight: ${theme.PriceTag[identifier].super.fontWeight};
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
                    background: ${theme.PriceTag[identifier].color};
                    opacity: .7;
                    transform: rotate(-8deg);
                }`
                : ''
            }
        `;
    }}
`;

export default StyledPriceTag;
export {
    PriceTagThemeType,
    VariantType,
};
