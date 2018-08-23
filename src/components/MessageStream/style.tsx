import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import SeverityType from '../../types/SeverityType';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

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

const StyledMessageStream = styled.div`
    display: block;
`;

const MessageSeparator = styled.div`
    border-bottom: 1px solid ${({ theme }): string => theme.MessageStream.common.borderColor};
`;

type MessagePropsType = {
    severity: SeverityType;
};

const StyledMessage = withProps<MessagePropsType, HTMLDivElement>(styled.div)`
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
export { StyledMessage, MessageSeparator, MessageStreamThemeType, VariantStyleType };
