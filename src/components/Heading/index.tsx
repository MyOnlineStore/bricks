import React, { StatelessComponent } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { StyledType } from '../../utility/styled';

type HeadingThemeType = {
    color: string;
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
};

type PropsType = StyledType & {
    hierarchy?: 1 | 2 | 3 | 4 | 5 | 6;
};

const HeadingElement: StatelessComponent<PropsType> = (props): JSX.Element => {
    const Element =
        props.hierarchy !== undefined ? `h${props.hierarchy}` : 'div';

    return (
        <Element role="heading" className={props.className}>
            {props.children}
        </Element>
    );
};

const StyledHeading = styled(HeadingElement) `
    color: ${({ theme }): string => theme.Heading.color};
    font-family: ${({ theme }): string => theme.Heading.fontFamily};
    font-size: ${({ theme }): string => theme.Heading.fontSize};
    font-weight: ${({ theme }): string => theme.Heading.fontWeight};
    line-height: 1.5;
    margin: 0;
`;

export default StyledHeading;
export { HeadingElement, PropsType, HeadingThemeType };
