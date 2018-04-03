import { StyledComponentClass as _S } from 'styled-components';
import styled from '../../utility/styled';
import Heading from './Heading.template';

const StyledHeading = styled(Heading)`
    color: ${({ theme }):string => theme.headingColor};
    font-family: ${({ theme }):string => theme.headingFontFamily};
    font-size: ${({ theme }):string => theme.headingFontSize};
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
`;

export default StyledHeading;
