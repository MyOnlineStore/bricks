import styled from '../../utility/styled';

type HierarchyType = 1 | 2 | 3 | 4 | 5 | 6;

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
    6: HeadingHierarchyThemeType;
};

type PropsType = {
    hierarchy?: HierarchyType;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'p';
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

export default Heading;
export { PropsType, HeadingThemeType, HeadingHierarchyThemeType, HierarchyType };
