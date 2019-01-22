declare type RangeThemeType = {
    default: {
        track: {
            background: string;
            border: string;
        };
        active: {
            background: string;
            border: string;
            boxShadow: string;
        };
        slider: {
            background: string;
            border: string;
        };
    };
    disabled: {
        track: {
            background: string;
            border: string;
        };
        slider: {
            background: string;
            border: string;
        };
    };
};
declare type PropsType = {
    disabled: boolean;
    focus: boolean;
};
declare const StyledWrapper: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, PropsType, never>;
export default StyledWrapper;
export { RangeThemeType };
