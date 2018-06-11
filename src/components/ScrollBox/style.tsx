import { default as _R } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import { PropsType } from '.';
import _T from '../../types/ThemeType';
import styled from '../../utility/styled';

type ScrollBoxThemeType = {
    scrollbar: {
        background: string;
    };
};

const StyledTop = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 0) 100%);
    height: 6px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;

const StyledBottom = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.1) 100%);
    height: 6px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;

const StyledScrollBox = styled.div`
    position: relative;
    max-height: ${({ maxHeight }: PropsType): string => `${maxHeight}px`};
    overflow: hidden;

    .simplebar-scrollbar::before {
        background: ${({ theme }): string => theme.ScrollBox.scrollbar.background};
    }
`;

export default StyledScrollBox;
export { StyledTop, StyledBottom, ScrollBoxThemeType };
