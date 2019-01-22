import ThemeType from '../../types/ThemeType';
declare type SkeletonThemeType = {
    common: {
        backgroundColor: string;
        borderRadius: string;
    };
    Text: {
        fontSize: string;
    };
};
declare const getSkeletonStyles: (theme: ThemeType) => import("styled-components").FlattenSimpleInterpolation;
export default getSkeletonStyles;
export { SkeletonThemeType };
