import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';

type HierarchyType = 1 | 2 | 3 | 4 | 5;

type HeadingHierarchyThemeType = {
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
    color: string;
};

type HeadingThemeType = {
    1: HeadingHierarchyThemeType;
    2: HeadingHierarchyThemeType;
    3: HeadingHierarchyThemeType;
    4: HeadingHierarchyThemeType;
    5: HeadingHierarchyThemeType;
};

type PropsType = {
    hierarchy?: HierarchyType;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'div' | 'span' | 'p';
    textAlign?: 'left' | 'right' | 'center' | 'justify';
};

const Heading = styled.div.attrs(() => ({ role: 'heading' }))<PropsType>`
    color: ${({ hierarchy, theme }): string => (!hierarchy ? theme.Heading[1].color : theme.Heading[hierarchy].color)};
    font-family: ${({ hierarchy, theme }): string =>
        !hierarchy ? theme.Heading[1].fontFamily : theme.Heading[hierarchy].fontFamily};
    font-size: ${({ hierarchy, theme }): string =>
        !hierarchy ? theme.Heading[1].fontSize : theme.Heading[hierarchy].fontSize};
    font-weight: ${({ hierarchy, theme }): string => {
        if (hierarchy) return theme.Heading[hierarchy].fontWeight;

        return theme.Heading[1].fontWeight;
    }};
    line-height: ${({ hierarchy, theme }): string =>
        !hierarchy ? theme.Heading[1].lineHeight : theme.Heading[hierarchy].lineHeight};

    text-align: ${({ textAlign }): string => (textAlign !== undefined ? textAlign : '')};
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;

const composeHeadingTheme = (themeTools: ThemeTools): HeadingThemeType => {
    const { colors, text } = themeTools.themeSettings;

    return {
        1: {
            fontFamily: text.secondaryFont,
            fontSize: text.fontSize.larger5,
            fontWeight: text.fontWeight.regular,
            lineHeight: text.lineHeight.larger5,
            color: themeTools.calculateContrastTextColor(colors.background),
        },
        2: {
            fontFamily: text.secondaryFont,
            fontSize: text.fontSize.larger4,
            fontWeight: text.fontWeight.regular,
            lineHeight: text.lineHeight.larger4,
            color: themeTools.calculateContrastTextColor(colors.background),
        },
        3: {
            fontFamily: text.secondaryFont,
            fontSize: text.fontSize.larger3,
            fontWeight: text.fontWeight.regular,
            lineHeight: text.lineHeight.larger3,
            color: themeTools.calculateContrastTextColor(colors.background),
        },
        4: {
            fontFamily: text.secondaryFont,
            fontSize: text.fontSize.larger2,
            fontWeight: text.fontWeight.regular,
            lineHeight: text.lineHeight.larger2,
            color: themeTools.calculateContrastTextColor(colors.background),
        },
        5: {
            fontFamily: text.secondaryFont,
            fontSize: text.fontSize.larger1,
            fontWeight: text.fontWeight.regular,
            lineHeight: text.lineHeight.larger1,
            color: themeTools.calculateContrastTextColor(colors.background),
        },
    };
};

export default Heading;
export { PropsType, HeadingThemeType, HeadingHierarchyThemeType, HierarchyType, composeHeadingTheme };
