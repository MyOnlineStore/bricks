declare type PropsType = {
    headerAlign: 'start' | 'center' | 'end';
    onClick?(): void;
};
declare const StyledHeader: import("styled-components").StyledComponent<"th", import("../../../types/ThemeType").default, PropsType, never>;
export default StyledHeader;
