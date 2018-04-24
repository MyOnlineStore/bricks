import { StyledComponentClass as _S } from 'styled-components';
import styled from '../../utility/styled';
import Text from './Text.template';

type TextThemeType = {
    color:string;
    fontFamily:string;
    fontSize:string;
};

const StyledText = styled(Text)`
    color: ${({ theme }):string => theme.Text.color};
    font-family: ${({ theme }):string => theme.Text.fontFamily};
    font-size: ${({ theme }):string => theme.Text.fontSize};
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
`;

export default StyledText;
export {
    TextThemeType,
};
