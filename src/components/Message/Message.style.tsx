import { StyledComponentClass as _S } from 'styled-components';
import styled from '../../utility/styled';
import Message from './Message.template';

type VariantStyleType = {
    borderColor:string;
};

type MessageThemeType = {
    idle:{
        backgroundColor:string;
    };
    read:{
        backgroundColor:string;
    };
    error:VariantStyleType;
    info:VariantStyleType;
    success:VariantStyleType;
    warning:VariantStyleType;
};

const StyledMessage = styled(Message)`
    position: relative;
    background: ${({ theme, read }):string => read ? theme.Message.read.backgroundColor : theme.Message.idle.backgroundColor};

    ${({ theme, severity }):string => `
        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 5px;
            background: ${theme.Message[severity].borderColor};
        }
    `}
`;

export default StyledMessage;
export {
    MessageThemeType,
    VariantStyleType,
};
