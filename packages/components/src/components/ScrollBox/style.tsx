/// <reference path="../../../env.d.ts" />
import styled, { css } from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import styles from 'simplebar/dist/simplebar.min.css';

type ScrollBoxThemeType = {
    scrollbar: {
        background: string;
    };
};

type EffectPropsType = {
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

/* position: relative; */
/* overflow: hidden; */
const StyledScrollBox = styled.div`

flex-grow: 1;

    .simplebar-vertical {
        min-width: 3px;
        width: 4%
        max-width: 6px;
    }

    .simplebar-vertical .simplebar-scrollbar {
        width: 100%;
    }

    .simplebar-scrollbar::before {
        background: ${({ theme }): string => theme.ScrollBox.scrollbar.background};
    }
`;

const StyledTop = styled.div<EffectPropsType>`
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

const StyledBottom = styled.div<EffectPropsType>`
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

const composeScrollBoxTheme = (themeTools: ThemeTools): ScrollBoxThemeType => {
    const { colors } = themeTools.themeSettings;

    return {
        scrollbar: {
            background: colors.grey.base,
        },
    };
};

export default StyledScrollBox;
export { StyledWrapper, ScrollBoxThemeType, StyledBottom, StyledTop, composeScrollBoxTheme };
