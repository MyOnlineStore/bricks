import { StyledComponentClass as _S } from 'styled-components';
import styled from '../../utility/styled';
import SubHeading from '../Heading/Heading.template';

type SubHeadingThemeType = {
    color:string;
    fontFamily:string;
    fontSize:string;
    weight:string;
};

const StyledSubHeading = styled(SubHeading)`
    color: ${({ theme }):string => theme.SubHeading.color};
    font-family: ${({ theme }):string => theme.SubHeading.fontFamily};
    font-size: ${({ theme }):string => theme.SubHeading.fontSize};
    font-weight: ${({ theme }):string => theme.SubHeading.weight};
    line-height: 1.5;
    margin: 0;
`;

export default StyledSubHeading;
export {
    SubHeadingThemeType,
};
