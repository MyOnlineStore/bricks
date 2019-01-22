declare type RaisedLevelThemeType = {
    boxShadow: string;
};
declare type RaisedThemeType = {
    level0: RaisedLevelThemeType;
    level1: RaisedLevelThemeType;
    level2: RaisedLevelThemeType;
    [key: string]: RaisedLevelThemeType;
};
declare type PropsType = {
    level: 0 | 1 | 2;
};
declare const Raised: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, PropsType, never>;
export default Raised;
export { RaisedLevelThemeType, RaisedThemeType, PropsType };
