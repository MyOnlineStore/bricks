declare type RadioButtonPropsType = {
    checked: boolean;
};
declare type RadioButtonSkinPropsType = {
    checked: boolean;
    disabled?: boolean;
    error?: boolean;
    elementFocus: boolean;
};
declare type RadioButtonThemeType = {
    idle: {
        boxShadow: string;
        borderColor: string;
        backgroundColor: string;
    };
    idleDisabled: {
        background: string;
    };
    active: {
        boxShadow: string;
        borderColor: string;
        background: string;
    };
    activeDisabled: {
        boxShadow: string;
        background: string;
    };
    focus: {
        boxShadow: string;
    };
    error: {
        borderColor: string;
    };
};
declare const StyledRadioWrapper: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, {}, never>;
declare const StyledRadioButton: import("styled-components").StyledComponent<"input", import("../../types/ThemeType").default, RadioButtonPropsType, never>;
declare const StyledRadioButtonSkin: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, RadioButtonSkinPropsType, never>;
export default StyledRadioButton;
export { StyledRadioButton, StyledRadioButtonSkin, StyledRadioWrapper, RadioButtonThemeType };
