import React, { StatelessComponent } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { StyledType } from '../../utility/styled';

type HeadingThemeType = StyledType & {
    default: {
        color: string;
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
        textTransform: string;
    };
    hierarchy: [
        {
            color: string;
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            textTransform: string;
        },
        {
            color: string;
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            textTransform: string;
        },
        {
            color: string;
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            textTransform: string;
        },
        {
            color: string;
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            textTransform: string;
        },
        {
            color: string;
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            textTransform: string;
        },
        {
            color: string;
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            textTransform: string;
        }
    ];
};

type PropsType = StyledType & {
    hierarchy?: 1 | 2 | 3 | 4 | 5 | 6;
};

const HeadingElement: StatelessComponent<PropsType> = (props): JSX.Element => {
    const Element = props.hierarchy !== undefined ? `h${props.hierarchy}` : 'div';

    return (
        <Element role="heading" className={props.className}>
            {props.children}
        </Element>
    );
};

const StyledHeading = styled(HeadingElement)`
    color: ${({ hierarchy, theme }): string =>
        !hierarchy ? theme.Heading.default.color : theme.Heading.hierarchy[hierarchy - 1].color};
    font-family: ${({ hierarchy, theme }): string =>
        !hierarchy ? theme.Heading.default.fontFamily : theme.Heading.hierarchy[hierarchy - 1].fontFamily};
    font-size: ${({ hierarchy, theme }): string =>
        !hierarchy ? theme.Heading.default.fontSize : theme.Heading.hierarchy[hierarchy - 1].fontSize};
    font-weight: ${({ hierarchy, theme }): string =>
        !hierarchy ? theme.Heading.default.fontWeight : theme.Heading.hierarchy[hierarchy - 1].fontWeight};
    line-height: ${({ hierarchy, theme }): string =>
        !hierarchy ? theme.Heading.default.lineHeight : theme.Heading.hierarchy[hierarchy - 1].lineHeight};
    text-transform: ${({ hierarchy, theme }): string =>
        !hierarchy ? theme.Heading.default.textTransform : theme.Heading.hierarchy[hierarchy - 1].textTransform}
    margin: 0;
`;

export default StyledHeading;
export { PropsType, HeadingThemeType };
