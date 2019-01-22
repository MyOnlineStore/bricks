import SeverityType from '../../types/_SeverityType';
declare type TextFieldThemeType = {
    idle: {
        common: {
            borderRadius: string;
            borderColor: string;
            fontSize: string;
            fontFamily: string;
            color: string;
            background: string;
        };
        affix: {
            color: string;
            background: string;
        };
    };
    focus: {
        borderColor: string;
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
declare type AffixPropsType = {
    disabled?: boolean;
};
declare type WrapperPropsType = {
    focus: boolean;
    disabled?: boolean;
    severity: SeverityType;
};
declare type InputPropsType = {
    disabled?: boolean;
};
declare const StyledInput: import("styled-components").StyledComponent<"input", import("../../types/ThemeType").default, InputPropsType, never>;
declare const StyledAffixWrapper: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, AffixPropsType, never>;
declare const StyledAffix: import("styled-components").StyledComponent<"span", import("../../types/ThemeType").default, {}, never>;
declare const StyledWrapper: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, WrapperPropsType, never>;
export { StyledWrapper, StyledInput, TextFieldThemeType, StyledAffix, StyledAffixWrapper };
