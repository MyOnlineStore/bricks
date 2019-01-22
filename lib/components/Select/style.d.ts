declare type SelectThemeType = {
    common: {
        backgroundColor: string;
        secondaryColor: string;
        borderRadius: string;
    };
    input: {
        borderColor: string;
        color: string;
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        background: string;
    };
    wrapper: {
        common: {
            borderColor: string;
        };
        focus: {
            borderColor: string;
            boxShadow: string;
        };
    };
    placeholder: {
        color: string;
    };
    disabled: {
        chevron: string;
        color: string;
        background: string;
    };
};
declare type WrapperPropsType = {
    open: boolean;
    disabled?: boolean;
};
declare const StyledPlaceholder: import("styled-components").StyledComponent<"span", import("../../types/ThemeType").default, {}, never>;
declare const StyledWrapper: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, WrapperPropsType, never>;
declare type WindowPropsType = {
    open: boolean;
    rect?: ClientRect;
    inputHeight?: number;
};
declare const StyledWindow: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, WindowPropsType, never>;
declare type InputPropsType = {
    open: boolean;
    hasFocus: boolean;
    disabled: boolean;
};
declare const StyledInput: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, InputPropsType, never>;
export { StyledWrapper, StyledInput, StyledWindow, SelectThemeType, StyledPlaceholder };
