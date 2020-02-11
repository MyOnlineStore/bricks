import SeverityType from '../../types/SeverityType';
import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';

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

const composeMessageStreamTheme = (themeTools: ThemeTools): MessageStreamThemeType => {
    const { colors } = themeTools.themeSettings;

    return {
        common: {
            backgroundColor: colors.silver.lighter1,
            borderColor: colors.silver.darker3,
        },
        read: {
            backgroundColor: colors.silver.base,
        },
        success: {
            borderColor: colors.primary.darker1,
        },
        info: {
            borderColor: colors.silver.darker3,
        },
        warning: {
            borderColor: colors.tertiary.darker1,
        },
        error: {
            borderColor: colors.secondary.base,
        },
    };
};

export default StyledMessageStream;
export { StyledMessage, MessageSeparator, MessageStreamThemeType, VariantStyleType, composeMessageStreamTheme };
