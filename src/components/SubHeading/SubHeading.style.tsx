import { StyledComponentClass as _S } from 'styled-components';
import styled from '../../utility/styled';
import SubHeading from '../Heading/Heading.template';

const StyledSubHeading = styled(SubHeading)`
    color: ${({ theme }):string => theme.subHeadingColor};
    font-family: ${({ theme }):string => theme.subHeadingFontFamily};
    font-size: ${({ theme }):string => theme.subHeadingFontSize};
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
`;

export default StyledSubHeading;
