declare type ScrollBoxThemeType = {
    scrollbar: {
        background: string;
    };
};
declare type EffectPropsType = {
    show: boolean;
};
declare const StyledWrapper: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, {}, never>;
declare const StyledScrollBox: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, {}, never>;
declare const StyledTop: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, EffectPropsType, never>;
declare const StyledBottom: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, EffectPropsType, never>;
export default StyledScrollBox;
export { StyledWrapper, ScrollBoxThemeType, StyledBottom, StyledTop };
