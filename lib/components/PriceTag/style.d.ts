declare type PriceTagThemeType = {
    strikethroughColor: string;
};
declare type PropsType = {
    strikethrough?: boolean;
};
declare const StyledPriceTag: import("styled-components").StyledComponent<"span", import("../../types/ThemeType").default, PropsType, never>;
export default StyledPriceTag;
export { PriceTagThemeType };
