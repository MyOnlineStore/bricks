import { PropsType } from '.';
import { TrblType } from '../../utility/trbl';
declare type BoxPropsType = PropsType & {
    flexWrap?: PropsType['wrap'];
    elementHeight?: PropsType['height'];
    elementWidth?: PropsType['width'];
    elementMaxHeight?: PropsType['height'];
    elementMinHeight?: PropsType['minHeight'];
    elementMaxWidth?: PropsType['maxWidth'];
    elementMinWidth?: PropsType['minWidth'];
    flexDirection?: PropsType['direction'];
    flexOrder?: PropsType['order'];
    margin?: TrblType;
    padding?: TrblType;
};
declare const StyledDiv: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, BoxPropsType, never>;
declare const StyledSpan: import("styled-components").StyledComponent<"span", import("../../types/ThemeType").default, BoxPropsType, never>;
export { StyledDiv, StyledSpan, BoxPropsType };
