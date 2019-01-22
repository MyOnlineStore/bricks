import RecursivePartialType from '../../types/_RecursivePartialType';
import ThemeType from '../../types/ThemeType';
declare type ContrastThemeType = {
    overides: RecursivePartialType<ThemeType>;
    default: {
        background: string;
    };
};
declare const StyledContrast: import("styled-components").StyledComponent<"div", ThemeType, {}, never>;
export default StyledContrast;
export { ContrastThemeType };
