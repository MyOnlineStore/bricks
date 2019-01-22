import SeverityType from '../../types/_SeverityType';
declare type TextAreaWrapperPropsType = {
    disabled?: boolean;
    severity: SeverityType;
};
declare type TextAreaPropsType = {
    resizeable?: boolean;
    disabled?: boolean;
};
declare type TextAreaThemeType = {
    idle: {
        common: {
            borderRadius: string;
            borderColor: string;
            fontSize: string;
            fontFamily: string;
            background: string;
        };
    };
    severity: {
        error: {
            boxShadow: string;
        };
        success: {
            boxShadow: string;
        };
        info: {
            boxShadow: string;
        };
        warning: {
            boxShadow: string;
        };
    };
    disabled: {
        color: string;
        background: string;
    };
};
declare const StyledTextAreaWrapper: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, TextAreaWrapperPropsType, never>;
declare const StyledTextArea: import("styled-components").StyledComponent<"textarea", import("../../types/ThemeType").default, TextAreaPropsType, never>;
export default StyledTextArea;
export { StyledTextArea, StyledTextAreaWrapper, TextAreaThemeType };
