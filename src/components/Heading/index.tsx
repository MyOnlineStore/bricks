import React, { FunctionComponent } from 'react';
import styled from '../../utility/_styled';

type HierarchyType = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingHierarchyThemeType = {
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
    color: string;
};

type HeadingThemeType = [
    HeadingHierarchyThemeType,
    HeadingHierarchyThemeType,
    HeadingHierarchyThemeType,
    HeadingHierarchyThemeType,
    HeadingHierarchyThemeType,
    HeadingHierarchyThemeType
];

type PropsType = {
    hierarchy?: HierarchyType;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'p';
    textAlign?: 'left' | 'right' | 'center' | 'justify';
};

const Heading = styled.div.attrs(() => ({ role: 'heading' }))<PropsType>`
    color: ${({ hierarchy, theme }): string =>
        !hierarchy ? theme.Heading[0].color : theme.Heading[hierarchy - 1].color};
    font-family: ${({ hierarchy, theme }): string =>
        !hierarchy ? theme.Heading[0].fontFamily : theme.Heading[hierarchy - 1].fontFamily};
    font-size: ${({ hierarchy, theme }): string =>
        !hierarchy ? theme.Heading[0].fontSize : theme.Heading[hierarchy - 1].fontSize};
    font-weight: ${({ hierarchy, theme }): string => {
        if (hierarchy) return theme.Heading[hierarchy - 1].fontWeight;

        return theme.Heading[0].fontWeight;
    }};
    line-height: ${({ hierarchy, theme }): string =>
        !hierarchy ? theme.Heading[0].lineHeight : theme.Heading[hierarchy - 1].lineHeight};

    text-align: ${({ textAlign }): string => (textAlign !== undefined ? textAlign : '')};
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;

export default Heading;
export { PropsType, HeadingThemeType, HeadingHierarchyThemeType, HierarchyType };
