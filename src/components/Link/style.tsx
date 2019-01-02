import _R from 'react';
import { css, StyledComponentClass as _S } from 'styled-components';
import styled from '../../utility/styled';
import ThemeType from '../../types/ThemeType';

type LinkThemeType = {
    default: {
        color: string;
        textDecoration: string;
        fontSize: string;
    };
    hover: {
        color: string;
    };
};

type ThemePropsType = { theme: ThemeType };

const LinkStyles = css`
    color: ${({ theme }: ThemePropsType): string => theme.Link.default.color};
    text-decoration: ${({ theme }: ThemePropsType): string => theme.Link.default.textDecoration};
    transition: color 100ms;
    background-color: transparent;

    &:hover {
        color: ${({ theme }: ThemePropsType): string => theme.Link.hover.color};
        background-color: transparent;
    }
`;

const StyledLink = styled.a`
    ${LinkStyles}
`;

const StyledButton = styled.button`
    color: ${({ theme }): string => theme.Link.default.color};
    text-decoration: ${({ theme }): string => theme.Link.default.textDecoration};
    cursor: pointer;
    transition: color 100ms;
    display: inline;
    border: none;
    font-size: ${({ theme }): string => theme.Link.default.fontSize};
    background-color: transparent;
    padding: 0;

    &:hover {
        color: ${({ theme }): string => theme.Link.hover.color};
        background-color: transparent;
    }
`;

export default StyledLink;
export { LinkThemeType, StyledButton, LinkStyles };
