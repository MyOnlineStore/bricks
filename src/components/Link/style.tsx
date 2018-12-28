import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled from '../../utility/_styled';

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

const StyledLink = styled.a`
    color: ${({ theme }): string => theme.Link.default.color};
    text-decoration: ${({ theme }): string => theme.Link.default.textDecoration};
    transition: color 100ms;
    background-color: transparent;

    &:hover {
        color: ${({ theme }): string => theme.Link.hover.color};
        background-color: transparent;
    }
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
export { LinkThemeType, StyledButton };
