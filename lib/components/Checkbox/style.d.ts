declare type StyledCheckboxSkinType = {
    checkedState: boolean | 'indeterminate';
    elementFocus: boolean;
    disabled?: boolean;
    error?: boolean;
};
declare type CheckboxThemeType = {
    idle: {
        backgroundColor: string;
        borderColor: string;
        borderRadius: string;
    };
    focus: {
        boxShadow: string;
    };
    checked: {
        backgroundColor: string;
        borderColor: string;
    };
    idleDisabled: {
        background: string;
    };
    checkedDisabled: {
        background: string;
    };
    error: {
        borderColor: string;
    };
};
declare const StyledCheckbox: import("styled-components").StyledComponent<"input", import("../../types/ThemeType").default, {}, never>;
declare const StyledCheckboxSkin: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, StyledCheckboxSkinType, never>;
export { StyledCheckbox, StyledCheckboxSkin, CheckboxThemeType };
