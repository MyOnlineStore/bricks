import { PlacementType } from '.';
declare type PopoverThemeType = {
    background: string;
    borderRadius: string;
};
declare type PopoverAnchorPropsType = {
    stretch?: boolean;
};
declare const PopoverAnchor: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, PopoverAnchorPropsType, never>;
declare const PopoverBackground: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, {}, never>;
declare const PopoverContent: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, {}, never>;
declare const PopoverWindow: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, {}, never>;
declare type PopoverArrowPropsType = {
    placement: PlacementType;
    shadow?: boolean;
};
declare const PopoverArrow: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, PopoverArrowPropsType, never>;
export { PopoverAnchor, PopoverArrow, PopoverBackground, PopoverContent, PopoverWindow, PopoverThemeType };
