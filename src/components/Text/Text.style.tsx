import { StyledComponentClass as _S } from 'styled-components';
import styled from '../../utility/styled';
import Text from './Text.template';

const StyledText = styled(Text)`
    color: ${({ theme }):string => theme.color};
    font-family: ${({ theme }):string => theme.fontFamily};
    font-size: ${({ theme }):string => theme.fontSize};
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
`;

export default StyledText;
