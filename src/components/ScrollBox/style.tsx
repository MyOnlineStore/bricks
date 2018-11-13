import { default as _R } from 'react';
import { StyledComponentClass as _S, css } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/_styled';

/* tslint:disable */
const styles = require('simplebar/dist/simplebar.min.css').toString();
/* tslint:enable */

type ScrollBoxThemeType = {
    scrollbar: {
        background: string;
    };
};

type effectPropsType = {
    show: boolean;
};

// prettier-ignore
const simplebarStyles = css`
    ${styles}
`;

// prettier-ignore
const StyledWrapper = styled.div`
    position: relative;
    flex-grow: 1;
    display: flex;
    max-height: inherit;
    overflow: hidden;

    ${simplebarStyles}
`;

const StyledScrollBox = styled.div`
    position: relative;
    flex-grow: 1;
    overflow: hidden;

    .vertical {
        min-width: 3px;
        width: 4%
        max-width: 6px;
    }

    .vertical .simplebar-scrollbar {
        width: 100%;
    }

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
    z-index: 1;
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
    z-index: 1;
`;

export default StyledScrollBox;
export { StyledWrapper, ScrollBoxThemeType, StyledBottom, StyledTop };
