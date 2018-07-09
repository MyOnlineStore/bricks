import { default as _R } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type ScrollBoxThemeType = {
    scrollbar: {
        background: string;
    };
};

type effectPropsType = {
    show: boolean;
};

const StyledScrollBox = styled.div`
    position: relative;
    flex-grow: 1;
    overflow: hidden;

    .simplebar-scrollbar::before {
        background: ${({ theme }): string => theme.ScrollBox.scrollbar.background};
    }
`;

const StyledTop = withProps<effectPropsType, HTMLDivElement>(styled.div)`
    opacity: ${({ show }): string => (show ? '1' : '0')};
    transition: opacity 100ms;
    background: linear-gradient(to top, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.1) 100%);
    height: 6px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;

const StyledBottom = withProps<effectPropsType, HTMLDivElement>(styled.div)`
    opacity: ${({ show }): string => (show ? '1' : '0')};
    transition: opacity 100ms;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.1) 100%);
    height: 6px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;

export default StyledScrollBox;
export { ScrollBoxThemeType, StyledBottom, StyledTop };
