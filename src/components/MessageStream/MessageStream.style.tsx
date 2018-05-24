import { ClassAttributes as _C, HTMLAttributes as _H } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled from '../../utility/styled';
import MessageStream, { Message } from './MessageStream.template';

type VariantStyleType = {
    borderColor: string;
};

type MessageStreamThemeType = {
    common: {
        backgroundColor: string;
        borderColor: string;
    };
    read: {
        backgroundColor: string;
    };
    error: VariantStyleType;
    info: VariantStyleType;
    success: VariantStyleType;
    warning: VariantStyleType;
};

const StyledMessageStream = styled(MessageStream)`
    display: block;
`;

const MessageSeparator = styled.div`
    border-bottom: 1px solid
        ${({ theme }): string => theme.MessageStream.common.borderColor};
`;

const StyledMessage = styled(Message)`
    position: relative;

    ${({ theme, severity }): string => `
        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 5px;
            background: ${theme.MessageStream[severity].borderColor};
        }
    `};
`;

export default StyledMessageStream;
export {
    StyledMessage,
    MessageSeparator,
    MessageStreamThemeType,
    VariantStyleType,
};
