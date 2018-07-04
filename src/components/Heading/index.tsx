import React, { StatelessComponent } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { StyledType } from '../../utility/styled';

type HeadingThemeType = StyledType & {
    color: string;
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
};

type PropsType = StyledType & {
    subHeading?: boolean;
    hierarchy?: 1 | 2 | 3 | 4 | 5 | 6;
};

const HeadingElement: StatelessComponent<PropsType> = (props): JSX.Element => {
    const Element = props.hierarchy !== undefined ? `h${props.hierarchy}` : 'div';

    return (
        <Element role="heading" className={props.className} subHeading={props.subHeading}>
            {props.children}
        </Element>
    );
};

const StyledHeading = styled(HeadingElement)`
    color: ${({ subHeading, theme }): string => !subHeading ? theme.Heading.color : theme.SubHeading.color};
    font-family: ${({ subHeading, theme }): string => !subHeading ? theme.Heading.fontFamily : theme.SubHeading.fontFamily};
    font-size: ${({ subHeading, theme }): string => !subHeading ? theme.Heading.fontSize : theme.SubHeading.fontSize};
    font-weight: ${({ subHeading, theme }): string => !subHeading ? theme.Heading.fontWeight : theme.SubHeading.fontWeight};
    line-height: 1.5;
    margin: 0;
`;

export default StyledHeading;
export { PropsType, HeadingThemeType };
