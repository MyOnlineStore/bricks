import SeverityType from '../../types/_SeverityType';
import styled from '../../utility/_styled';

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

type PropsType = {
    severity: SeverityType;
};

const StyledMessage = styled.div<PropsType>`
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
