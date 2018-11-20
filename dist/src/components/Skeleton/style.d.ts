import _T from '../../types/ThemeType';
declare type SkeletonThemeType = {
    common: {
        backgroundColor: string;
        borderRadius: string;
    };
    Text: {
        fontSize: string;
    };
};
declare const getSkeletonStyles: (theme: _T) => string;
export default getSkeletonStyles;
export { SkeletonThemeType };
