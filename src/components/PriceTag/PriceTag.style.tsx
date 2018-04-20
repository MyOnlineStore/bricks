import { StyledComponentClass as _S } from 'styled-components';
import styled from '../../utility/styled';
import PriceTag from './PriceTag.template';

const StyledPriceTag = styled(PriceTag)`
    color: ${({ theme }):string => theme.priceTag.color};
    font-family: ${({ theme }):string => theme.priceTag.fontFamily};
    font-size: ${({ theme }):string => theme.priceTag.fontSize};
`;

export default StyledPriceTag;
