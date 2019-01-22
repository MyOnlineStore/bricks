import SeverityType from '../../types/_SeverityType';
declare type VariantStyleType = {
    borderColor: string;
};
declare type MessageStreamThemeType = {
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
declare const StyledMessageStream: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, {}, never>;
declare const MessageSeparator: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, {}, never>;
declare type PropsType = {
    severity: SeverityType;
};
declare const StyledMessage: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, PropsType, never>;
export default StyledMessageStream;
export { StyledMessage, MessageSeparator, MessageStreamThemeType, VariantStyleType };
