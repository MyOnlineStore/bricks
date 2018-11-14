import ThemeType from '../../types/ThemeType';
declare type SkeletonThemeType = {
    common: {
        backgroundColor: string;
        borderRadius: string;
    };
    Text: {
        fontSize: string;
    };
    Button: {
        fontSize: string;
    };
};
declare const getSkeletonStyles: (theme: ThemeType) => string;
export default getSkeletonStyles;
export { SkeletonThemeType };
