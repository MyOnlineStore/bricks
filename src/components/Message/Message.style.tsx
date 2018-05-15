import { StyledComponentClass as _S } from 'styled-components';
import styled from '../../utility/styled';
import Message from './Message.template';

type VariantStyleType = {
    borderColor:string;
};

type MessageThemeType = {
    common:{
        backgroundColor:string;
        borderColor:string;
    };
    read:{
        backgroundColor:string;
        borderColor:string;
    };
    error:VariantStyleType;
    info:VariantStyleType;
    success:VariantStyleType;
    warning:VariantStyleType;
};

const StyledMessage = styled(Message)`
    position: relative;
    background: ${({ theme, read }):string => read ? theme.Message.read.backgroundColor : theme.Message.common.backgroundColor};
    border-bottom: 1px solid ${({ theme, read }):string => read ? theme.Message.read.borderColor : theme.Message.common.borderColor};

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
