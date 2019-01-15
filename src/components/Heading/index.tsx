import React, { FunctionComponent } from 'react';
import styled from '../../utility/_styled';

type HierarchyType = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingHierarchyThemeType = {
    fontFamily: string;
    fontSize: string;
    fontWeight: {
        light: string;
        default: string;
    };
    lineHeight: string;
    color: string;
};

type HeadingThemeType = {
    hierarchy1: HeadingHierarchyThemeType;
    hierarchy2: HeadingHierarchyThemeType;
    hierarchy3: HeadingHierarchyThemeType;
    hierarchy4: HeadingHierarchyThemeType;
    hierarchy5: HeadingHierarchyThemeType;
    hierarchy6: HeadingHierarchyThemeType;
    [key: string]: HeadingHierarchyThemeType;
};

type PropsType = {
    hierarchy?: HierarchyType;
    element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'p';
    textAlign?: 'left' | 'right' | 'center' | 'justify';
    light?: boolean;
};

const Heading = styled.div.attrs(() => ({ role: 'heading' }))<PropsType>`
    color: ${({ hierarchy, theme }): string =>
        !hierarchy ? theme.Heading.hierarchy1.color : theme.Heading[`hierarchy${hierarchy}`].color};
    font-family: ${({ hierarchy, theme }): string =>
        !hierarchy ? theme.Heading.hierarchy1.fontFamily : theme.Heading[`hierarchy${hierarchy}`].fontFamily};
    font-size: ${({ hierarchy, theme }): string =>
        !hierarchy ? theme.Heading.hierarchy1.fontSize : theme.Heading[`hierarchy${hierarchy}`].fontSize};
    font-weight: ${({ light, hierarchy, theme }): string => {
        if (light && hierarchy) return theme.Heading[`hierarchy${hierarchy}`].fontWeight.light;
        if (!light && hierarchy) return theme.Heading[`hierarchy${hierarchy}`].fontWeight.default;
        if (light && !hierarchy) return theme.Heading.hierarchy1.fontWeight.light;

        return theme.Heading.hierarchy1.fontWeight.default;
    }};
    line-height: ${({ hierarchy, theme }): string =>
        !hierarchy ? theme.Heading.hierarchy1.lineHeight : theme.Heading[`hierarchy${hierarchy}`].lineHeight};

    text-align: ${({ textAlign }): string => (textAlign !== undefined ? textAlign : '')};
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;

export default Heading;
export { PropsType, HeadingThemeType, HeadingHierarchyThemeType, HierarchyType };
