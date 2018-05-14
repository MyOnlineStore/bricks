import { StyledComponentClass as _S } from 'styled-components';
import styled from '../../utility/styled';
import Text from './Text.template';

type TextThemeType = {
    default:{
        color:string;
        fontFamily:string;
        fontSize:string;
        fontWeight:string;
    };
    descriptive:{
        color:string;
    };
    strong:{
        fontWeight:string;
    };
};

const StyledText = styled(Text)`
    color: ${({ descriptive, theme }):string => descriptive === true ? theme.Text.descriptive.color : theme.Text.default.color};
    font-family: ${({ theme }):string => theme.Text.default.fontFamily};
    font-size: ${({ theme }):string => theme.Text.default.fontSize};
    font-weight: ${({ strong, theme }):string => strong === true ? theme.Text.strong.fontWeight : theme.Text.default.fontWeight};
    line-height: 1.5;
    margin: 0;
`;

export default StyledText;
export {
    TextThemeType,
};
