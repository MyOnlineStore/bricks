import { StyledComponentClass as _S } from 'styled-components';
import styled from '../../utility/styled';
import Heading from './Heading.template';

type HeadingThemeType = {
    color:string;
    fontFamily:string;
    fontSize:string;
    fontWeight:string;
};

const StyledHeading = styled(Heading)`
    color: ${({ theme }):string => theme.Heading.color};
    font-family: ${({ theme }):string => theme.Heading.fontFamily};
    font-size: ${({ theme }):string => theme.Heading.fontSize};
    font-weight: ${({ theme }):string => theme.Heading.fontWeight};
    line-height: 1.5;
    margin: 0;
`;

export default StyledHeading;
export {
    HeadingThemeType,
};
