declare type StyledToggleType = {
    checked: boolean;
    disabled: boolean;
    error: boolean;
};
declare type StyledToggleSkinType = {
    checked: boolean;
    error: boolean;
    disabled?: boolean;
    elementFocus: boolean;
};
declare type ToggleThemeType = {
    general: {
        background: string;
    };
    idle: {
        background: string;
        border: string;
    };
    focus: {
        boxShadow: string;
    };
    checked: {
        background: string;
        border: string;
    };
    idleDisabled: {
        background: string;
    };
    checkedDisabled: {
        background: string;
    };
    error: {
        border: string;
    };
};
declare const StyledToggle: import("styled-components").StyledComponent<"input", import("../../types/ThemeType").default, StyledToggleType, never>;
declare const StyledToggleSkin: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, StyledToggleSkinType, never>;
export default StyledToggle;
export { ToggleThemeType, StyledToggleSkin };
