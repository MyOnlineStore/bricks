import ThemeType from '../../types/ThemeType';
declare type LinkThemeType = {
    default: {
        color: string;
        textDecoration: string;
        fontSize: string;
    };
    hover: {
        color: string;
    };
};
declare const LinkStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
declare const StyledLink: import("styled-components").StyledComponent<"a", ThemeType, {}, never>;
declare const StyledButton: import("styled-components").StyledComponent<"button", ThemeType, {}, never>;
export default StyledLink;
export { LinkThemeType, StyledButton, LinkStyles };
